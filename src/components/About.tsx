import { Brain, Code, Zap, Target } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const values = [
    { icon: Brain, title: 'Intelligenza Artificiale', desc: 'Sviluppiamo soluzioni AI avanzate per automatizzare processi e potenziare il business' },
    { icon: Zap, title: 'Automazioni Intelligenti', desc: 'Ottimizziamo workflow aziendali con sistemi di automazione all\'avanguardia' },
    { icon: Code, title: 'Web Design Evoluto', desc: 'Creiamo esperienze digitali moderne, performanti e scalabili' },
    { icon: Target, title: 'Strategia & Visione', desc: 'Consulenza strategica per trasformare idee in progetti di successo' },
  ];

  return (
    <section id="chi-sono" className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]" />

      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00b7ff]/8 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#8a2be2]/8 rounded-full blur-[150px] animate-pulse-glow animation-delay-400" />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 183, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 183, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div ref={ref} className="relative max-w-6xl mx-auto">
        <div className={`text-center mb-24 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-[#00b7ff] to-[#8a2be2] rounded-full mx-auto mb-6" />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            Chi è <span className="text-gradient-electric text-glow">ZENITH</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed tracking-wide">
              <span className="text-[#00b7ff] font-bold text-glow">ZENITH</span> è un laboratorio di innovazione digitale specializzato in
              <span className="text-gradient-electric font-semibold"> Intelligenza Artificiale</span>, automazioni intelligenti e web design di nuova generazione.
            </p>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Sviluppiamo soluzioni tecnologiche all'avanguardia che ridefiniscono i confini del possibile,
              combinando <span className="text-[#8a2be2] font-semibold">visione strategica</span> e
              <span className="text-[#00b7ff] font-semibold"> eccellenza tecnica</span>.
            </p>

            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
              Il nostro approccio unisce creatività e precisione per trasformare idee ambiziose in realtà digitali concrete,
              portando ogni progetto al suo punto più alto.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group relative p-10 rounded-3xl border-2 border-[#00b7ff]/20 bg-gradient-to-br from-black/40 to-[#00b7ff]/5 backdrop-blur-xl hover:border-[#00b7ff]/50 transition-all duration-700 card-3d overflow-hidden hover:inset-glow ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00b7ff]/0 via-[#00b7ff]/5 to-[#8a2be2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="absolute top-0 left-0 w-full h-1 overflow-hidden rounded-t-3xl">
                <div className="h-full bg-gradient-to-r from-[#00b7ff] via-[#8a2be2] to-[#00b7ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>

              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#00b7ff]/20 to-[#8a2be2]/20 border border-[#00b7ff]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 overflow-hidden">
                  <value.icon className="w-8 h-8 text-[#00b7ff] group-hover:text-[#8a2be2] transition-colors duration-500" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00b7ff] transition-colors duration-500 tracking-tight">
                  {value.title}
                </h3>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                  {value.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
