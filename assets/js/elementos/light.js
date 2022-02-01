import * as THREE from '../externo/three.module.js';


export function build(scene) {
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
}