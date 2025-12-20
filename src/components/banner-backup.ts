'use client';

import { useRef, useMemo, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';

interface Star {
  position: [number, number, number];
  scale: number;
  brightness: number;
}

// Seeded random function OUTSIDE component to ensure consistency
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453123;
  return x - Math.floor(x);
}

// Generate stars once with fixed seed
const generateStars = (): Star[] => {
  const starData: Star[] = [];
  const count = 400;
  
  for (let i = 0; i < count; i++) {
    const baseSeed = i * 120; // Large multiplier for better distribution
    
    starData.push({
      position: [
        (seededRandom(baseSeed) - 0.5) * 100,
        (seededRandom(baseSeed + 11) - 0.5) * 60,
        (seededRandom(baseSeed + 22) - 0.5) * 40,
      ],
      scale: (seededRandom(baseSeed + 33) * 0.03 + 0.01) * 2.5,
      brightness: seededRandom(baseSeed + 44) * 0.5 + 0.5,
    });
  }
  
  return starData;
};

// Stars generated ONCE outside component
const FIXED_STARS = generateStars();

export default function StarField() {
  const gltf = useLoader(GLTFLoader, '/star-banner.glb');
  const groupRef = useRef<THREE.Group>(null);
  
  // Use the pre-generated fixed stars
  const stars = useMemo(() => FIXED_STARS, []);

  // Get geometry from the loaded GLB
  const sphereGeometry = useMemo(() => {
    let geometry: THREE.BufferGeometry | null = null;
    
    gltf.scene.traverse((child: any) => {
      if (child.isMesh && child.geometry) {
        geometry = child.geometry;
      }
    });
    
    // Fallback to tiny sphere
    return geometry || new THREE.SphereGeometry(0.01, 8, 8);
  }, [gltf]);

  // Create individual star meshes as PERFECT CIRCLES
  const starMeshes = useMemo(() => {
    return stars.map((star) => {
      // Create geometry for each star to prevent stretching
      const starGeometry = new THREE.SphereGeometry(1, 8, 8);
      
      const mesh = new THREE.Mesh(
        starGeometry,
        new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: star.brightness,
        })
      );
      
      mesh.position.set(...star.position);
      // Uniform scale - all axes same value
      const uniformScale = star.scale;
      mesh.scale.set(uniformScale, uniformScale, uniformScale);
      
      return mesh;
    });
  }, [stars]);

  // Add meshes to group
  useEffect(() => {
    if (!groupRef.current) return;
    
    // Clear existing children
    while (groupRef.current.children.length > 0) {
      groupRef.current.remove(groupRef.current.children[0]);
    }
    
    // Add all star meshes
    starMeshes.forEach((mesh) => {
      groupRef.current!.add(mesh);
    });
  }, [starMeshes]);

  return <group ref={groupRef} />;
}