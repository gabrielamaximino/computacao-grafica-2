import * as THREE from './externo/three.module.js';
import { OrbitControls } from "./externo/OrbitControls.js"
import { Water } from './externo/Water.js'
import { Sky } from './externo/Sky.js'
import { GLTFLoader } from './externo/GLTFLoader.js';
var mixer;
var clock = new THREE.Clock();


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
    const model = buildModels();


    function buildModels() {
        const loader = new GLTFLoader();

        //nadador
        loader.load("./assets/modelos/swimmer/scene.gltf", function (gltf) {

            var nadador = gltf.scene;
            nadador.scale.set(10, 10, 10);
            nadador.position.set(0, -95, 700);
            nadador.rotation.y = 0.0;

            //Animando
            mixer = new THREE.AnimationMixer(gltf.scene);
            console.log(gltf.animations);
            mixer.clipAction(gltf.animations[0]).play();

            scene.add(nadador);

        });

        // garota em pe
        loader.load('assets/modelos/garota-em-pe/scene.gltf', function (gltf) {
            const girl = gltf.scene;

            //adiciona sombra
            girl.traverse(function (model) {
                if (model.isMesh) {
                    model.castShadow = true;
                }
            });

            gltf.scene.scale.set(150, 150, 150)
            girl.position.set(-300, 20, -600)
            girl.castShadow = true;
            girl.receiveShadow = true;
            // girl.rotation.set(99, 0, 0)

            scene.add(girl);

        }, undefined, function (error) {

            console.error(error);

        })

        // garota deitada
        loader.load('assets/modelos/garota-deitada/scene.gltf', function (gltf) {
            const girl = gltf.scene;

            girl.traverse(function (model) {
                if (model.isMesh) {
                    model.castShadow = true;
                }
            });

            gltf.scene.scale.set(1.2, 1.2, 1.2)
            girl.position.set(-250, 5, 100)
            girl.rotation.set(99, 0, 0)

            scene.add(girl);

        }, undefined, function (error) {

            console.error(error);

        })
        // bola volei
        loader.load('assets/modelos/bola/scene.gltf', function (gltf) {
            const bola = gltf.scene;

            bola.traverse(function (model) {
                if (model.isMesh) {
                    model.castShadow = true;
                }
            });

            gltf.scene.scale.set(0.75, 0.75, 0.75);
            bola.position.set(-1200, 60, -1000);
            // rede.rotation.set(0, -300, 0)

            scene.add(bola);

        }, undefined, function (error) {

            console.error(error);

        })

        // rede volei
        loader.load('assets/modelos/rede-volei/scene.gltf', function (gltf) {
            const rede = gltf.scene;

            rede.traverse(function (model) {
                model.castShadow = true;
                if (model.isMesh) {
                    model.castShadow = true;
                }
            });

            gltf.scene.scale.set(1.6, 1.6, 1.6)
            rede.position.set(-2000, 10, -1000)
            rede.rotation.set(0, -300, 0)

            scene.add(rede);

        }, undefined, function (error) {

            console.error(error);

        })


        //prancha
        loader.load('assets/modelos/prancha/scene.gltf', function (gltf) {
            const prancha = gltf.scene;

            prancha.traverse(function (model) {
                if (model.isMesh) {
                    model.castShadow = true;
                }
            });

            gltf.scene.scale.set(20, 20, 20);
            prancha.position.set(500, 70, -60);
            prancha.rotation.set(0, 300, 0)

            scene.add(prancha);

        }, undefined, function (error) {

            console.error(error);

        })

        // boia 
        loader.load('assets/modelos/boia/scene.gltf', function (gltf) {
            const boia = gltf.scene;

            boia.traverse(function (model) {
                if (model.isMesh) {
                    model.castShadow = true;
                }
            });

            gltf.scene.scale.set(0.25, 0.25, 0.25)
            boia.position.set(120, 0, 0)
            // gaivota.rotation.set(0, -200, 0)

            scene.add(boia);

        }, undefined, function (error) {

            console.error(error);

        })
        // mesa 
        loader.load('assets/modelos/mesa/scene.gltf', function (gltf) {
            const mesa = gltf.scene;

            mesa.traverse(function (model) {
                if (model.isMesh) {
                    model.castShadow = true;
                }
            });

            gltf.scene.scale.set(40, 40, 40)
            mesa.position.set(300, 60, -800)
            // gaivota.rotation.set(0, -200, 0)

            scene.add(mesa);

        }, undefined, function (error) {

            console.error(error);

        })
        // gaivota
        loader.load('assets/modelos/gaivota/scene.gltf', function (gltf) {
            const gaivota = gltf.scene;

            gaivota.traverse(function (model) {
                if (model.isMesh) {
                    model.castShadow = true;
                }
            });

            gltf.scene.scale.set(20, 20, 20)
            gaivota.position.set(-700, 60, -700)
            // gaivota.rotation.set(0, -200, 0)

            var gaivota2 = gaivota.clone();
            gaivota2.position.set(-600, 60, -700)
            gaivota2.rotation.set(0, 40, 0)


            scene.add(gaivota);
            scene.add(gaivota2);

        }, undefined, function (error) {

            console.error(error);

        })

        // cachorro
        loader.load('assets/modelos/cachorro/scene.gltf', function (gltf) {
            const cachorro = gltf.scene;

            cachorro.traverse(function (model) {
                if (model.isMesh) {
                    model.castShadow = true;
                }
            });

            gltf.scene.scale.set(100, 100, 100)
            cachorro.position.set(-150, 0, -200)
            cachorro.rotation.set(0, -200, 0)


            scene.add(cachorro);

        }, undefined, function (error) {

            console.error(error);

        })
        // casa
        loader.load('assets/modelos/casa/scene.gltf', function (gltf) {
            const house = gltf.scene;

            house.traverse(function (model) {
                if (model.isMesh) {
                    model.castShadow = true;
                }
            });

            gltf.scene.scale.set(80, 80, 80)
            house.position.set(0, 110, -2300)
            house.rotation.set(0, 700, 0)


            scene.add(house);

        }, undefined, function (error) {

            console.error(error);

        })
        // planta
        loader.load('assets/modelos/planta/scene.gltf', function (gltf) {
            var group = new THREE.Object3D();
            const bush = gltf.scene;

            bush.traverse(function (model) {
                if (model.isMesh) {
                    model.castShadow = true;
                }
            });

            gltf.scene.scale.set(3, 3, 3)

            for (let i = 300; i < 5500; i += 300) {
                var instance = bush.clone();
                instance.position.set(i, 0, -3000);
                group.add(instance);

                var instance = bush.clone();
                instance.position.set(-i, 0, -3000);
                group.add(instance);

            }

            scene.add(group);

        }, undefined, function (error) {

            console.error(error);

        });

        // coca
        loader.load('assets/modelos/coca/Bottle_Only.gltf', function (gltf) {
            const coke = gltf.scene;
            coke.traverse(function (model) {
                if (model.isMesh) {
                    model.castShadow = true;
                }
            });

            gltf.scene.scale.set(50, 50, 50)
            coke.position.set(-300, 30, -200)
            scene.add(coke);

        }, undefined, function (error) {

            console.error(error);

        });

        // 2 palmeiras
        loader.load('assets/modelos/palmeira/scene.gltf', function (gltf) {
            const light = new THREE.DirectionalLight(0xF7C869, 0.4); // soft white light
            light.position.set(-30, 300, 1500);
            light.target.position.set(-150, 0, -200);
            light.castShadow = true;

            let d = 4000;
            let mapSize = 10000;
            light.shadow.radius = 1000;
            light.shadow.mapSize.width = mapSize;
            light.shadow.mapSize.height = mapSize;
            light.shadow.camera.top = light.shadow.camera.right = -d;
            light.shadow.camera.bottom = light.shadow.camera.left = d;
            light.shadow.camera.near = 1;
            light.shadow.camera.far = 5000;


            scene.add(light, light.target);
            var group = new THREE.Object3D();
            var palmeira = gltf.scene;
            palmeira.scale.set(200, 200, 200)
            palmeira.position.set(-500, 10, -2300)

            palmeira.traverse(function (model) {
                if (model.isMesh) {
                    model.castShadow = true;
                }
            });

            group.add(palmeira)
            var instance = palmeira.clone();
            instance.position.set(400, 10, -2300)

            group.add(instance)

            scene.add(group)
        }, undefined, function (error) {

            console.error(error);

        });

        // guarda sol
        loader.load('assets/modelos/guarda-sol/scene.gltf', function (gltf) {
            const guarda_sol = gltf.scene;
            guarda_sol.traverse(function (model) {
                if (model.isMesh) {
                    model.castShadow = true;
                }
            });
            guarda_sol.scale.set(2.5, 2.5, 2.5)
            guarda_sol.position.set(-460, 0, -200)

            scene.add(guarda_sol)

        }, undefined, function (error) {

            console.error(error);

        });

        // cadeira
        loader.load('assets/modelos/cadeira/scene.gltf', function (gltf) {
            const cadeira = gltf.scene;
            cadeira.traverse(function (model) {
                if (model.isMesh) {
                    model.castShadow = true;
                }
            });
            cadeira.scale.set(10, 10, 10)
            cadeira.position.set(-400, 0, -200)

            scene.add(cadeira)
        }, undefined, function (error) {

            console.error(error);

        });

    }

    function buildScene() {
        const scene = new THREE.Scene();
        return scene;
    }

    function buildRenderer(canvas) {
        const renderer = new THREE.WebGLRenderer({ alpha: false });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvas.appendChild(renderer.domElement);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // renderer.gammaOutput = true;
        // renderer.gammaFactor = -10;
        return renderer;
    }

    function buildCamera() {
        const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 20000);
        camera.position.set(0, 0, 1000);
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
        const pmremGenerator = new THREE.PMREMGenerator(renderer);

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
                waterNormals: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg', function (texture) {
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
        water.rotation.x = - Math.PI / 2;
        scene.add(water);

        const waterUniforms = water.material.uniforms;
        return water;
    }

    function buildSand() {
        const loader = new THREE.TextureLoader;
        const geometry = new THREE.PlaneGeometry(10000, 5000);
        const material = new THREE.MeshStandardMaterial({
            emissive: 0x946c41,
            metalness: 0.0,
            map: loader.load('assets/images/areia.jpg', function (texture) {
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                texture.repeat.set(300, 60);
            })
        });

        const sand = new THREE.Mesh(geometry, material);
        sand.receiveShadow = true;
        sand.rotation.x = 99;
        scene.add(sand,);
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

    this.update = function () {
        // Animates water
        water.material.uniforms['time'].value += 1.0 / 60.0;

        renderer.render(scene, camera);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize);
}

const canvas = document.getElementById("canvas");
const sceneManager = new SceneManager(canvas);

function animate() {
    requestAnimationFrame(animate);
    if (mixer) mixer.update(clock.getDelta());
    sceneManager.update();
}

animate();