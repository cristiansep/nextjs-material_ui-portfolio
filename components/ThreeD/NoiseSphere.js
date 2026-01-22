import React, { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Función de ruido Simplex 3D simplificada
 */
const createNoise3D = () => {
  const permutation = [];
  for (let i = 0; i < 256; i++) permutation[i] = i;
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
  }
  const p = [...permutation, ...permutation];

  const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
  const lerp = (a, b, t) => a + t * (b - a);
  const grad = (hash, x, y, z) => {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  };

  return (x, y, z) => {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);
    const u = fade(x);
    const v = fade(y);
    const w = fade(z);
    const A = p[X] + Y, AA = p[A] + Z, AB = p[A + 1] + Z;
    const B = p[X + 1] + Y, BA = p[B] + Z, BB = p[B + 1] + Z;
    return lerp(
      lerp(lerp(grad(p[AA], x, y, z), grad(p[BA], x - 1, y, z), u),
           lerp(grad(p[AB], x, y - 1, z), grad(p[BB], x - 1, y - 1, z), u), v),
      lerp(lerp(grad(p[AA + 1], x, y, z - 1), grad(p[BA + 1], x - 1, y, z - 1), u),
           lerp(grad(p[AB + 1], x, y - 1, z - 1), grad(p[BB + 1], x - 1, y - 1, z - 1), u), v), w);
  };
};

/**
 * Componente de esfera de partículas con distorsión de ruido e interacción con mouse
 */
const NoiseSphere = ({ 
  radius = 2, 
  particleCount = 5000, 
  color = '#39c8fa',
  noiseScale = 1.5,
  noiseSpeed = 0.3,
  mousePosition,
  mouseInfluenceRadius = 1.5,
  mouseInfluenceStrength = 0.8,
}) => {
  const pointsRef = useRef();
  const noise3D = useMemo(() => createNoise3D(), []);
  
  // Almacenar desplazamientos actuales para suavizar
  const currentDisplacements = useRef(new Float32Array(particleCount));

  // Crear posiciones iniciales de las partículas en una esfera
  const { positions, originalPositions } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
    }

    return { positions, originalPositions };
  }, [particleCount, radius]);

  // Animación con ruido e interacción con mouse
  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.elapsedTime * noiseSpeed;
    const positionAttribute = pointsRef.current.geometry.attributes.position;
    const posArray = positionAttribute.array;
    const displacements = currentDisplacements.current;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const ox = originalPositions[i3];
      const oy = originalPositions[i3 + 1];
      const oz = originalPositions[i3 + 2];

      // Calcular ruido base
      const noiseValue = noise3D(
        ox * noiseScale + time,
        oy * noiseScale + time,
        oz * noiseScale + time
      );

      // Calcular la dirección normal (desde el centro hacia afuera)
      const length = Math.sqrt(ox * ox + oy * oy + oz * oz);
      const nx = ox / length;
      const ny = oy / length;
      const nz = oz / length;

      // Desplazamiento base por ruido
      let targetDisplacement = noiseValue * 0.3;

      // Efecto del mouse - hundimiento localizado
      if (mousePosition) {
        const dx = ox - mousePosition.x;
        const dy = oy - mousePosition.y;
        const dz = oz - mousePosition.z;
        const distToMouse = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distToMouse < mouseInfluenceRadius) {
          // Calcular la intensidad del efecto (más fuerte cerca del mouse)
          const influence = 1 - (distToMouse / mouseInfluenceRadius);
          const smoothInfluence = influence * influence * (3 - 2 * influence); // Smoothstep
          
          // Hundir las partículas hacia el centro (efecto de repulsión/hundimiento)
          targetDisplacement -= smoothInfluence * mouseInfluenceStrength;
        }
      }

      // Suavizar el desplazamiento (lerp para transición suave)
      displacements[i] += (targetDisplacement - displacements[i]) * 0.1;

      // Aplicar desplazamiento a lo largo de la normal
      posArray[i3] = ox + nx * displacements[i];
      posArray[i3 + 1] = oy + ny * displacements[i];
      posArray[i3 + 2] = oz + nz * displacements[i];
    }

    positionAttribute.needsUpdate = true;
    
    // Rotación suave
    pointsRef.current.rotation.y += 0.002;
    pointsRef.current.rotation.x += 0.001;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color={color}
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

/**
 * Componente de escena completa con la esfera de partículas
 * Detecta la posición del mouse y crea efecto de hundimiento
 * @param {Object} props
 * @param {boolean} props.isMobile - Si es dispositivo móvil
 */
export const NoiseSphereScene = ({ isMobile = false }) => {
  const groupRef = useRef();
  const mousePos3D = useRef({ x: 100, y: 100, z: 2 }); // Empezar lejos
  const mouseNormalized = useRef({ x: 0, y: 0 });
  const { viewport, size } = useThree();

  // Factor de escala para móvil
  const scale = isMobile ? 0.6 : 1;
  const particleScale = isMobile ? 0.5 : 1;

  // Escuchar eventos del mouse directamente del window
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalizar posición del mouse a -1 a 1
      mouseNormalized.current.x = (event.clientX / size.width) * 2 - 1;
      mouseNormalized.current.y = -(event.clientY / size.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [size]);

  // Actualizar posición 3D del mouse
  useFrame(() => {
    // Convertir mouse normalizado a coordenadas 3D
    const targetX = (mouseNormalized.current.x * viewport.width) / 2;
    const targetY = (mouseNormalized.current.y * viewport.height) / 2;
    
    // Suavizar movimiento
    mousePos3D.current.x += (targetX - mousePos3D.current.x) * 0.08;
    mousePos3D.current.y += (targetY - mousePos3D.current.y) * 0.08;
    mousePos3D.current.z = 2;
  });

  return (
    <group ref={groupRef}>
      {/* Esfera principal */}
      <NoiseSphere 
        radius={2.5 * scale} 
        particleCount={Math.floor(6000 * particleScale)} 
        color="#39c8fa"
        noiseScale={1.2}
        noiseSpeed={0.25}
        mousePosition={mousePos3D.current}
        mouseInfluenceRadius={2 * scale}
        mouseInfluenceStrength={0.5}
      />
      
      {/* Esfera interior */}
      <NoiseSphere 
        radius={1.8 * scale} 
        particleCount={Math.floor(3000 * particleScale)} 
        color="#7b68ee"
        noiseScale={1.8}
        noiseSpeed={0.35}
        mousePosition={mousePos3D.current}
        mouseInfluenceRadius={1.8 * scale}
        mouseInfluenceStrength={0.4}
      />
      
      {/* Anillo exterior */}
      <NoiseSphere 
        radius={3.2 * scale} 
        particleCount={Math.floor(2000 * particleScale)} 
        color="#ffffff"
        noiseScale={2}
        noiseSpeed={0.15}
        mousePosition={mousePos3D.current}
        mouseInfluenceRadius={2.2 * scale}
        mouseInfluenceStrength={0.6}
      />
    </group>
  );
};

export default NoiseSphere;
