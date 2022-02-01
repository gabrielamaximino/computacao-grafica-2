import * as THREE from '../externo/three.module.js';


export function buildScene() {
    return new THREE.Scene()
}


export function buildCamera() {
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 20000);
    
    camera.position.set(0, 0, 1000);
    
    return camera;
}


export function buildRenderer(canvas) {
    const renderer = new THREE.WebGLRenderer({ alpha: false });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    canvas.appendChild(renderer.domElement);
    
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    return renderer;
}