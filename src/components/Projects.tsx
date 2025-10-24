import { useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Projects = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [filter, setFilter] = useState('Tutti');

  const projects = [
    {
      title: 'AI Assistant per Fisioterapista',
      category: 'AI & Automation',
      description: 'Sistema di automazione intelligente per gestione pazienti, appuntamenti e piani terapeutici personalizzati',
      tags: ['AI', 'Automazione', 'Healthcare'],
      gradient: 'from-[#00b7ff] to-[#0095cc]',
    },
    {
      title: 'Centro Benessere Premium',
      category: 'Web Development',
      description: 'Sito web elegante con sistema di prenotazione integrato e gestione servizi wellness',
      tags: ['Web', 'Design', 'Booking'],
      gradient: 'from-[#8a2be2] to-[#b14ee8]',
    },
    {
      title: 'Piattaforma AI Intelligente',
      category: 'AI & Web',
      description: 'Sistema avanzato con raccomandazioni AI e assistente virtuale per supporto clienti in tempo reale',
      tags: ['AI', 'Machine Learning', 'Web'],
      gradient: 'from-[#00b7ff] to-[#8a2be2]',
    },
    {
      title: 'Dashboard Analytics Avanzata',
      category: 'Web Development',
      description: 'Dashboard in tempo reale con visualizzazioni dati interattive e reportistica automatizzata',
      tags: ['Web', 'Analytics', 'Automazione'],
      gradient: 'from-[#0095cc] to-[#00b7ff]',
    },
    {
      title: 'Chatbot AI Multilingue',
      category: 'AI & Automation',
      description: 'Assistente AI conversazionale con supporto multilingue e integrazione CRM',
      tags: ['AI', 'NLP', 'Automazione'],
      gradient: 'from-[#8a2be2] to-[#00b7ff]',
    },
    {
      title: 'Sistema CRM Personalizzato',
      category: 'Web Development',
      description: 'CRM su misura con automazioni workflow e integrazione strumenti aziendali',
      tags: ['Web', 'Automazione', 'Business'],
      gradient: 'from-[#b14ee8] to-[#8a2be2]',
    },
  ];

  const categories = ['Tutti', 'AI & Automation', 'Web Development', 'AI & Web'];

  const filteredProjects = filter === 'Tutti'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="progetti" className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#0f0f1a]" />

      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-[#8a2be2]/5 rounded-full blur-[100px] animate-pulse-glow hidden md:block" />
      <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-[#00b7ff]/5 rounded-full blur-[100px] animate-pulse-glow animation-delay-600 hidden md:block" />

      <div ref={ref} className="relative max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ willChange: 'transform, opacity' }}>
          <div className="inline-block mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-[#00b7ff] to-[#8a2be2] rounded-full mx-auto mb-6" />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            Progetti <span className="text-gradient-electric text-glow">selezionati</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trasformo idee innovative in soluzioni digitali concrete
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide uppercase transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-[#00b7ff] to-[#8a2be2] text-white scale-105'
                  : 'bg-gradient-to-br from-[#00b7ff]/5 to-[#8a2be2]/5 text-gray-400 hover:text-white border border-[#00b7ff]/20 hover:border-[#00b7ff]/40 hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative p-8 rounded-3xl border-2 border-[#00b7ff]/20 bg-gradient-to-br from-black/50 to-[#8a2be2]/5 backdrop-blur-xl hover:border-[#00b7ff]/50 transition-all duration-500 card-3d overflow-hidden hover:inset-glow cursor-pointer ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms`, willChange: 'transform, opacity' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00b7ff]/0 via-[#00b7ff]/5 to-[#8a2be2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-0 left-0 w-full h-1 overflow-hidden rounded-t-3xl">
                <div className="h-full bg-gradient-to-r from-[#00b7ff] via-[#8a2be2] to-[#00b7ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ willChange: 'transform' }} />
              </div>

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-70 border-2 border-[#00b7ff]/80 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 overflow-hidden`} style={{ willChange: 'transform' }}>
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[#00b7ff] transition-all duration-500" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00b7ff] transition-colors duration-300 tracking-tight">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-semibold bg-[#00b7ff]/10 border border-[#00b7ff]/30 rounded-full text-[#00b7ff] group-hover:bg-[#00b7ff]/20 group-hover:border-[#00b7ff]/50 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
