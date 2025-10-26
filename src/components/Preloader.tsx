import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const duration = isMobile ? 900 : 1200;
    const failSafeTimeout = 800;

    const animationTimer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => {
        onComplete();
      }, 300);
    }, duration);

    const failSafeTimer = setTimeout(() => {
      if (isAnimating) {
        setIsAnimating(false);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, failSafeTimeout);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(failSafeTimer);
    };
  }, [onComplete, isAnimating]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0A0A0A] flex items-center justify-center transition-opacity duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ willChange: 'opacity' }}
    >
      <div className="relative">
        <h1
          className="text-[4rem] md:text-[6rem] font-black tracking-[0.15em] text-white preloader-text"
          style={{
            fontFamily: "'Orbitron', 'Space Grotesk', sans-serif",
            willChange: 'transform, opacity',
          }}
        >
          ZENITH
        </h1>

        <div className="absolute inset-0 overflow-hidden">
          <div className="scanline" />
        </div>

        <div className="neural-pulse-wrapper">
          <div className="neural-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
