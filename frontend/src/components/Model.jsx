/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 model.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/model.gltf');
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01; // Rotation sur l'axe Y
    }
  });
  return (
    <group {...props} dispose={null} ref={group}>
      <mesh geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} />
      <mesh geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} />
      <mesh geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} />
      <mesh geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} />
      <mesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} />
      <mesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} />
      <mesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} />
      <mesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} />
      <mesh geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} />
    </group>
  )
}

useGLTF.preload('/model.gltf')
