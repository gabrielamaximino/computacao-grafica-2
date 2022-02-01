import * as THREE from '../externo/three.module.js';


export function build(scene) {
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

    scene.add(sand);

}