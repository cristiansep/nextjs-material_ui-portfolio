import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, useGLTF, useAnimations, useProgress } from '@react-three/drei';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Fade } from 'react-reveal';

const MODEL_PATH = '/models/test/scene.gltf';
const PLANET_PATH = '/models/planeta/scene.gltf';

function AstronautModel(props) {
  const { scene, animations } = useGLTF(MODEL_PATH);
  const { actions, names } = useAnimations(animations, scene);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    if (names && names.length > 0 && actions) {
      actions[names[0]]?.reset().play();
    }
  }, [actions, names]);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
       <primitive
        object={scene}
        scale={isMobile ? 0.7 : 1.1}
        {...props}
      />
    </Float>
  );
}

function PlanetModel(props) {
  const { scene, animations } = useGLTF(PLANET_PATH);
  const { actions, names } = useAnimations(animations, scene);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    if (names && names.length > 0 && actions) {
      names.forEach((name) => {
        const action = actions[name];
        if (action) {
          const slowDownFactor = 0.1;
          action.setEffectiveTimeScale(slowDownFactor);
          action.play();
        }
      });
    }
  }, [actions, names]);
  return (
    <Float speed={0.5} rotationIntensity={0} floatIntensity={0}>
       <primitive
        object={scene}
        scale={isMobile ? 0.1 : 1}
        position={isMobile ? [18, 10, 0] : [50, 100, 60]}
        {...props}
      />
    </Float>
  );
}

const Astronaut3D = () => {

  const isMobile = useIsMobile();
  const { progress } = useProgress();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setShow(true), 10);
    }
  }, [progress]);

  return (
    <div
      style={{ 
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
          background: "#0a0a23",
        }}
      >
      <Fade when={show} duration={1200}>
      <Canvas style={{ width: '100vw', height: '100vh' }} camera={{ position: [isMobile ? 0 : 1.5, 0, 5], fov: 60 }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade />
        <Suspense fallback={null}>
          <PlanetModel />
          <AstronautModel position={isMobile ? [0, 0, 0] : [2, -1.5, 0]} />
        </Suspense>
        {
          !isMobile && <OrbitControls enableZoom={false} />
        }
      </Canvas>
      </Fade>
    </div>
  );
};

export default Astronaut3D;
