import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

/*
Required npm packages for this component:
- three: 3D graphics library
- @react-three/fiber: React renderer for three.js
- @react-three/drei: Useful helpers for react-three-fiber

Install with:
npm install three @react-three/fiber @react-three/drei
*/

// Component to load and display the GLB model
function AvatarModel() {
  const meshRef = useRef();
  
  // Add some rotation animation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });
  
  // Try to load the GLB model, fallback to placeholder if not available
  let gltfScene = null;
  try {
    const gltf = useGLTF('/models/sareewoman.glb');
    gltfScene = gltf.scene;
  } catch (error) {
    // GLB file not found, will use fallback
    console.log('GLB model not found, using placeholder avatar');
  }
  
  if (gltfScene) {
    return (
      <primitive 
        ref={meshRef}
        object={gltfScene} 
        scale={[1, 1, 1]} 
        position={[0, -1, 0]}
      />
    );
  }
  
  // Fallback placeholder avatar when GLB is not available
  return (
    <group ref={meshRef} position={[0, -1, 0]}>
      {/* Head */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color={'#ffdbac'} />
      </mesh>
      
      {/* Body */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 1, 8]} />
        <meshStandardMaterial color={'#ff6b9d'} />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-0.5, 0.8, 0]} rotation={[0, 0, Math.PI / 6]}>
        <cylinderGeometry args={[0.1, 0.1, 0.8, 8]} />
        <meshStandardMaterial color={'#ffdbac'} />
      </mesh>
      <mesh position={[0.5, 0.8, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <cylinderGeometry args={[0.1, 0.1, 0.8, 8]} />
        <meshStandardMaterial color={'#ffdbac'} />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.15, -0.5, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 1, 8]} />
        <meshStandardMaterial color={'#4a90e2'} />
      </mesh>
      <mesh position={[0.15, -0.5, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 1, 8]} />
        <meshStandardMaterial color={'#4a90e2'} />
      </mesh>
    </group>
  );
}

// Loading fallback component
function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={'#cccccc'} />
    </mesh>
  );
}

// Main AvatarViewer component
function AvatarViewer() {
  return (
    <div style={{ width: '100%', height: '500px', backgroundColor: '#f0f0f0' }}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Lighting setup */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        
        {/* Suspense wrapper for async model loading */}
        <Suspense fallback={<LoadingFallback />}>
          <AvatarModel />
        </Suspense>
        
        {/* OrbitControls for camera interaction */}
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minDistance={1}
          maxDistance={10}
        />
      </Canvas>
      
      <div style={{ 
        textAlign: 'center', 
        padding: '10px', 
        fontSize: '14px', 
        color: '#666' 
      }}>
        <p>3D Avatar - Use mouse to rotate, zoom, and pan</p>
        <p><em>Place sareewoman.glb in /public/models/ to load the actual model</em></p>
      </div>
    </div>
  );
}

export default AvatarViewer;