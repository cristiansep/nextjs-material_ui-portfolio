import React, { Suspense, useEffect, useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls, 
  Stars, 
  useProgress,
} from '@react-three/drei';
import { useIsMobile } from '../../hooks/useIsMobile';
import Loader3D from './Loader3D';
import { NoiseSphereScene } from './NoiseSphere';

/**
 * Componente de escena 3D optimizado
 * Contiene las estrellas y la esfera de partículas
 */
const Scene = React.memo(({ isMobile }) => {
  // Posición de la esfera según el dispositivo
  const spherePosition = useMemo(
    () => (isMobile ? [0, 0, 0] : [1.5, 0, 0]),
    [isMobile]
  );

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#39c8fa" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7b68ee" />
      <Stars 
        radius={100} 
        depth={50} 
        count={isMobile ? 1000 : 2000} 
        factor={4} 
        saturation={0} 
        fade 
      />
      <Suspense fallback={null}>
        <group position={spherePosition}>
          <NoiseSphereScene isMobile={isMobile} />
        </group>
      </Suspense>
      {!isMobile && <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />}
    </>
  );
});

Scene.displayName = 'Scene';

// Tiempo mínimo que el loader estará visible (en ms)
const MIN_LOADER_TIME = 1500;

/**
 * Componente principal del astronauta 3D
 * Maneja la carga y renderizado del canvas 3D
 * @returns {JSX.Element} Contenedor con el canvas 3D
 */
const Astronaut3D = () => {
  const isMobile = useIsMobile();
  const { progress } = useProgress();
  const [showLoader, setShowLoader] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Memoizar la posición de la cámara
  const cameraPosition = useMemo(
    () => [isMobile ? 0 : 1.5, 0, 5],
    [isMobile]
  );

  // Efecto para ocultar el loader después del tiempo mínimo
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      // Delay para la animación de fade del contenido
      setTimeout(() => setShowContent(true), 100);
    }, MIN_LOADER_TIME);

    return () => clearTimeout(timer);
  }, []);

  // Estilos memoizados para el contenedor
  const containerStyle = useMemo(() => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 1,
    pointerEvents: 'auto', // Habilitar interacción con mouse
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #0a0a23 0%, #1a1a3e 50%, #0a0a23 100%)',
    opacity: showContent ? 1 : 0,
    transition: 'opacity 0.8s ease-in-out',
  }), [showContent]);

  const canvasStyle = useMemo(() => ({
    width: '100vw',
    height: '100vh',
  }), []);

  return (
    <>
      {/* Loader visual mientras carga */}
      {showLoader && <Loader3D />}

      {/* Canvas 3D */}
      <div style={containerStyle}>
        <Canvas
          style={{ ...canvasStyle, touchAction: 'none' }}
          camera={{ position: cameraPosition, fov: 60 }}
          shadows
          dpr={[1, isMobile ? 1.5 : 2]}
          performance={{ min: 0.5 }}
          gl={{ 
            antialias: !isMobile,
            powerPreference: 'high-performance',
            alpha: true,
          }}
        >
          <Scene isMobile={isMobile} />
        </Canvas>
      </div>
    </>
  );
};

export default React.memo(Astronaut3D);
