'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import StarField from './StarField';

export default function BannerCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ 
          position: [0, 0, 20], 
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          preserveDrawingBuffer: true,
        }}
        style={{ background: 'transparent' }}
        orthographic={false}
        linear={true}
      >
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
        
        <ambientLight intensity={0.1} />
      </Canvas>
    </div>
  );
}