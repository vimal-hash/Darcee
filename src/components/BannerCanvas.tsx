'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
// import StarField from './StarField';
import StarField, { WatchAnimation } from './StarField';
export default function BannerCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="absolute inset-0 z-0">
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
       <div  className="absolute inset-0 z-10 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="w-full">
          <WatchAnimation />
        </div>
      </div>
    </div>
  );
}