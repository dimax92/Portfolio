import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model'; /* highlight-line */

function AvatarThree() {
   const [maxHeight, setMaxHeight] = useState(window.innerWidth > 700 ? '60vh' : '73vh');
   const canvasRef = useRef(null);
   window.addEventListener('resize', ()=>{
      if(canvasRef.current){
         canvasRef.current.style.maxHeight = window.innerWidth > 700 ? '60vh' : '73vh';
         setMaxHeight(window.innerWidth > 700 ? '60vh' : '73vh')
      }
    });
   return (
      <Canvas
         ref={canvasRef}
         camera={{ position: [2, 0, 0], fov: 10 }}
         style={{
            backgroundColor: 'rgba(255, 0, 0, 0.0)',
            width: '95vw',
            height: '100vw',
            maxHeight: maxHeight,
            // maxWidth: '60vh'
            // position: 'relative',
            // top: '50px'
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <Model position={[0.025, -1.7, 0.0]} /> /* highlight-line */
         </Suspense>
      </Canvas>
   );
}

export default AvatarThree