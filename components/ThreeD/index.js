import dynamic from 'next/dynamic';

/**
 * Lazy loading del componente Astronaut3D
 * Esto divide el bundle de Three.js y lo carga solo cuando es necesario
 * Mejora significativamente el tiempo de carga inicial de la página
 */
const Astronaut3DLazy = dynamic(
  () => import('./Astronaut3D'),
  {
    ssr: false, // Three.js no funciona con SSR
    loading: () => null, // El loader se maneja internamente
  }
);

export { Astronaut3DLazy };
export { default as Astronaut3D } from './Astronaut3D';
