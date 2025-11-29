import { Brain, Code, Zap, Target } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  const values = [
    { icon: Brain, titleKey: 'about.value1.title', descKey: 'about.value1.desc' },
    { icon: Zap, titleKey: 'about.value2.title', descKey: 'about.value2.desc' },
    { icon: Code, titleKey: 'about.value3.title', descKey: 'about.value3.desc' },
    { icon: Target, titleKey: 'about.value4.title', descKey: 'about.value4.desc' },
  ];

  return (
    <section id="chi-siamo" className="relative py-40 px-6 overflow-hidden">
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
            {t('about.title')} <span className="text-gradient-electric text-glow">{t('about.highlight')}</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed tracking-wide">
              <span className="text-[#00b7ff] font-bold text-glow">{t('about.highlight')}</span> {t('about.desc1')}
              <span className="text-gradient-electric font-semibold"> {t('about.desc1.highlight')}</span>{t('about.desc1.end')}
            </p>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              {t('about.desc2')} <span className="text-[#8a2be2] font-semibold">{t('about.desc2.vision')}</span> {t('about.desc2.and')} <span className="text-[#00b7ff] font-semibold"> {t('about.desc2.excellence')}</span>.
            </p>

            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
              {t('about.desc3')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={value.titleKey}
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
                  {t(value.titleKey)}
                </h3>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                  {t(value.descKey)}
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
