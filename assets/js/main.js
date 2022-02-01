import * as THREE from './externo/three.module.js';
import * as Scene from './elementos/scene.js';
import * as Sand from './elementos/sand.js';
import * as Water from './elementos/water.js';
import * as Sun from './elementos/sun.js';
import * as Sky from './elementos/sky.js';
import * as Light from './elementos/light.js';
import * as OrbitControls from './elementos/orbitControls.js';
import * as Models from './elementos/models.js';
import { GLTFLoader } from './externo/GLTFLoader.js';

// Fonte: https://www.liquid.fish/current/threejs

var clock = new THREE.Clock();
var swimmer, mixer;
const loader = new GLTFLoader();

function SceneManager(canvas) {
    const scene = Scene.buildScene();
    const renderer = Scene.buildRenderer(canvas);
    const camera = Scene.buildCamera();
    
    Light.build(scene);
    Sand.build(scene);

    const sky = Sky.build(scene);
   
    Sun.build(scene, sky, renderer);

    const water = Water.build(scene);

    OrbitControls.build(camera, renderer);

    Models.buildStaticModels(scene);

    // build swimmer
    loader.load('/assets/modelos/swimmer/scene.gltf', function (gltf) {

        swimmer = gltf.scene;
        swimmer.scale.set(10, 10, 10);
        swimmer.position.set(1200, -95, 700);

        //Animando
        mixer = new THREE.AnimationMixer(gltf.scene);
        console.log(gltf.animations);
        mixer.clipAction(gltf.animations[0]).play();

        scene.add(swimmer);

    });

    

    this.update = function () {
        // Animates water
        water.material.uniforms['time'].value += 1.0 / 60.0;

        // Swimmer
        swimmer_behavior();
        
        renderer.render(scene, camera);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize);
}


const canvas = document.getElementById('canvas');

const sceneManager = new SceneManager(canvas);

function animate() {
    requestAnimationFrame(animate);

    if (mixer) mixer.update(clock.getDelta());
    
    sceneManager.update();
}

animate();


function swimmer_behavior() {
    if (695 <= swimmer.position.z && swimmer.position.z < 2000 && swimmer.position.x == 1200) {
        if (swimmer.rotation.y == -300) { swimmer.rotation.y = 0 }
        swimmer.position.z += 5;
    }
    else if (swimmer.position.x < -2000 && swimmer.position.z >= 700) {
        swimmer.rotation.y = 600;
        swimmer.position.z -= 5;
    }
    else if (swimmer.position.z < 700) {
        swimmer.rotation.y = -300;
        swimmer.position.x += 5;
    }
    else if (swimmer.position.z >= 2000) {
        swimmer.rotation.y = 300;
        swimmer.position.x -= 5;
    }
}