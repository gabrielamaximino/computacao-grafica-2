import * as THREE from '../externo/three.module.js';
import { OrbitControls } from '../externo/OrbitControls.js';

export function build(camera, renderer) {
    const controls = new OrbitControls(camera, renderer.domElement);

    controls.maxPolarAngle = Math.PI * 0.450;
    controls.target.set(0, 10, 0);
    controls.minDistance = 300.0;
    controls.maxDistance = 800.0;
    controls.update();
    
    return controls;
}