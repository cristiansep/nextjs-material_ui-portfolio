import React, { useState, useEffect } from 'react';
import { useProgress } from '@react-three/drei';

/**
 * Componente de carga visual para modelos 3D
 * Muestra el progreso de carga con animación suave
 * @returns {JSX.Element} Loader con indicador de progreso
 */
const Loader3D = () => {
  const { progress } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);

  // Animación suave del progreso
  useEffect(() => {
    // Si el progreso real es mayor que el mostrado, incrementar gradualmente
    if (progress > displayProgress) {
      const timer = setTimeout(() => {
        // Incrementar más rápido cuando hay diferencia grande
        const increment = Math.max(1, (progress - displayProgress) / 10);
        setDisplayProgress((prev) => Math.min(progress, prev + increment));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [progress, displayProgress]);

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Icono de astronauta animado */}
        <div style={styles.iconContainer}>
          <svg
            style={styles.icon}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="8" r="4" stroke="#39c8fa" strokeWidth="1.5" />
            <path
              d="M12 12v4M8 20l4-4 4 4"
              stroke="#39c8fa"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="8" r="6" stroke="#39c8fa" strokeWidth="0.5" opacity="0.5" />
          </svg>
        </div>

        {/* Texto de carga */}
        <p style={styles.text}>Construyendo tu experiencia...</p>

        {/* Barra de progreso */}
        <div style={styles.progressContainer}>
          <div style={styles.progressBackground}>
            <div
              style={{
                ...styles.progressBar,
                width: `${displayProgress}%`,
              }}
            />
          </div>
          <span style={styles.percentage}>{Math.round(displayProgress)}%</span>
        </div>

        {/* Dots animados */}
        <div style={styles.dotsContainer}>
          <span style={{ ...styles.dot, animationDelay: '0s' }} />
          <span style={{ ...styles.dot, animationDelay: '0.2s' }} />
          <span style={{ ...styles.dot, animationDelay: '0.4s' }} />
        </div>
      </div>

      {/* Estilos con animaciones CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px #39c8fa, 0 0 10px #39c8fa; }
          50% { box-shadow: 0 0 20px #39c8fa, 0 0 30px #39c8fa; }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #0a0a23 0%, #1a1a3e 50%, #0a0a23 100%)',
    zIndex: 1000,
    padding: '20px',
    boxSizing: 'border-box',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    width: '100%',
    maxWidth: '500px',
    textAlign: 'center',
  },
  iconContainer: {
    animation: 'float 2s ease-in-out infinite',
  },
  icon: {
    width: '80px',
    height: '80px',
    filter: 'drop-shadow(0 0 10px #39c8fa)',
  },
  text: {
    color: '#ffffff',
    fontSize: 'clamp(0.85rem, 2.5vw, 1.3rem)',
    fontWeight: '500',
    letterSpacing: 'clamp(1px, 0.3vw, 2px)',
    textTransform: 'uppercase',
    margin: 0,
    textShadow: '0 0 10px rgba(57, 200, 250, 0.5)',
  },
  progressContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    width: '100%',
    maxWidth: '280px',
  },
  progressBackground: {
    flex: 1,
    height: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '1px solid rgba(57, 200, 250, 0.3)',
  },
  progressBar: {
    height: '100%',
    background: 'linear-gradient(90deg, #39c8fa 0%, #7b68ee 100%)',
    borderRadius: '10px',
    transition: 'width 0.3s ease-out',
    boxShadow: '0 0 10px #39c8fa',
  },
  percentage: {
    color: '#39c8fa',
    fontSize: '1rem',
    fontWeight: 'bold',
    minWidth: '45px',
    textAlign: 'right',
  },
  dotsContainer: {
    display: 'flex',
    gap: '8px',
    marginTop: '10px',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#39c8fa',
    animation: 'pulse 1s ease-in-out infinite',
  },
};

export default Loader3D;
