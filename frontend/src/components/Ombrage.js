import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function Ombrage() {
  const meshRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    /*const light = new THREE.SpotLight(0xffffff);
    light.position.set(1, 1, 100);
    scene.add(light);*/

    const geometryx = new THREE.BoxGeometry(2, 2, 2); // Cube de taille 2x2x2 avec des normales
    //const geometry = new THREE.CylinderGeometry(2, 2, 2, 7, 1, true);
    //const geometryx = new THREE.DodecahedronGeometry(3, 0);
    //const geometryx = new THREE.IcosahedronGeometry(3, 0);
    //const geometryx = new THREE.PlaneGeometry( 2, 2 );

//fonction de rotation des droites
let M = {x: 0, y:2};
let O = {x: 0, y:0};
function rotate (M, O, angle) {
  var xM, yM, x, y;
  angle *= Math.PI / 180;
  xM = M.x - O.x;
  yM = M.y - O.y;
  x = xM * Math.cos (angle) + yM * Math.sin (angle) + O.x;
  y = - xM * Math.sin (angle) + yM * Math.cos (angle) + O.y;
  return ({x: x, y: y});
}

const geometry = new THREE.BufferGeometry();

// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
let firstFace = rotate(M,O,360/7);
let secondFace = rotate(M,O,(360/7)*2);
let thirdFace = rotate(M,O,(360/7)*3);
let forthFace = rotate(M,O,(360/7)*4);
let fifthFace = rotate(M,O,(360/7)*5);
let sixthFace = rotate(M,O,(360/7)*6);
let seventhFace = rotate(M,O,(360/7)*7);
const vertices = new Float32Array( [
  //premiere face
	/*-1.0, -1.0,  1.0, // v0
	 1.0, -1.0,  1.0, // v1
	 1.0,  1.0,  1.0, // v2

	 1.0,  1.0,  1.0, // v3
	-1.0,  1.0,  1.0, // v4
	-1.0, -1.0,  1.0,  // v5*/
  //premiere face
  0.0, -1.0,  M.y, // v0
  rotate(M,O,360/7).x, -1.0,  rotate(M,O,360/7).y, // v1
  rotate(M,O,360/7).x,  1.0,  rotate(M,O,360/7).y, // v2

  rotate(M,O,360/7).x,  1.0,  rotate(M,O,360/7).y, // v3
  0.0,  1.0,  M.y, // v4
  0.0, -1.0,  M.y,  // v5
  //deuxieme face
  rotate(M,O,360/7).x, -1.0,  rotate(M,O,360/7).y, // v0
  rotate(M,O,(360/7)*2).x, -1.0,  rotate(M,O,(360/7)*2).y, // v1
  rotate(M,O,(360/7)*2).x,  1.0,  rotate(M,O,(360/7)*2).y, // v2

  rotate(M,O,(360/7)*2).x,  1.0,  rotate(M,O,(360/7)*2).y, // v3
  rotate(M,O,360/7).x,  1.0,  rotate(M,O,360/7).y, // v4
  rotate(M,O,360/7).x, -1.0,  rotate(M,O,360/7).y,  // v5
  //troisieme face
  secondFace.x, -1.0,  secondFace.y, // v0
  thirdFace.x, -1.0,  thirdFace.y, // v1
  thirdFace.x,  1.0,  thirdFace.y, // v2

  thirdFace.x,  1.0,  thirdFace.y, // v3
  secondFace.x,  1.0,  secondFace.y, // v4
  secondFace.x, -1.0,  secondFace.y,  // v5
  //quatrieme face
  thirdFace.x, -1.0,  thirdFace.y, // v0
  forthFace.x, -1.0,  forthFace.y, // v1
  forthFace.x,  1.0,  forthFace.y, // v2

  forthFace.x,  1.0,  forthFace.y, // v3
  thirdFace.x,  1.0,  thirdFace.y, // v4
  thirdFace.x, -1.0,  thirdFace.y,  // v5
  //cinquieme face
  forthFace.x, -1.0,  forthFace.y, // v0
  fifthFace.x, -1.0,  fifthFace.y, // v1
  fifthFace.x,  1.0,  fifthFace.y, // v2

  fifthFace.x,  1.0,  fifthFace.y, // v3
  forthFace.x,  1.0,  forthFace.y, // v4
  forthFace.x, -1.0,  forthFace.y,  // v5
  //sixieme face
  fifthFace.x, -1.0,  fifthFace.y, // v0
  sixthFace.x, -1.0,  sixthFace.y, // v1
  sixthFace.x,  1.0,  sixthFace.y, // v2

  sixthFace.x,  1.0,  sixthFace.y, // v3
  fifthFace.x,  1.0,  fifthFace.y, // v4
  fifthFace.x, -1.0,  fifthFace.y,  // v5
  //septieme face
  sixthFace.x, -1.0,  sixthFace.y, // v0
  seventhFace.x, -1.0,  seventhFace.y, // v1
  seventhFace.x,  1.0,  seventhFace.y, // v2

  seventhFace.x,  1.0,  seventhFace.y, // v3
  sixthFace.x,  1.0,  sixthFace.y, // v4
  sixthFace.x, -1.0,  sixthFace.y,  // v5
] );

// itemSize = 3 because there are 3 values (components) per vertex
geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
geometry.computeVertexNormals();


geometry.computeBoundingBox();
var max = geometry.boundingBox.max,
    min = geometry.boundingBox.min;

// Parcours des sommets de la géométrie pour calculer les coordonnées UV
var position = geometry.getAttribute('position');
var uvArray = [];
for (var i = 0; i < position.count; i++) {
    var vertex = new THREE.Vector3();
    vertex.fromBufferAttribute(position, i);

    // Calcul des coordonnées UV en fonction des positions des sommets
    var u = (vertex.x - min.x) / (max.x - min.x);
    var v = (vertex.y - min.y) / (max.y - min.y);
    uvArray.push(u, v);
}

geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvArray), 2));

