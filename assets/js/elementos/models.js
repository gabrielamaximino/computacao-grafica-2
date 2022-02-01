import * as THREE from '../externo/three.module.js';
import { GLTFLoader } from '../externo/GLTFLoader.js';

const loader = new GLTFLoader();

var scene;

function GirlStanding() {
    loader.load('assets/modelos/garota-em-pe/scene.gltf', function(gltf) {
        const girl = gltf.scene;

        // Sombra
        girl.traverse(function(model) {
            if (model.isMesh) {
                model.castShadow = true;
            }
        });

        gltf.scene.scale.set(150, 150, 150)

        girl.position.set(-300, 20, -600)
        girl.castShadow = true;
        girl.receiveShadow = true;

        scene.add(girl);
    });
}

function GirlLyingDown() {
    loader.load('assets/modelos/garota-deitada/scene.gltf', function(gltf) {
        const girl = gltf.scene;

        girl.traverse(function(model) {
            if (model.isMesh) {
                model.castShadow = true;
            }
        });

        gltf.scene.scale.set(1.2, 1.2, 1.2);

        girl.position.set(-250, 5, 100);
        girl.rotation.set(99, 0, 0);

        scene.add(girl);
    })
}

function Volleyball() {
    loader.load('assets/modelos/bola/scene.gltf', function(gltf) {
        const ball = gltf.scene;

        ball.traverse(function(model) {
            if (model.isMesh) {
                model.castShadow = true;
            }
        });

        gltf.scene.scale.set(0.75, 0.75, 0.75);

        ball.position.set(-1200, 60, -1000);

        scene.add(ball);
    })
}

function VolleyNet() {
    loader.load('assets/modelos/rede-volei/scene.gltf', function (gltf) {
        const net = gltf.scene;

        net.traverse(function(model) {
            model.castShadow = true;
            if (model.isMesh) {
                model.castShadow = true;
            }
        });

        gltf.scene.scale.set(1.6, 1.6, 1.6);

        net.position.set(-2000, 10, -1000);
        net.rotation.set(0, -300, 0);

        scene.add(net);
    });
}

function Board() {
    loader.load('assets/modelos/prancha/scene.gltf', function(gltf) {
        const board = gltf.scene;

        board.traverse(function(model) {
            if (model.isMesh) {
                model.castShadow = true;
            }
        });

        gltf.scene.scale.set(20, 20, 20);

        board.position.set(500, 70, -60);
        board.rotation.set(0, 300, 0);

        scene.add(board);
    });
}

function Floater() {
    loader.load('assets/modelos/boia/scene.gltf', function(gltf) {
        const floater = gltf.scene;

        floater.traverse(function(model) {
            if (model.isMesh) {
                model.castShadow = true;
            }
        });

        gltf.scene.scale.set(0.25, 0.25, 0.25);

        floater.position.set(120, 0, 0);

        scene.add(floater);
    });
}

function Table() {
    loader.load('assets/modelos/mesa/scene.gltf', function(gltf) {
        const table = gltf.scene;

        table.traverse(function (model) {
            if (model.isMesh) {
                model.castShadow = true;
            }
        });

        gltf.scene.scale.set(40, 40, 40);

        table.position.set(300, 60, -800);

        scene.add(table);
    });
}

function Seagulls() {
    loader.load('assets/modelos/gaivota/scene.gltf', function(gltf) {
        const seagull = gltf.scene;

        seagull.traverse(function(model) {
            if (model.isMesh) {
                model.castShadow = true;
            }
        });

        gltf.scene.scale.set(20, 20, 20);

        seagull.position.set(-700, 60, -700);

        const seagull2 = seagull.clone();
        seagull2.position.set(-600, 60, -700);
        seagull2.rotation.set(0, 40, 0);

        scene.add(seagull, seagull2);
    });
}

function Dog() {
    loader.load('assets/modelos/cachorro/scene.gltf', function(gltf) {
        const dog = gltf.scene;

        dog.traverse(function(model) {
            if (model.isMesh) {
                model.castShadow = true;
            }
        });

        gltf.scene.scale.set(100, 100, 100);

        dog.position.set(-150, 0, -200);
        dog.rotation.set(0, -200, 0);

        scene.add(dog);
    });
}

function House() {
    loader.load('assets/modelos/casa/scene.gltf', function(gltf) {
        const house = gltf.scene;

        house.traverse(function(model) {
            if (model.isMesh) {
                model.castShadow = true;
            }
        });

        gltf.scene.scale.set(80, 80, 80);

        house.position.set(0, 110, -2300);
        house.rotation.set(0, 700, 0);

        scene.add(house);
    });
}

function Bushes() {
    loader.load('assets/modelos/planta/scene.gltf', function(gltf) {
        var right_bush, left_bush;
        var group = new THREE.Object3D();
        const bush = gltf.scene;

        bush.traverse(function(model) {
            if (model.isMesh) {
                model.castShadow = true;
            }
        });

        gltf.scene.scale.set(3, 3, 3);

        for (let i = 300; i < 5500; i += 300) {
            right_bush = bush.clone();
            right_bush.position.set(i, 0, -3000);
            group.add(right_bush);

            left_bush = bush.clone();
            left_bush.position.set(-i, 0, -3000);
            group.add(left_bush);
        }

        scene.add(group);
    });
}

function Coke() {
    loader.load('assets/modelos/coca/Bottle_Only.gltf', function(gltf) {
        const coke = gltf.scene;

        coke.traverse(function(model) {
            if (model.isMesh) {
                model.castShadow = true;
            }
        });

        gltf.scene.scale.set(50, 50, 50);

        coke.position.set(-300, 30, -200);

        scene.add(coke);
    });
}

function PalmTrees() {
    loader.load('assets/modelos/palmeira/scene.gltf', function(gltf) {
        const left_palm = gltf.scene;

        left_palm.scale.set(200, 200, 200);
        left_palm.position.set(-500, 10, -2300);

        left_palm.traverse(function(model) {
            if (model.isMesh) {
                model.castShadow = true;
            }
        });


        const right_palm = left_palm.clone();
        right_palm.position.set(400, 10, -2300);

        scene.add(left_palm, right_palm);
    });
}

function Umbrella() {
    loader.load('assets/modelos/guarda-sol/scene.gltf', function(gltf) {
        const umbrella = gltf.scene;

        umbrella.traverse(function(model) {
            if (model.isMesh) {
                model.castShadow = true;
            }
        });

        umbrella.scale.set(2.5, 2.5, 2.5);
        umbrella.position.set(-460, 0, -200);

        scene.add(umbrella);
    });
}

function Chair() {
    loader.load('assets/modelos/cadeira/scene.gltf', function(gltf) {
        const chair = gltf.scene;

        chair.traverse(function(model) {
            if (model.isMesh) {
                model.castShadow = true;
            }
        });

        chair.scale.set(10, 10, 10);
        chair.position.set(-400, 0, -200);

        scene.add(chair);
    })
}

export function buildStaticModels(currentScene) {
    scene = currentScene;

    Bushes();
    House();
    PalmTrees();
    Table();
    Seagulls();
    GirlStanding();
    GirlLyingDown(); 
    Volleyball(); 
    VolleyNet();
    Board();
    Floater();
    Dog(); 
    Coke();
    Umbrella();
    Chair();
}