import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import imageJidob from './images_projets/jidob.png';
import imageMAchatVente from './images_projets/machatvente.png';

function Projets() {
  const canvasRef = useRef();
  const meshRef = useRef();

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
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.setClearColor(0x000000, 0);
    resizeCanvas(renderer)
    window.addEventListener('resize', ()=>{
      resizeCanvas(renderer)
    });
    // document.body.appendChild(renderer.domElement);

    const textureLoader1 = new THREE.TextureLoader();
    const texture1 = textureLoader1.load(imageJidob, (texture) => {
        // Texture chargée avec succès
    }, undefined, (err) => {
        console.error('Erreur de chargement de la texture 2', err);
    });
    texture1.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const textureLoader2 = new THREE.TextureLoader();
    const texture2 = textureLoader2.load(imageMAchatVente, (texture) => {
        // Texture chargée avec succès
    }, undefined, (err) => {
        console.error('Erreur de chargement de la texture 2', err);
    });
    texture2.anisotropy = renderer.capabilities.getMaxAnisotropy();
    
    const geometry1 = new THREE.PlaneGeometry(7,3.5);
    const material1 = new THREE.MeshBasicMaterial({ map: texture1, side: THREE.DoubleSide });
    const mesh1 = new THREE.Mesh(geometry1, material1);
    const geometry1Cache = new THREE.PlaneGeometry(7,3.5);
    const material1Cache = new THREE.MeshBasicMaterial({ color: new THREE.Color('rgb(201, 198, 198)'), transparent: true, opacity: 0.9, side: THREE.DoubleSide });
    const mesh1Cache = new THREE.Mesh(geometry1Cache, material1Cache);
    const pivot1 = new THREE.Object3D();
    pivot1.add(mesh1);
    pivot1.add(mesh1Cache);
    scene.add(pivot1);

    const geometry2 = new THREE.PlaneGeometry(7,3.5);
    const material2 = new THREE.MeshBasicMaterial({ map: texture2, side: THREE.DoubleSide });
    const mesh2 = new THREE.Mesh(geometry2, material2);
    const geometry2Cache = new THREE.PlaneGeometry(7,3.5);
    const material2Cache = new THREE.MeshBasicMaterial({ color: new THREE.Color('rgb(201, 198, 198)'), transparent: true, opacity: 0.9, side: THREE.DoubleSide });
    const mesh2Cache = new THREE.Mesh(geometry2Cache, material2Cache);
    const pivot2 = new THREE.Object3D();
    pivot2.add(mesh2);
    pivot2.add(mesh2Cache);
    scene.add(pivot2);

    camera.position.z = 7;
    mesh1.position.z = 2;
    mesh1Cache.position.z = 1.99;
    mesh2.position.z = 2;
    mesh2Cache.position.z = 1.99;

    pivot2.position.y = 6.5;
    pivot1.position.y = 0;

    //pivot1.rotation.y += 2;
    pivot2.rotation.y += 2;

    document.addEventListener('wheel', (e) => {
        // Action à effectuer lorsque la souris survole le cube
        console.log(pivot1.position.y+' et '+pivot2.position.y);
        pivot1.position.y += e.deltaX*0.015;
        pivot2.position.y += e.deltaX*0.015;
        pivot1.rotation.y += e.deltaX*-0.01;
        pivot2.rotation.y += e.deltaX*-0.01;
        renderer.render(scene, camera);
    });

    canvas.addEventListener('click', () => {
      // console.log(`premier a ${pivot1.position.y}, deuxieme a ${pivot2.position.y}`);
      if(pivot1.position.y <= 0.3 && pivot1.position.y >= -0.3){
        window.open('https://jidob.com')
      }
      if(pivot2.position.y <= 0.3 && pivot2.position.y >= -0.3){
        window.open('https://machatvente.com')
      }
    });


    setTimeout(()=>{
      renderer.render(scene, camera);
    }, 2000)

    return () => {
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} style={{
    position: "relative",
  }}/>;
}

export default Projets;