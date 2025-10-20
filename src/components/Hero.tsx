import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      hue: number;
      pulse: number;
    }

    const particles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 30 : 60;
    const connectionDistance = 200;

    for (let i = 0; i < particleCount; i++) {
      const hue = Math.random() > 0.5 ? 200 : 270;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        color: hue === 200 ? '#00B7FF' : '#8A2BE2',
        hue: hue,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.fillStyle = '#0A0A0A';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < 150) {
          const force = (150 - distToMouse) / 150;
          particle.x += dx * force * 0.003;
          particle.y += dy * force * 0.003;
        }

        particle.pulse += 0.02;
        const pulseEffect = Math.sin(particle.pulse) * 0.3;
        const currentSize = particle.size + pulseEffect;

        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${particle.hue}, 100%, 60%, 0.6)`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 65%, 1)`;
        ctx.fill();
        ctx.shadowBlur = 0;

        particles.forEach((otherParticle, j) => {
          if (i >= j) return;

          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            const opacity = (1 - distance / connectionDistance) * 0.35;
            const avgHue = (particle.hue + otherParticle.hue) / 2;

            ctx.shadowBlur = 4;
            ctx.shadowColor = `hsla(${avgHue}, 100%, 60%, 0.4)`;
            ctx.strokeStyle = `hsla(${avgHue}, 100%, 65%, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('progetti');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="relative mb-12 animate-fadeInUp">
          <h1 className="text-[3.5rem] md:text-[6rem] lg:text-[8.5rem] font-black tracking-[0.05em] leading-[0.9]">
            <span
              className="relative inline-block text-white"
              style={{
                fontFamily: "'Orbitron', 'Rajdhani', system-ui, sans-serif",
                textShadow: '0 0 15px rgba(0, 183, 255, 0.35), 0 0 30px rgba(0, 183, 255, 0.2), 0 0 45px rgba(138, 43, 226, 0.15)',
                WebkitTextStroke: '0.5px rgba(0, 183, 255, 0.25)',
                letterSpacing: '0.05em'
              }}
            >
              ZENITH
            </span>
          </h1>
        </div>

        <p
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-16 animate-fadeInUp animation-delay-200 tracking-[0.2em] leading-relaxed"
          style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
        >
          Beyond Intelligence.
        </p>

        <button
          onClick={scrollToProjects}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#00b7ff] rounded-full font-semibold text-base text-white transition-all duration-300 transform hover:scale-105 animate-fadeInUp animation-delay-400 overflow-hidden"
          style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
        >
          <span className="relative z-10">Esplora il futuro</span>
          <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          <div className="absolute inset-0 bg-[#00b7ff] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
            style={{
              boxShadow: '0 0 30px rgba(0, 183, 255, 0.6), 0 0 60px rgba(0, 183, 255, 0.3)'
            }}
          />
        </button>

      </div>
    </section>
  );
};

export default Hero;
