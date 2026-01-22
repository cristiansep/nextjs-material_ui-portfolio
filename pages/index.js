import { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import AppBar from '../components/AppBar';
import { Astronaut3DLazy } from '../components/ThreeD';

// Tiempo mínimo del loader (debe coincidir con MIN_LOADER_TIME en Astronaut3D.js)
const LOADER_DURATION = 1500;

/**
 * Página principal del portfolio
 * Implementa carga diferida del componente 3D para mejor rendimiento
 * @returns {JSX.Element} Página principal
 */
export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Asegurar que estamos en el cliente antes de renderizar componentes 3D
  useEffect(() => {
    setIsClient(true);
    
    // Mostrar el contenido después de que termine el loader
    const timer = setTimeout(() => {
      setShowContent(true);
    }, LOADER_DURATION + 100); // Pequeño delay adicional para sincronizar con la animación

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* AppBar y Layout solo se muestran después del loader */}
      {showContent && <AppBar />}
      {/* Renderizar el componente 3D solo en el cliente */}
      {isClient && <Astronaut3DLazy />}
      {showContent && <Layout />}
    </>
  );
}
