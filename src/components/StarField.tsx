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
    const baseSeed = i * 120;
    
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
  
  const stars = useMemo(() => FIXED_STARS, []);

  const sphereGeometry = useMemo(() => {
    let geometry: THREE.BufferGeometry | null = null;
    
    gltf.scene.traverse((child: any) => {
      if (child.isMesh && child.geometry) {
        geometry = child.geometry;
      }
    });
    
    return geometry || new THREE.SphereGeometry(0.01, 8, 8);
  }, [gltf]);

  // Create stars using POINTS instead of Meshes for perfect circles
  const starPoints = useMemo(() => {
    const positions = new Float32Array(stars.length * 3);
    const sizes = new Float32Array(stars.length);
    const alphas = new Float32Array(stars.length);
    
    stars.forEach((star, i) => {
      positions[i * 3] = star.position[0];
      positions[i * 3 + 1] = star.position[1];
      positions[i * 3 + 2] = star.position[2];
      sizes[i] = star.scale * 50; // Size for point sprites
      alphas[i] = star.brightness;
    });
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1));
    
    // Custom shader material for glowing stars
    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0xffffff) },
      },
      vertexShader: `
        attribute float size;
        attribute float alpha;
        varying float vAlpha;
        
        void main() {
          vAlpha = alpha;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        varying float vAlpha;
        
        void main() {
          // Create circular point with soft glow
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);
          
          // Soft glow falloff
          float alpha = 1.0 - smoothstep(0.0, 0.1, dist);
          alpha = pow(alpha, 2.0) * vAlpha;
          
          // Add extra bright core
          float core = 1.0 - smoothstep(0.0, 0.10, dist);
          alpha += core * vAlpha * 0.5;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    
    return new THREE.Points(geometry, material);
  }, [stars]);

  useEffect(() => {
    if (!groupRef.current) return;
    
    while (groupRef.current.children.length > 0) {
      groupRef.current.remove(groupRef.current.children[0]);
    }
    
    groupRef.current.add(starPoints);
  }, [starPoints]);

  return <group ref={groupRef} />;
}