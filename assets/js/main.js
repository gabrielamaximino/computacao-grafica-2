import * as THREE from './externo/three.module.js';
import {OrbitControls} from "./externo/OrbitControls.js"
import {Water} from './externo/Water.js'
import {Sky} from './externo/Sky.js'

// Fonte: https://www.liquid.fish/current/threejs
function SceneManager(canvas) {

    const scene = buildScene();
    const renderer = buildRenderer(canvas);
    const camera = buildCamera();
    const sand = buildSand();
    const sky = buildSky();
    const sun = buildSun();
    const water = buildWater();
    const orbitCon = setOrbitControls();

    function buildScene() {
        const scene = new THREE.Scene();
        return scene;
    }

    function buildRenderer(canvas) {
        const renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvas.appendChild(renderer.domElement);
        return renderer;
    }

    function buildCamera() {
        const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 20000);
        camera.position.set(300, 200, -1000);
        return camera;
    }

    // Objects
    function buildSky() {
        const sky = new Sky();
        sky.scale.setScalar(10000);
        scene.add(sky);
        return sky;
    }

    function buildSun() {
        const pmremGenerator = new THREE.PMREMGenerator( renderer );
        
        const sun = new THREE.Vector3();

        const theta = Math.PI * (0.49 - 0.5);
        const phi = 2 * Math.PI * (0.205 - 0.5);

        sun.x = Math.cos(phi);
        sun.y = Math.sin(phi) * Math.sin(theta);
        sun.z = -Math.sin(phi) * Math.cos(theta);

        sky.material.uniforms['sunPosition'].value.copy(sun);

        scene.environment = pmremGenerator.fromScene(sky).texture;
        return sun;
    }

    function buildWater() {
        const waterGeometry = new THREE.PlaneGeometry(10000, 5000);
        const water = new Water(
          waterGeometry,
          {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg', function ( texture ) {
              texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            }),
            alpha: 1.0,
            sunDirection: new THREE.Vector3(),
            sunColor: 0xffffff,
            waterColor: 0x7ac5cd,
            distortionScale: 3.7,
            fog: scene.fog !== undefined
          }
        );
        water.rotation.x =- Math.PI / 2;
        scene.add(water);
        
        const waterUniforms = water.material.uniforms;
        return water;
    }
  
    function buildSand() {
        const loader = new THREE.TextureLoader;
        const geometry = new THREE.PlaneGeometry(10000, 5000);
        const material = new THREE.MeshBasicMaterial( {
            map: loader.load('assets/images/areia.jpg', function ( texture ) {
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                texture.repeat.set( 300, 60 );
            })} );

        const sand = new THREE.Mesh(geometry, material);

        sand.rotation.x = 99;
        scene.add(sand);
        return sand;
    }

    function setOrbitControls() {
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.maxPolarAngle = Math.PI * 0.450;
        controls.target.set(0, 10, 0);
        controls.minDistance = 300.0;
        controls.maxDistance = 800.0;
        controls.update();
        return controls;
    }

    this.update = function() {
        // Animates water
        water.material.uniforms[ 'time' ].value += 1.0 / 60.0;

        renderer.render(scene, camera);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }
    window.addEventListener('resize', onWindowResize);
}

const canvas = document.getElementById("canvas");
const sceneManager = new SceneManager(canvas);

function animate() {
    requestAnimationFrame(animate);
    sceneManager.update();
}

animate();