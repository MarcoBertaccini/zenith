import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  it: {
    'nav.about': 'Chi siamo',
    'nav.projects': 'Progetti',
    'nav.services': 'Servizi',
    'nav.contact': 'Contatti',
    'hero.cta': 'Esplora il futuro',
    'services.title': 'Servizi',
    'services.subtitle': 'Soluzioni complete per portare il tuo business oltre i limiti',
    'services.ai.title': 'AI Automation',
    'services.ai.desc': 'Soluzioni di Intelligenza Artificiale per automatizzare processi complessi e ottimizzare il business',
    'services.web.title': 'Web Design Avanzato',
    'services.web.desc': 'Esperienze digitali moderne e performanti con design evoluto e architetture scalabili',
    'services.strategy.title': 'Strategie Digitali',
    'services.strategy.desc': 'Consulenza strategica per trasformare visioni in progetti concreti e scalabili',
    'projects.title': 'Progetti',
    'projects.highlight': 'selezionati',
    'projects.subtitle': 'Trasformo idee innovative in soluzioni digitali concrete',
    'projects.filter.all': 'Tutti',
    'projects.filter.ai': 'AI & Automation',
    'projects.filter.web': 'Web Development',
    'projects.filter.aiweb': 'AI & Web',
    'about.title': 'Chi è',
    'about.highlight': 'ZENITH',
    'about.desc1': 'è un laboratorio di innovazione digitale specializzato in',
    'about.desc1.highlight': 'Intelligenza Artificiale',
    'about.desc1.end': ', automazioni intelligenti e web design di nuova generazione.',
    'about.desc2': 'Sviluppiamo soluzioni tecnologiche all\'avanguardia che ridefiniscono i confini del possibile, combinando',
    'about.desc2.vision': 'visione strategica',
    'about.desc2.and': 'e',
    'about.desc2.excellence': 'eccellenza tecnica',
    'about.desc3': 'Il nostro approccio unisce creatività e precisione per trasformare idee ambiziose in realtà digitali concrete, portando ogni progetto al suo punto più alto.',
    'about.value1.title': 'Intelligenza Artificiale',
    'about.value1.desc': 'Sviluppiamo soluzioni AI avanzate per automatizzare processi e potenziare il business',
    'about.value2.title': 'Automazioni Intelligenti',
    'about.value2.desc': 'Ottimizziamo workflow aziendali con sistemi di automazione all\'avanguardia',
    'about.value3.title': 'Web Design Evoluto',
    'about.value3.desc': 'Creiamo esperienze digitali moderne, performanti e scalabili',
    'about.value4.title': 'Strategia & Visione',
    'about.value4.desc': 'Consulenza strategica per trasformare idee in progetti di successo',
    'contact.title': 'Inizia il',
    'contact.highlight': 'viaggio',
    'contact.subtitle': 'Hai un progetto ambizioso? Portiamolo al suo punto più alto',
    'footer.rights': 'Tutti i diritti riservati',
  },
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'hero.cta': 'Explore the future',
    'services.title': 'Services',
    'services.subtitle': 'Complete solutions to take your business beyond limits',
    'services.ai.title': 'AI Automation',
    'services.ai.desc': 'Artificial Intelligence solutions to automate complex processes and optimize business',
    'services.web.title': 'Advanced Web Design',
    'services.web.desc': 'Modern and performant digital experiences with advanced design and scalable architectures',
    'services.strategy.title': 'Digital Strategies',
    'services.strategy.desc': 'Strategic consulting to transform visions into concrete and scalable projects',
    'projects.title': 'Projects',
    'projects.highlight': 'showcase',
    'projects.subtitle': 'Transforming innovative ideas into concrete digital solutions',
    'projects.filter.all': 'All',
    'projects.filter.ai': 'AI & Automation',
    'projects.filter.web': 'Web Development',
    'projects.filter.aiweb': 'AI & Web',
    'about.title': 'Who is',
    'about.highlight': 'ZENITH',
    'about.desc1': 'is a digital innovation lab specialized in',
    'about.desc1.highlight': 'Artificial Intelligence',
    'about.desc1.end': ', intelligent automation, and next-generation web design.',
    'about.desc2': 'We develop cutting-edge technological solutions that redefine the boundaries of what\'s possible, combining',
    'about.desc2.vision': 'strategic vision',
    'about.desc2.and': 'and',
    'about.desc2.excellence': 'technical excellence',
    'about.desc3': 'Our approach combines creativity and precision to transform ambitious ideas into concrete digital realities, taking every project to its highest point.',
    'about.value1.title': 'Artificial Intelligence',
    'about.value1.desc': 'We develop advanced AI solutions to automate processes and empower business',
    'about.value2.title': 'Intelligent Automation',
    'about.value2.desc': 'We optimize business workflows with cutting-edge automation systems',
    'about.value3.title': 'Advanced Web Design',
    'about.value3.desc': 'We create modern, performant, and scalable digital experiences',
    'about.value4.title': 'Strategy & Vision',
    'about.value4.desc': 'Strategic consulting to transform ideas into successful projects',
    'contact.title': 'Start the',
    'contact.highlight': 'journey',
    'contact.subtitle': 'Got an ambitious project? Let\'s take it to its highest point',
    'footer.rights': 'All rights reserved',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('it');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.it] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
