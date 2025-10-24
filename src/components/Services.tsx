import { Bot, Globe, TrendingUp } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Services = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const services = [
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Soluzioni di Intelligenza Artificiale per automatizzare processi complessi e ottimizzare il business',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    },
    {
      icon: Globe,
      title: 'Web Design Avanzato',
      description: 'Esperienze digitali moderne e performanti con design evoluto e architetture scalabili',
      features: ['UI/UX Design', 'Progressive Web Apps', 'Performance Optimization', 'Responsive Design'],
    },
    {
      icon: TrendingUp,
      title: 'Strategie Digitali',
      description: 'Consulenza strategica per trasformare visioni in progetti concreti e scalabili',
      features: ['Digital Transformation', 'Growth Strategy', 'Data Analytics', 'Innovation Consulting'],
    },
  ];

  return (
    <section id="servizi" className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f1a] via-[#0a0a0a] to-[#0a0a0a]" />

      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#8a2be2]/5 rounded-full blur-[100px] animate-pulse-glow hidden md:block" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-[#00b7ff]/5 rounded-full blur-[100px] animate-pulse-glow animation-delay-600 hidden md:block" />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(138, 43, 226, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(138, 43, 226, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ willChange: 'transform, opacity' }}>
          <div className="inline-block mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-[#00b7ff] to-[#8a2be2] rounded-full mx-auto mb-6" />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            <span className="text-gradient-electric text-glow">Servizi</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluzioni complete per portare il tuo business oltre i limiti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-10 rounded-3xl border-2 border-[#00b7ff]/20 bg-gradient-to-br from-black/50 to-[#8a2be2]/5 backdrop-blur-xl hover:border-[#00b7ff]/50 transition-all duration-500 card-3d overflow-hidden hover:inset-glow ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 80}ms`, willChange: 'transform, opacity' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00b7ff]/0 via-[#00b7ff]/5 to-[#8a2be2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-0 left-0 w-full h-1 overflow-hidden rounded-t-3xl">
                <div className="h-full bg-gradient-to-r from-[#00b7ff] via-[#8a2be2] to-[#00b7ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>

              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00b7ff]/20 to-[#8a2be2]/20 border border-[#00b7ff]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 overflow-hidden">
                  <service.icon className="w-10 h-10 text-[#00b7ff] group-hover:text-[#8a2be2] transition-colors duration-500" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00b7ff] transition-colors duration-500 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                  {service.description}
                </p>

                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00b7ff] to-[#8a2be2] mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