// Définir les indices de la géométrie
//geometry.setIndex(new THREE.BufferAttribute(indices, 1));

    console.log(geometry.attributes);


    // Charger le shader
    const vertexShader = `
    varying vec3 vNormal;

void main() {
  // ... autres calculs du vertex shader ...

  // Calculez la normale du fragment et transmettez-la au fragment shader
  vNormal = normalMatrix * normal;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
    `;

    const fragmentShader = `
    uniform vec3 lightDirection;
  uniform vec3 diffuseColor;
  uniform float rotationY;

  varying vec3 vNormal;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 lightDir = normalize(lightDirection);
    float diffuseIntensity = max(dot(normal, lightDir), 0.0);
    vec3 diffuse = diffuseColor * diffuseIntensity;

    gl_FragColor = vec4(diffuse,1.0);
  }
    `;


    const material = new THREE.ShaderMaterial({
        uniforms: {
            lightDirection: { value: new THREE.Vector3(1, 1, 1) }, // Direction de la lumière
            diffuseColor: { value: new THREE.Color(1, 1, 1) }, // Couleur diffuse
            rotationY: { value: 0.0 },
          },
      vertexShader,
      fragmentShader,
    });
    material.flatShading = true;

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    camera.position.z = 5;
    

    const animate = () => {
      requestAnimationFrame(animate);

      mesh.rotation.y += 0.01;
      //mesh.rotation.x += 0.01;
      /*if(material.uniforms.rotationY.value >= 1.0){
        material.uniforms.rotationY.value = 0.0;
      };
      material.uniforms.rotationY.value += 0.01/geometry.parameters.thetaLength;*/
      

      renderer.render(scene, camera);
    };

    animate();
    renderer.render(scene, camera);

    //console.log(mesh)

    return () => {
      scene.remove(mesh);
      renderer.dispose();
    };
  }, []);

  return null;
}

export default Ombrage;