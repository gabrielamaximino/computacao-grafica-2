import * as THREE from '../externo/three.module.js';
import { Sky } from '../externo/Sky.js'

export function build(scene) {
    const sky = new Sky();

    sky.scale.setScalar(10000);
    
    scene.add(sky);

    return sky;
}