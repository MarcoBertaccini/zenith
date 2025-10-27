import { useInView } from '../hooks/useInView';

const Contact = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="contatti" className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#00b7ff]/6 rounded-full blur-[180px] animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#8a2be2]/6 rounded-full blur-[140px] animate-pulse-glow animation-delay-400" />

      <div ref={ref} className="relative max-w-4xl mx-auto">
        <div className={`text-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-[#00b7ff] to-[#8a2be2] rounded-full mx-auto mb-6" />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            Inizia il <span className="text-gradient-electric text-glow">viaggio</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16">
            Hai un progetto ambizioso? Portiamolo al suo punto più alto
          </p>

          <a
            href="mailto:info@zenith-studio.it"
            className="text-3xl md:text-4xl text-gradient-electric font-bold hover:text-glow transition-all duration-500 inline-block hover:scale-105"
          >
            info@zenith-studio.it
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
