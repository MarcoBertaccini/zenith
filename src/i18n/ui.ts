export const languages = {
  it: 'IT',
  en: 'EN',
} as const;

export const defaultLang = 'it';

export const ui = {
  it: {
    'meta.title': 'Zenith Studio — Sviluppo Web & Automazione dei Processi',
    'meta.description':
      'Zenith Studio progetta siti ad alte prestazioni e automazioni su misura per aziende, studi e negozi che vogliono eliminare il lavoro ripetitivo.',

    'nav.positioning': 'Cosa facciamo',
    'nav.services': 'Servizi',
    'nav.process': 'Come lavoriamo',
    'nav.projects': 'Progetti',
    'nav.contact': 'Contatti',
    'nav.cta': 'Prenota una call',

    'hero.eyebrow': 'Sviluppo Web & Automazione dei Processi',
    'hero.headline.pre': 'Costruiamo i sistemi che tolgono',
    'hero.headline.highlight': 'il lavoro ripetitivo',
    'hero.headline.post': 'dal tuo team.',
    'hero.sub':
      'Siti ad alte prestazioni e automazioni su misura per aziende, studi e negozi che vogliono smettere di perdere ore su attività manuali.',
    'hero.cta.primary': 'Prenota una consulenza',
    'hero.cta.secondary': 'Guarda come lavoriamo',

    'positioning.eyebrow': 'Cosa facciamo',
    'positioning.heading': 'Non costruiamo solo siti web.',
    'positioning.body':
      'Affianchiamo aziende, studi professionali e negozi nell’automatizzare i processi che oggi rubano tempo al team — dalla gestione dei contatti alla reportistica — con soluzioni su misura, non software generico.',
    'positioning.pillar1.title': 'Siti che convertono',
    'positioning.pillar1.desc':
      'Non solo belli: progettati per generare contatti e vendite, veloci su ogni dispositivo.',
    'positioning.pillar2.title': 'Automazioni su misura',
    'positioning.pillar2.desc':
      'Colleghiamo i tuoi strumenti e automatizziamo i processi ripetitivi: preventivi, follow-up, reportistica.',
    'positioning.pillar3.title': 'Integrazioni AI',
    'positioning.pillar3.desc':
      'Assistenti e workflow basati su AI per rispondere ai clienti, qualificare i contatti, ridurre il lavoro manuale.',

    'process.eyebrow': 'Come lavoriamo',
    'process.heading': 'Un metodo, non un template.',
    'process.step1.title': 'Analisi',
    'process.step1.desc': 'Studiamo i tuoi processi attuali e individuiamo dove si perde più tempo.',
    'process.step2.title': 'Progettazione',
    'process.step2.desc': 'Disegniamo la soluzione — sito, automazione o entrambi — su misura per il tuo flusso di lavoro.',
    'process.step3.title': 'Sviluppo',
    'process.step3.desc': 'Costruiamo e testiamo il sistema, con verifiche continue insieme a te.',
    'process.step4.title': 'Attivazione & supporto',
    'process.step4.desc': 'Mettiamo tutto in produzione e restiamo al tuo fianco per ottimizzare nel tempo.',

    'services.eyebrow': 'Servizi',
    'services.heading': 'Tre modi per farti guadagnare tempo.',
    'services.web.title': 'Siti & Prodotti Digitali',
    'services.web.desc': 'Siti e web app pensati per performance, conversioni e crescita, non solo estetica.',
    'services.web.tag1': 'Performance',
    'services.web.tag2': 'SEO tecnica',
    'services.web.tag3': 'Design su misura',
    'services.web.tag4': 'CMS headless',
    'services.automation.title': 'Automazione dei Processi',
    'services.automation.desc': 'Colleghiamo i tuoi strumenti e automatizziamo i flussi di lavoro ripetitivi.',
    'services.automation.tag1': 'Integrazione strumenti',
    'services.automation.tag2': 'Workflow automatici',
    'services.automation.tag3': 'Notifiche & report',
    'services.automation.tag4': 'Meno errori manuali',
    'services.ai.title': 'Assistenti & AI Operativa',
    'services.ai.desc': 'Sistemi basati su AI per qualificare contatti, rispondere ai clienti e analizzare dati.',
    'services.ai.tag1': 'Qualificazione lead',
    'services.ai.tag2': 'Risposte automatiche',
    'services.ai.tag3': 'Analisi dati',
    'services.ai.tag4': 'Assistenti su misura',

    'projects.eyebrow': 'Progetti',
    'projects.heading': 'I primi case study sono in lavorazione.',
    'projects.body':
      'Stiamo completando i primi progetti pilota con aziende e studi partner. Se il tuo business ha processi ripetitivi da automatizzare, potresti diventare il prossimo case study.',
    'projects.slot1': 'Automazione preventivi — studio professionale',
    'projects.slot2': 'Sito & prenotazioni online — retail',
    'projects.slot3': 'Assistente clienti AI — servizi B2B',
    'projects.slot.badge': 'In arrivo',

    'contact.eyebrow': 'Contatti',
    'contact.heading': 'Iniziamo con due minuti.',
    'contact.sub':
      'Rispondi a qualche domanda veloce: ti diciamo subito dove potresti risparmiare tempo, poi ci mettiamo in contatto per approfondire.',

    'funnel.step.quiz': 'Domande',
    'funnel.step.result': 'Stima',
    'funnel.step.details': 'Contatti',
    'funnel.step.done': 'Fatto',

    'funnel.q.sector.label': 'In che settore operi?',
    'funnel.q.sector.professional': 'Studio professionale',
    'funnel.q.sector.retail': 'Negozio / Retail',
    'funnel.q.sector.b2b': 'Servizi B2B',
    'funnel.q.sector.other': 'Altro',

    'funnel.q.team.label': 'Quante persone gestiscono attività ripetitive?',
    'funnel.q.team.s': '1–2 persone',
    'funnel.q.team.m': '3–5 persone',
    'funnel.q.team.l': '6–10 persone',
    'funnel.q.team.xl': 'Più di 10',

    'funnel.q.hours.label': 'Quante ore a settimana passate su attività ripetitive (email, dati, follow-up)?',
    'funnel.q.hours.s': 'Meno di 5 ore',
    'funnel.q.hours.m': '5–10 ore',
    'funnel.q.hours.l': '10–20 ore',
    'funnel.q.hours.xl': 'Più di 20 ore',

    'funnel.q.tools.label': 'Usate già un CRM o un gestionale?',
    'funnel.q.tools.yes': 'Sì',
    'funnel.q.tools.no': 'No, ancora tutto manuale',

    'funnel.cta.next': 'Continua',
    'funnel.cta.back': 'Indietro',
    'funnel.cta.seeEstimate': 'Vedi la stima',

    'funnel.result.heading': 'Potresti risparmiare circa',
    'funnel.result.perYear': 'all’anno',
    'funnel.result.body': 'Stima basata sulle tue risposte, calcolata su un valore medio del tempo del team. Parliamone per capire come arrivarci davvero.',
    'funnel.result.cta': 'Voglio saperne di più',

    'funnel.details.name': 'Nome e cognome',
    'funnel.details.email': 'Email',
    'funnel.details.company': 'Azienda / Studio',
    'funnel.details.phone': 'Telefono (facoltativo)',
    'funnel.details.message': 'Raccontaci qualcosa in più (facoltativo)',
    'funnel.details.submit': 'Invia richiesta',
    'funnel.details.submitting': 'Invio in corso…',
    'funnel.details.privacy': 'Useremo questi dati solo per ricontattarti riguardo alla tua richiesta.',

    'funnel.done.heading': 'Richiesta ricevuta.',
    'funnel.done.body': 'Grazie! Ti risponderemo entro un giorno lavorativo per approfondire la stima e capire come possiamo aiutarti.',

    'funnel.error.required': 'Campo obbligatorio.',
    'funnel.error.email': 'Inserisci un’email valida.',
    'funnel.error.submit': 'Non siamo riusciti a inviare la richiesta. Riprova o scrivici direttamente a',

    'footer.tagline': 'Sistemi che lavorano al posto tuo.',
    'footer.rights': 'Tutti i diritti riservati.',
  },
  en: {
    'meta.title': 'Zenith Studio — Web Development & Process Automation',
    'meta.description':
      'Zenith Studio designs high-performance websites and custom automation for businesses, studios and shops ready to eliminate repetitive work.',

    'nav.positioning': 'What we do',
    'nav.services': 'Services',
    'nav.process': 'How we work',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.cta': 'Book a call',

    'hero.eyebrow': 'Web Development & Process Automation',
    'hero.headline.pre': 'We build the systems that take',
    'hero.headline.highlight': 'repetitive work',
    'hero.headline.post': 'off your team’s plate.',
    'hero.sub':
      'High-performance websites and custom automation for businesses, studios and shops ready to stop losing hours on manual work.',
    'hero.cta.primary': 'Book a consultation',
    'hero.cta.secondary': 'See how we work',

    'positioning.eyebrow': 'What we do',
    'positioning.heading': 'We don’t just build websites.',
    'positioning.body':
      'We help businesses, professional studios and shops automate the processes that eat up their team’s time — from lead management to reporting — with tailored solutions, not generic software.',
    'positioning.pillar1.title': 'Websites that convert',
    'positioning.pillar1.desc':
      'Not just good-looking: built to generate leads and sales, fast on every device.',
    'positioning.pillar2.title': 'Custom automation',
    'positioning.pillar2.desc':
      'We connect your tools and automate repetitive processes: quotes, follow-ups, reporting.',
    'positioning.pillar3.title': 'AI integrations',
    'positioning.pillar3.desc':
      'AI-driven assistants and workflows to respond to customers, qualify leads and cut manual work.',

    'process.eyebrow': 'How we work',
    'process.heading': 'A method, not a template.',
    'process.step1.title': 'Analysis',
    'process.step1.desc': 'We study your current processes and find where the most time is lost.',
    'process.step2.title': 'Design',
    'process.step2.desc': 'We design the solution — website, automation, or both — tailored to your workflow.',
    'process.step3.title': 'Development',
    'process.step3.desc': 'We build and test the system, with continuous checks together with you.',
    'process.step4.title': 'Launch & support',
    'process.step4.desc': 'We ship it to production and stay by your side to optimize it over time.',

    'services.eyebrow': 'Services',
    'services.heading': 'Three ways to buy back your time.',
    'services.web.title': 'Websites & Digital Products',
    'services.web.desc': 'Websites and web apps built for performance, conversions and growth, not just looks.',
    'services.web.tag1': 'Performance',
    'services.web.tag2': 'Technical SEO',
    'services.web.tag3': 'Custom design',
    'services.web.tag4': 'Headless CMS',
    'services.automation.title': 'Process Automation',
    'services.automation.desc': 'We connect your tools and automate repetitive workflows.',
    'services.automation.tag1': 'Tool integration',
    'services.automation.tag2': 'Automated workflows',
    'services.automation.tag3': 'Notifications & reports',
    'services.automation.tag4': 'Fewer manual errors',
    'services.ai.title': 'AI Assistants & Operations',
    'services.ai.desc': 'AI-driven systems to qualify leads, respond to customers and analyze data.',
    'services.ai.tag1': 'Lead qualification',
    'services.ai.tag2': 'Automated replies',
    'services.ai.tag3': 'Data analysis',
    'services.ai.tag4': 'Custom assistants',

    'projects.eyebrow': 'Projects',
    'projects.heading': 'Our first case studies are in the works.',
    'projects.body':
      'We’re completing our first pilot projects with partner businesses and studios. If your business has repetitive processes to automate, you could be our next case study.',
    'projects.slot1': 'Quote automation — professional studio',
    'projects.slot2': 'Website & online booking — retail',
    'projects.slot3': 'AI customer assistant — B2B services',
    'projects.slot.badge': 'Coming soon',

    'contact.eyebrow': 'Contact',
    'contact.heading': 'Let’s start with two minutes.',
    'contact.sub':
      'Answer a few quick questions: we’ll show you right away where you could save time, then we’ll get in touch to go deeper.',

    'funnel.step.quiz': 'Questions',
    'funnel.step.result': 'Estimate',
    'funnel.step.details': 'Contact',
    'funnel.step.done': 'Done',

    'funnel.q.sector.label': 'What industry are you in?',
    'funnel.q.sector.professional': 'Professional studio',
    'funnel.q.sector.retail': 'Shop / Retail',
    'funnel.q.sector.b2b': 'B2B services',
    'funnel.q.sector.other': 'Other',

    'funnel.q.team.label': 'How many people handle repetitive tasks?',
    'funnel.q.team.s': '1–2 people',
    'funnel.q.team.m': '3–5 people',
    'funnel.q.team.l': '6–10 people',
    'funnel.q.team.xl': 'More than 10',

    'funnel.q.hours.label': 'How many hours a week go into repetitive tasks (email, data, follow-ups)?',
    'funnel.q.hours.s': 'Less than 5 hours',
    'funnel.q.hours.m': '5–10 hours',
    'funnel.q.hours.l': '10–20 hours',
    'funnel.q.hours.xl': 'More than 20 hours',

    'funnel.q.tools.label': 'Do you already use a CRM or management tool?',
    'funnel.q.tools.yes': 'Yes',
    'funnel.q.tools.no': 'No, still all manual',

    'funnel.cta.next': 'Continue',
    'funnel.cta.back': 'Back',
    'funnel.cta.seeEstimate': 'See the estimate',

    'funnel.result.heading': 'You could save about',
    'funnel.result.perYear': 'per year',
    'funnel.result.body': 'Estimate based on your answers, calculated on an average value of your team’s time. Let’s talk about how to actually get there.',
    'funnel.result.cta': 'I want to know more',

    'funnel.details.name': 'Full name',
    'funnel.details.email': 'Email',
    'funnel.details.company': 'Company / Studio',
    'funnel.details.phone': 'Phone (optional)',
    'funnel.details.message': 'Tell us a bit more (optional)',
    'funnel.details.submit': 'Send request',
    'funnel.details.submitting': 'Sending…',
    'funnel.details.privacy': 'We’ll only use this data to get back to you about your request.',

    'funnel.done.heading': 'Request received.',
    'funnel.done.body': 'Thanks! We’ll get back to you within one business day to go deeper on the estimate and how we can help.',

    'funnel.error.required': 'This field is required.',
    'funnel.error.email': 'Enter a valid email address.',
    'funnel.error.submit': 'We couldn’t send your request. Try again or email us directly at',

    'footer.tagline': 'Systems that work for you.',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export type UiKey = keyof (typeof ui)['it'];
