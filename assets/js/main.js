// // import { scene } from './elementos/Cena.js';
import {OrbitControls} from "./externo/OrbitControls.js"
import * as THREE from './externo/three.module.js';
// console.log(scene);

// 3 elementos basicos pra cena
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const controlador = new OrbitControls(camera, renderer.domElement);
console.log(controlador);
// 3 elementos pro cubo
var geometria = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});

// adicionando textura no cubo
const loader = new THREE.TextureLoader();
//vamo mudar o material

material = new THREE.MeshBasicMaterial({map: loader.load('./assets/images/grama.jpg')})

var cubo = new THREE.Mesh(geometria, material);

//nao da pra ver ele ainda, tem q add na cena
scene.add(cubo);

// mas ele é adicionado no ponto 0,0 e a camera tbm. é como se a camera tivesse dentro do cubo. precisamos colocar a camera mais pra tras pra ver o cubo de longe

camera.position.z = 10;
// camera.position.x = 2;
// camera.position.y = 1;

// agora preciso renderizar a cena q criei

// agora vamos ver as trasformações. 3 tipos: 

//rotação
cubo.rotation.x = 90;
cubo.rotation.y = 90;
cubo.rotation.z = 30;


// escala
cubo.scale.x = 2
cubo.scale.y = 3
cubo.scale.z = 2

// posição
cubo.position.x = 1;
cubo.position.y = 2;
cubo.position.z = 0;

// ou usar a que seta as 3: cubo.position.set(1, 2, 0);
// o mesmo serve para a rotação: cubo.rotation.set(x, y, z) e posição: cubo.position.set(x, y, z);


// ANIMAÇÃO

function animacao() {
    requestAnimationFrame(animacao);

    // precisa ser incrementado. se ficar estático ele não muda.
    cubo.rotation.z += 0.01;

    // cubo.scale.x += 0.001;

    // cubo.position.z -= 0.1;

    // é preciso renderizar toda vez que acontecer a animação:
    renderer.render(scene, camera);
}

animacao();

// primitivas: cubo, cilindro, cone..
// nivel de detalhes = numero de faces = quarto argumento
geometria = new THREE.CylinderGeometry(1, 1, 2, 100);
material = new THREE.MeshBasicMaterial({color: 0x0fff000})

const cilindro = new THREE.Mesh(geometria, material);

cilindro.position.x = 3;

scene.add(cilindro);

// plano: só é renderizado na frente. é muito usado para fazer terreno.
geometria = new THREE.PlaneGeometry(1, 2);
material = new THREE.MeshBasicMaterial({color: 0x0f0})
var plano = new THREE.Mesh(geometria, material);

plano.position.x = -7;

scene.add(plano);

function animacao2() {
    requestAnimationFrame(animacao2);

    plano.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animacao2();
renderer.render(scene, camera);

