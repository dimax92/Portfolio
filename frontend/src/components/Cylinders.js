import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Cylinder } from '@react-three/drei';
import * as THREE from 'three';

function Cylinders(){
    const cylinderRef = useRef();

  useFrame(() => {
    // Faites tourner le cylindre autour de l'axe Y
    if (cylinderRef.current) {
      cylinderRef.current.rotation.y += 0.01; // Ajustez la vitesse de rotation selon vos besoins
      //cylinderRef.current.rotation.x += 0.01;
    }
  });
  console.log(cylinderRef)

  return (
    <Cylinder ref={cylinderRef} args={[1, 1, 2, 6, 1, false]} position={[0, 0, 0]}>
        <meshStandardMaterial color="red" attachArray="material" />
      </Cylinder>
      
  )
}

export default Cylinders