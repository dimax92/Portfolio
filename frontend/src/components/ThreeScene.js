import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useDispatch, useSelector } from "react-redux"

const ThreeScene = () => {
  const canvasRef = useRef();
  const dispatch = useDispatch();
  const canvasHeight = useSelector((state) => state.canvasHeight);
  const canvasWidth = useSelector((state) => state.canvasWidth);

  useEffect(() => {
    // Code Three.js ici
    // Exemple : créer une scène, une caméra et un renderer

    // Récupérer le canvas
    const canvas = canvasRef.current;

    // Créer la scène
    const scene = new THREE.Scene();

    // Créer la caméra
    const camera = new THREE.PerspectiveCamera(100, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 1;

    // Créer le renderer
    const renderer = new THREE.WebGLRenderer({ canvas });
    // renderer.setSize(window.innerWidth, window.innerHeight);

    // Ajouter un cube à la scène avec un shader personnalisé
    const geometry = new THREE.PlaneGeometry(canvas.clientWidth, canvas.clientHeight);
    const material = new THREE.ShaderMaterial({
        uniforms: {
            u_resolution: { value: new THREE.Vector2(canvas.clientWidth, canvas.clientHeight) },
            u_mouse: { value: new THREE.Vector2(0, 0) },
            u_time: { value: 0.0 },
          },
      vertexShader: `
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
      #ifdef GL_ES
      precision mediump float;
      #endif
      
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_time;
      
      void main() {
        vec2 position = gl_FragCoord.xy/u_resolution;
        vec3 wave = vec3(sin((position.x*5.)+(u_time/15.))*(sin((u_time/10.))/5.));
        gl_FragColor = vec4(wave, 1.0);
      }

      `,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    const animate = () => {
        requestAnimationFrame(animate);
      
        // Mettre à jour les valeurs des uniforms animées ici
        material.uniforms.u_time.value += 0.1;
      
        renderer.render(scene, camera);
      };
      animate()
    // Animation
    /*const animate = () => {
      requestAnimationFrame(animate);

      // Animation du cube ici
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();*/
    dispatch({type: 'SET_CANVAS_HEIGHT', payload: parseInt(canvas.clientHeight)})
    return () => {
      // Nettoyer les ressources Three.js lors du démontage du composant
      renderer.dispose();
      material.dispose();
      geometry.dispose();
    };
  }, []);
  

  return <canvas ref={canvasRef} style={{height: "123vh", width: "100%", position: "fixed"}}/>;
};

export default ThreeScene;
