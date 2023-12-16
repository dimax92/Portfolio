import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import imageJidob from './images_projets/jidob.png';
import imageMAchatVente from './images_projets/machatvente.png';

function Projets() {
  const meshRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const texture1 = textureLoader.load(imageJidob, (texture) => {
        // Texture chargée avec succès
    }, undefined, (err) => {
        console.error('Erreur de chargement de la texture 2', err);
    });
    texture1.anisotropy = renderer.capabilities.getMaxAnisotropy();
    const texture2 = textureLoader.load(imageMAchatVente, (texture) => {
        // Texture chargée avec succès
    }, undefined, (err) => {
        console.error('Erreur de chargement de la texture 2', err);
    });
    texture2.anisotropy = renderer.capabilities.getMaxAnisotropy();
    
    const geometry1 = new THREE.PlaneGeometry(4,4);
    const material1 = new THREE.MeshBasicMaterial({ map: texture1, side: THREE.DoubleSide });
    const mesh1 = new THREE.Mesh(geometry1, material1);
    scene.add(mesh1);
    const geometry1Cache = new THREE.PlaneGeometry(4,4);
    const material1Cache = new THREE.MeshBasicMaterial({ color: new THREE.Color('rgb(201, 198, 198)'), transparent: true, opacity: 0.9, side: THREE.DoubleSide });
    const mesh1Cache = new THREE.Mesh(geometry1Cache, material1Cache);
    scene.add(mesh1Cache);
    const pivot1 = new THREE.Object3D();
    scene.add(pivot1);
    pivot1.add(mesh1);
    pivot1.add(mesh1Cache);
    scene.add(pivot1);

    const geometry2 = new THREE.PlaneGeometry(4,4);
    const material2 = new THREE.MeshBasicMaterial({ map: texture2, side: THREE.DoubleSide });
    const mesh2 = new THREE.Mesh(geometry2, material2);
    scene.add(mesh2);
    const geometry2Cache = new THREE.PlaneGeometry(4,4);
    const material2Cache = new THREE.MeshBasicMaterial({ color: new THREE.Color('rgb(201, 198, 198)'), transparent: true, opacity: 0.9, side: THREE.DoubleSide });
    const mesh2Cache = new THREE.Mesh(geometry2Cache, material2Cache);
    scene.add(mesh2Cache);
    const pivot2 = new THREE.Object3D();
    scene.add(pivot2);
    pivot2.add(mesh2);
    pivot2.add(mesh2Cache);
    scene.add(pivot2);

    camera.position.z = 5;
    mesh1.position.z = 2;
    mesh1Cache.position.z = 1.99;
    mesh2.position.z = 2;
    mesh2Cache.position.z = 1.99;

    pivot2.position.y = 6;

    //pivot1.rotation.y += 2;
    pivot2.rotation.y += 2;

    document.addEventListener('wheel', (e) => {
        // Action à effectuer lorsque la souris survole le cube
        //console.log(e.deltaX);
        pivot1.position.y += e.deltaX*0.015;
        pivot2.position.y += e.deltaX*0.015;
        pivot1.rotation.y += e.deltaX*-0.01;
        pivot2.rotation.y += e.deltaX*-0.01;
        renderer.render(scene, camera);
    });

    mesh1.addEventListener('click', () => {
        console.log('toto la limace');
      });

    const animate = () => {
      requestAnimationFrame(animate);

      pivot1.rotation.y += 0.01;
      pivot2.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    //animate();
    renderer.render(scene, camera);

    //console.log(mesh)

    return () => {
      renderer.dispose();
    };
  }, []);

  return null;
}

export default Projets;