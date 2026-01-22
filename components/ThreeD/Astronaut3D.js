import React, { Suspense, useEffect, useState, useMemo, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls, 
  Stars, 
  Float, 
  useGLTF, 
  useAnimations, 
  useProgress,
  Preload 
} from '@react-three/drei';
import { useIsMobile } from '../../hooks/useIsMobile';
import Loader3D from './Loader3D';

const MODEL_PATH = '/models/test/scene.gltf';
const PLANET_PATH = '/models/planeta/scene.gltf';

/**
 * Preload de modelos GLTF para mejorar la carga inicial
 * Se ejecuta antes de que los componentes se monten
 */
useGLTF.preload(MODEL_PATH);
useGLTF.preload(PLANET_PATH);

/**
 * Componente del modelo del astronauta con animación flotante
 * @param {Object} props - Props del componente
 * @returns {JSX.Element} Modelo 3D del astronauta
 */
function AstronautModel(props) {
  const { scene, animations } = useGLTF(MODEL_PATH);
  const { actions, names } = useAnimations(animations, scene);
  const isMobile = useIsMobile();

  // Memoizar la escala para evitar recálculos
  const scale = useMemo(() => (isMobile ? 0.7 : 1.1), [isMobile]);

  useEffect(() => {
    if (names?.length > 0 && actions) {
      const action = actions[names[0]];
      if (action) {
        action.reset().play();
      }
    }

    // Cleanup: detener animaciones al desmontar
    return () => {
      if (names?.length > 0 && actions) {
        Object.values(actions).forEach((action) => {
          action?.stop();
        });
      }
    };
  }, [actions, names]);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <primitive
        object={scene}
        scale={scale}
        dispose={null}
        {...props}
      />
    </Float>
  );
}

/**
 * Componente del modelo del planeta con animación lenta
 * @param {Object} props - Props del componente
 * @returns {JSX.Element} Modelo 3D del planeta
 */
function PlanetModel(props) {
  const { scene, animations } = useGLTF(PLANET_PATH);
  const { actions, names } = useAnimations(animations, scene);
  const isMobile = useIsMobile();

  // Memoizar valores para evitar recálculos
  const scale = useMemo(() => (isMobile ? 0.1 : 1), [isMobile]);
  const position = useMemo(
    () => (isMobile ? [18, 10, 0] : [50, 100, 60]),
    [isMobile]
  );

  useEffect(() => {
    if (names?.length > 0 && actions) {
      const slowDownFactor = 0.1;
      names.forEach((name) => {
        const action = actions[name];
        if (action) {
          action.setEffectiveTimeScale(slowDownFactor);
          action.play();
        }
      });
    }

    // Cleanup: detener animaciones al desmontar
    return () => {
      if (names?.length > 0 && actions) {
        Object.values(actions).forEach((action) => {
          action?.stop();
        });
      }
    };
  }, [actions, names]);

  return (
    <Float speed={0.5} rotationIntensity={0} floatIntensity={0}>
      <primitive
        object={scene}
        scale={scale}
        position={position}
        dispose={null}
        {...props}
      />
    </Float>
  );
}

/**
 * Componente de escena 3D optimizado
 * Contiene las estrellas y los modelos 3D
 */
const Scene = React.memo(({ isMobile }) => {
  const astronautPosition = useMemo(
    () => (isMobile ? [0, 0, 0] : [2, -1.5, 0]),
    [isMobile]
  );

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <Stars 
        radius={100} 
        depth={50} 
        count={isMobile ? 1000 : 2000} 
        factor={4} 
        saturation={0} 
        fade 
      />
      <Suspense fallback={null}>
        <PlanetModel />
        <AstronautModel position={astronautPosition} />
        <Preload all />
      </Suspense>
      {!isMobile && <OrbitControls enableZoom={false} enablePan={false} />}
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
    pointerEvents: 'none',
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
          style={canvasStyle}
          camera={{ position: cameraPosition, fov: 60 }}
          shadows
          dpr={[1, isMobile ? 1.5 : 2]} // Optimizar pixel ratio según dispositivo
          performance={{ min: 0.5 }} // Ajuste automático de rendimiento
          gl={{ 
            antialias: !isMobile, // Desactivar antialiasing en móvil
            powerPreference: 'high-performance',
            alpha: true, // Fondo transparente para ver el gradiente
          }}
        >
          <Scene isMobile={isMobile} />
        </Canvas>
      </div>
    </>
  );
};

export default React.memo(Astronaut3D);
