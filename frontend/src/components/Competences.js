import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import firstPictureLink from './images/CSS.png';
import secondPictureLink from './images/HTML5.png';
import thirdPictureLink from './images/Javascript.png';
import forthPictureLink from './images/MySQL.png';
import fivePictureLink from './images/NodeJS.png';
import sixPictureLink from './images/PHP.png';
import sevenPictureLink from './images/React.png';
import brickPictureLink from './images/Brick.png';


const CylindreCompetences = () => {
  const canvasRef = useRef();

  function resizeCanvas(renderer){
    let canvasHeight = window.innerWidth;
    let canvasWidth = window.innerWidth;
    if(window.innerWidth > 700){
      if(canvasHeight > window.innerHeight*0.67){
        canvasHeight = window.innerHeight*0.67;
      }
      if(canvasWidth > window.innerHeight*0.67){
        canvasWidth = window.innerHeight*0.67;
      }
    }else{
      if(canvasHeight > window.innerHeight*0.95){
        canvasHeight = window.innerHeight*0.95;
      }
      if(canvasWidth > window.innerHeight*0.95){
        canvasWidth = window.innerHeight*0.95;
      }
    }
    renderer.setSize(canvasWidth, canvasHeight);
  }
  useEffect(() => {
    // Créez une scène
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();

    // Créez une caméra
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 4;

    // Créez un moteur de rendu
    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.setClearColor(0x000000, 0);
    resizeCanvas(renderer)
    window.addEventListener('resize', ()=>{
      resizeCanvas(renderer)
    });
    // document.body.appendChild(renderer.domElement);
    // renderer.setPixelRatio(window.devicePixelRatio);

    const light = new THREE.DirectionalLight( 0xffffff, 0.5 );
    //const light = new THREE.SpotLight(0xffffff);
    //light.position.set(1, 1, 100);
    scene.add(light);

    // Créez un cylindre
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

const uvs = new Float32Array([
    //Premiere face
    0, 0, 
    1/7, 0,
    1/7, 1,
    1/7, 1,
    0, 1,
    0, 0,
    //deuxieme face
    1/7, 0, 
    1/7*2, 0,
    1/7*2, 1,
    1/7*2, 1,
    1/7, 1,
    1/7, 0,
    //troisieme face
    1/7*2, 0, 
    1/7*3, 0,
    1/7*3, 1,
    1/7*3, 1,
    1/7*2, 1,
    1/7*2, 0,
    //quatrieme face
    1/7*3, 0, 
    1/7*4, 0,
    1/7*4, 1,
    1/7*4, 1,
    1/7*3, 1,
    1/7*3, 0,
    //cinquieme face
    1/7*4, 0, 
    1/7*5, 0,
    1/7*5, 1,
    1/7*5, 1,
    1/7*4, 1,
    1/7*4, 0,
    //sixieme face
    1/7*5, 0, 
    1/7*6, 0,
    1/7*6, 1,
    1/7*6, 1,
    1/7*5, 1,
    1/7*5, 0,
    //septieme face
    1/7*6, 0, 
    1/7*7, 0,
    1/7*7, 1,
    1/7*7, 1,
    1/7*6, 1,
    1/7*6, 0, 
  ]);

// itemSize = 3 because there are 3 values (components) per vertex
geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
geometry.computeVertexNormals();


//Texture
    const textureLoader = new THREE.TextureLoader();
    const secondTexture = textureLoader.load(firstPictureLink, (texture) => {
        // Texture chargée avec succès
    }, undefined, (err) => {
        console.error('Erreur de chargement de la texture 2', err);
    });
    const firstTexture = textureLoader.load(secondPictureLink, (texture) => {
        // Texture chargée avec succès
    }, undefined, (err) => {
        console.error('Erreur de chargement de la texture 1', err);
    });
    const thirdTexture = textureLoader.load(thirdPictureLink, (texture) => {
        // Texture chargée avec succès
    }, undefined, (err) => {
        console.error('Erreur de chargement de la texture 3', err);
    });
    const forthTexture = textureLoader.load(forthPictureLink, (texture) => {
        // Texture chargée avec succès
    }, undefined, (err) => {
        console.error('Erreur de chargement de la texture 4', err);
    });
    const fiveTexture = textureLoader.load(fivePictureLink, (texture) => {
        // Texture chargée avec succès
    }, undefined, (err) => {
        console.error('Erreur de chargement de la texture 5', err);
    });
    const sixTexture = textureLoader.load(sixPictureLink, (texture) => {
        // Texture chargée avec succès
    }, undefined, (err) => {
        console.error('Erreur de chargement de la texture 6', err);
    });
    const sevenTexture = textureLoader.load(sevenPictureLink, (texture) => {
        // Texture chargée avec succès
    }, undefined, (err) => {
        console.error('Erreur de chargement de la texture 7', err);
    });
    const brickTexture = textureLoader.load(brickPictureLink, (texture) => {
      // Texture chargée avec succès
  }, undefined, (err) => {
      console.error('Erreur de chargement de la texture brick', err);
  });

    // Définissez un shader personnalisé pour utiliser la texture
    const vertexShader = `
      varying vec2 vUv;
      varying vec3 vNormal;

      void main() {
        vUv = uv;
        vNormal = normalMatrix * normal;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec2 vUv;
      uniform sampler2D uFirstTexture; // Ajoutez un uniform pour la texture
      uniform sampler2D uSecondTexture;
      uniform sampler2D uThirdTexture;
      uniform sampler2D uForthTexture;
      uniform sampler2D uFiveTexture;
      uniform sampler2D uSixTexture;
      uniform sampler2D uSevenTexture;
      uniform sampler2D uBrickTexture;
      uniform vec3 lightDirection;
      uniform vec3 diffuseColor;
      varying vec3 vNormal; 

      vec3 customFunction(vec2 st){
        vec3 result;
        //premiere couleur
        if (st.x <= (1./7.) ) {
            result = vec3(0.985,0.985,0.177);
        //deuxieme couleur
        }else if (st.x > (1./7.) && st.x <= (1./7.)*2. ) {
            result = vec3(0.900,0.224,0.086);
        //troisieme couleur
        }else if (st.x > (1./7.)*2. && st.x <= (1./7.)*3. ) {
            result = vec3(0.269,0.900,0.866);
        //quatrieme couleur
        }else if (st.x > (1./7.)*3. && st.x <= (1./7.)*4. ) {
            result = vec3(0.230,0.985,0.090);
        //cinquieme couleur
        }else if (st.x > (1./7.)*4. && st.x <= (1./7.)*5. ) {
            result = vec3(1.000,0.122,0.999);
        //sixieme couleur
        }else if (st.x > (1./7.)*5. && st.x <= (1./7.)*6. ) {
            result = vec3(0.505,0.244,0.044);
        }else if (st.x > (1./7.)*6. && st.x <= (1./7.)*7. ) {
            result = vec3(0.336,0.414,0.685);
        };
        return result;
    } 

      void main() {
        vec4 texColor;
        //Coordonnees premiere image
        vec2 firstImage = vUv;
        firstImage.x *= 7.;
        //Coordonnees deuxieme image
        vec2 secondImage = firstImage;
        secondImage.x -= 1.;
        //Coordonnees troisieme image
        vec2 thirdImage = secondImage;
        thirdImage.x -= 1.;
        //Coordonnees quatrieme image
        vec2 forthImage = thirdImage;
        forthImage.x -= 1.;
        //Coordonnees cinquieme image
        vec2 fiveImage = forthImage;
        fiveImage.x -= 1.;
        //Coordonnees sixieme image
        vec2 sixImage = fiveImage;
        sixImage.x -= 1.;
        //Coordonnees septieme image
        vec2 sevenImage = sixImage;
        sevenImage.x -= 1.;

        vec3 normal = normalize(vNormal);
        vec3 lightDir = normalize(lightDirection);
        float diffuseIntensity = max(dot(normal, lightDir), 0.0);
        vec4 diffuse = vec4(diffuseColor * diffuseIntensity, 1.0);

        //affichage premiere image
        if(vUv.x <= 1./7.){
            texColor += texture2D(uFirstTexture, firstImage)*texture2D(uBrickTexture, firstImage);
        //affichage deuxieme image
        }else if(vUv.x > 1./7. && vUv.x <= (1./7.)*2.) {
            texColor += texture2D(uSecondTexture, secondImage)*texture2D(uBrickTexture, secondImage);
        //affichage troisieme image
        }else if(vUv.x > (1./7.)*2. && vUv.x <= (1./7.)*3.) {
            texColor += texture2D(uThirdTexture, thirdImage)*texture2D(uBrickTexture, thirdImage);
        //affichage quatrieme image
        }else if(vUv.x > (1./7.)*3. && vUv.x <= (1./7.)*4.) {
            texColor += texture2D(uForthTexture, forthImage)*texture2D(uBrickTexture, forthImage);
        //affichage cinquieme image
        }else if(vUv.x > (1./7.)*4. && vUv.x <= (1./7.)*5.) {
            texColor += texture2D(uFiveTexture, fiveImage)*texture2D(uBrickTexture, fiveImage);
        //affichage sixieme image
        }else if(vUv.x > (1./7.)*5. && vUv.x <= (1./7.)*6.) {
            texColor += texture2D(uSixTexture, sixImage)*texture2D(uBrickTexture, sixImage);
        //affichage septieme image
        }else if(vUv.x > (1./7.)*6. && vUv.x <= (1./7.)*7.) {
            texColor += texture2D(uSevenTexture, sevenImage)*texture2D(uBrickTexture, sevenImage);
        };

        gl_FragColor = texColor*diffuse;
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uFirstTexture: { value: firstTexture },
        uSecondTexture: { value: secondTexture },
        uThirdTexture: { value: thirdTexture },
        uForthTexture: { value: forthTexture },
        uFiveTexture: { value: fiveTexture },
        uSixTexture: { value: sixTexture },
        uSevenTexture: { value: sevenTexture },
        uBrickTexture: { value: brickTexture },
        lightDirection: { value: new THREE.Vector3(0, 0, 1) }, // Direction de la lumière
        diffuseColor: { value: new THREE.Color(1, 1, 1) }, // Couleur diffuse
      },
      vertexShader,
      fragmentShader,
    });

    const cylinder = new THREE.Mesh(geometry, material);
    // Ajoutez le cylindre à la scène
    scene.add(cylinder);

    // Animation de rotation du cylindre
    const animate = () => {
      requestAnimationFrame(animate);

      cylinder.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Nettoyage lorsque le composant est démonté
    return () => {
      scene.remove(cylinder);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} style={{
    backgroundColor: "rgba(255, 0, 0, 0)",
    position: "relative"
  }}/>; // Un conteneur vide pour le rendu Three.js
};

export default CylindreCompetences;
