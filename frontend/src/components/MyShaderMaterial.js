// MyShaderMaterial.js
import React, { useRef } from "react";

const MyShaderMaterial = () => {
  const materialRef = useRef();

  // Définir votre shader ici (vertexShader et fragmentShader)
  const vertexShader = `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    void main() {
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // Rouge
    }
  `;

  return (
    <mesh>
      {/* Utilisez le composant material de Three.js avec les shaders définis */}
      <meshStandardMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
      {/* Définissez ici votre géométrie, par exemple un cube */}
      <boxBufferGeometry args={[1, 1, 1]} />
    </mesh>
  );
};

export default MyShaderMaterial;
