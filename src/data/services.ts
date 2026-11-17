import type { Lang } from '../i18n/utils';

export interface ServiceContent {
  slug: string;
  nav: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  forWhoTitle: string;
  forWho: string[];
  includedTitle: string;
  included: string[];
  howTitle: string;
  how: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
}

export interface Service {
  id: 'siti' | 'automazioni' | 'landing';
  content: Record<Lang, ServiceContent>;
}

export const services: Service[] = [
  {
    id: 'siti',
    content: {
      it: {
        slug: 'siti-web-forli',
        nav: 'Siti web',
        metaTitle: 'Realizzazione Siti Web a Forlì | Zenith Studio',
        metaDescription:
          'Realizzazione siti web a Forlì per aziende, studi e negozi: siti vetrina veloci, su misura, ottimizzati per mobile e Google. Preventivo gratuito.',
        eyebrow: 'Siti web · Forlì',
        h1: 'Realizzazione siti web a Forlì',
        intro:
          'Progettiamo siti vetrina su misura per attività di Forlì e della Romagna: veloci, chiari e pensati per trasformare chi visita in chi vi contatta. Niente template riciclati, niente pagine lente.',
        forWhoTitle: 'Per chi è',
        forWho: [
          'Attività locali che vogliono farsi trovare su Google da chi cerca in zona.',
          'Studi professionali che hanno bisogno di un sito serio e aggiornabile.',
          'Negozi, B&B e ristoranti che vogliono ricevere richieste e prenotazioni dal telefono.',
          'Aziende con un sito vecchio, lento o che non porta contatti.',
        ],
        includedTitle: 'Cosa include',
        included: [
          'Design su misura, fino a 5 pagine, pensato prima per il telefono.',
          'Testi e struttura ottimizzati per Google (SEO di base, dati strutturati, sitemap).',
          'Form di contatto, link a WhatsApp e chiamata diretta.',
          'Dominio e hosting inclusi il primo anno.',
          'Consegna in 3–4 settimane.',
        ],
        howTitle: 'Come lavoriamo',
        how: [
          { title: 'Analisi', desc: 'Una chiamata per capire attività, clienti e obiettivi del sito.' },
          { title: 'Progettazione', desc: 'Struttura delle pagine e design, che approvate prima dello sviluppo.' },
          { title: 'Sviluppo', desc: 'Costruiamo il sito e lo testiamo con voi su telefono e computer.' },
          { title: 'Messa online', desc: 'Pubblichiamo, colleghiamo Google e restiamo disponibili dopo.' },
        ],
        faq: [
          {
            q: 'Quanto costa un sito web a Forlì?',
            a: 'Dipende da pagine e funzioni richieste. Dopo una chiamata conoscitiva gratuita vi mandiamo un preventivo chiaro, senza costi nascosti.',
          },
          {
            q: 'Posso aggiornare il sito da solo?',
            a: 'Sì, se vi serve possiamo prevedere le sezioni che volete modificare in autonomia. Altrimenti ci pensiamo noi.',
          },
          {
            q: 'Il sito resta mio?',
            a: 'Sì. Dominio e contenuti sono vostri: potete restare con noi o portarli altrove quando volete.',
          },
        ],
      },
      en: {
        slug: 'websites',
        nav: 'Websites',
        metaTitle: 'Website Design & Development in Forlì, Italy | Zenith Studio',
        metaDescription:
          'Custom websites for businesses, studios and shops: fast, mobile-first and optimized for Google. Based in Forlì, Italy. Free quote.',
        eyebrow: 'Websites · Forlì',
        h1: 'Website design and development',
        intro:
          'We design custom showcase websites for businesses in Forlì, Romagna and beyond: fast, clear and built to turn visitors into enquiries. No recycled templates, no slow pages.',
        forWhoTitle: 'Who it’s for',
        forWho: [
          'Local businesses that want to be found on Google by nearby customers.',
          'Professional studios that need a credible, easy-to-update website.',
          'Shops, B&Bs and restaurants that want enquiries and bookings from mobile.',
          'Companies with an old or slow website that brings no leads.',
        ],
        includedTitle: 'What’s included',
        included: [
          'Custom design, up to 5 pages, mobile-first.',
          'Copy and structure optimized for Google (SEO basics, structured data, sitemap).',
          'Contact form, WhatsApp link and click-to-call.',
          'Domain and hosting included for the first year.',
          'Delivery in 3–4 weeks.',
        ],
        howTitle: 'How we work',
        how: [
          { title: 'Discovery', desc: 'A call to understand your business, customers and goals.' },
          { title: 'Design', desc: 'Page structure and design, approved by you before development.' },
          { title: 'Build', desc: 'We build the site and test it with you on mobile and desktop.' },
          { title: 'Launch', desc: 'We publish, connect Google and stay available afterwards.' },
        ],
        faq: [
          {
            q: 'How much does a website cost?',
            a: 'It depends on pages and features. After a free intro call we send you a clear quote with no hidden costs.',
          },
          {
            q: 'Can I update the website myself?',
            a: 'Yes, if you need to we can set up the sections you want to edit on your own. Otherwise we handle it.',
          },
          {
            q: 'Do I own the website?',
            a: 'Yes. Domain and content are yours: stay with us or move them whenever you like.',
          },
        ],
      },
    },
  },
  {
    id: 'automazioni',
    content: {
      it: {
        slug: 'automazioni-n8n',
        nav: 'Automazioni',
        metaTitle: 'Automazione Processi Aziendali con n8n a Forlì | Zenith Studio',
        metaDescription:
          'Automazioni su misura con n8n per PMI e studi: richieste dal sito su WhatsApp, CRM aggiornato da solo, report mensili. Zenith Studio, Forlì.',
        eyebrow: 'Automazioni · n8n',
        h1: 'Automazione dei processi con n8n',
        intro:
          'Togliamo al vostro team il lavoro ripetitivo: copiare dati, rispondere sempre alle stesse email, controllare a mano da dove arrivano i clienti. Costruiamo flussi su misura con n8n che lavorano da soli, 24 ore su 24.',
        forWhoTitle: 'Cosa possiamo automatizzare',
        forWho: [
          'Ogni richiesta dal sito vi arriva subito su WhatsApp o email.',
          'I contatti finiscono da soli nel CRM o in un foglio Google, senza copia-incolla.',
          'Promemoria e follow-up automatici a chi vi ha scritto e non ha ancora risposto.',
          'Un report mensile con quante richieste sono arrivate e da dove.',
        ],
        includedTitle: 'Cosa include',
        included: [
          'Analisi di dove il vostro team perde più tempo.',
          'Flussi n8n su misura, collegati agli strumenti che usate già.',
          'Notifiche istantanee per ogni nuova richiesta.',
          'Report mensile automatico.',
          'Assistenza prioritaria per 12 mesi (pacchetto Pro).',
        ],
        howTitle: 'Come funziona',
        how: [
          { title: 'Mappatura', desc: 'Guardiamo insieme le attività ripetitive e scegliamo quelle che rendono di più.' },
          { title: 'Progettazione', desc: 'Disegniamo il flusso: da dove partono i dati e dove devono arrivare.' },
          { title: 'Costruzione', desc: 'Realizziamo e testiamo l’automazione con casi reali.' },
          { title: 'Monitoraggio', desc: 'Controlliamo che funzioni nel tempo e la miglioriamo se serve.' },
        ],
        faq: [
          {
            q: 'Cos’è n8n?',
            a: 'È una piattaforma di automazione che collega tra loro app e servizi (sito, email, WhatsApp, CRM, fogli Google) e fa girare i flussi in automatico.',
          },
          {
            q: 'Devo cambiare gli strumenti che uso?',
            a: 'No. Le automazioni si collegano a quello che usate già, dove possibile.',
          },
          {
            q: 'Serve avere un sito fatto da voi?',
            a: 'No. Possiamo automatizzare anche partendo dal vostro sito attuale o da altri canali.',
          },
        ],
      },
      en: {
        slug: 'automation',
        nav: 'Automation',
        metaTitle: 'Business Process Automation with n8n | Zenith Studio, Forlì',
        metaDescription:
          'Custom n8n automation for small businesses and studios: website enquiries on WhatsApp, a CRM that updates itself, monthly reports. Zenith Studio, Forlì, Italy.',
        eyebrow: 'Automation · n8n',
        h1: 'Business process automation with n8n',
        intro:
          'We take repetitive work off your team: copying data, answering the same emails, checking by hand where customers come from. We build custom n8n workflows that run on their own, around the clock.',
        forWhoTitle: 'What we can automate',
        forWho: [
          'Every website enquiry reaches you instantly on WhatsApp or email.',
          'Contacts land in your CRM or a Google Sheet automatically, no copy-paste.',
          'Automatic reminders and follow-ups for people who haven’t replied yet.',
          'A monthly report of how many enquiries arrived and where from.',
        ],
        includedTitle: 'What’s included',
        included: [
          'Analysis of where your team loses the most time.',
          'Custom n8n workflows connected to the tools you already use.',
          'Instant notifications for every new enquiry.',
          'Automatic monthly report.',
          'Priority support for 12 months (Pro package).',
        ],
        howTitle: 'How it works',
        how: [
          { title: 'Mapping', desc: 'We review your repetitive tasks together and pick the ones that pay off most.' },
          { title: 'Design', desc: 'We design the flow: where data starts and where it needs to go.' },
          { title: 'Build', desc: 'We build and test the automation with real cases.' },
          { title: 'Monitoring', desc: 'We make sure it keeps working and improve it when needed.' },
        ],
        faq: [
          {
            q: 'What is n8n?',
            a: 'An automation platform that connects apps and services (website, email, WhatsApp, CRM, Google Sheets) and runs workflows automatically.',
          },
          {
            q: 'Do I have to change the tools I use?',
            a: 'No. Automations connect to what you already use, wherever possible.',
          },
          {
            q: 'Do I need a website built by you?',
            a: 'No. We can automate starting from your current website or other channels.',
          },
        ],
      },
    },
  },
  {
    id: 'landing',
    content: {
      it: {
        slug: 'landing-page',
        nav: 'Landing page',
        metaTitle: 'Landing Page per Campagne e Contatti a Forlì | Zenith Studio',
        metaDescription:
          'Landing page veloci e su misura per campagne Google, Meta ed eventi: una pagina, un obiettivo, più contatti. Zenith Studio, Forlì.',
        eyebrow: 'Landing page',
        h1: 'Landing page che portano contatti',
        intro:
          'Una pagina, un obiettivo: farvi contattare. Realizziamo landing page veloci per campagne pubblicitarie, eventi, lanci e promozioni, collegate a WhatsApp, email o CRM.',
        forWhoTitle: 'Quando serve',
        forWho: [
          'State facendo pubblicità su Google o Meta e volete più richieste per lo stesso budget.',
          'Avete un evento, un corso o un’offerta a tempo da promuovere.',
          'Volete testare un nuovo servizio prima di rifare tutto il sito.',
        ],
        includedTitle: 'Cosa include',
        included: [
          'Pagina su misura con un solo obiettivo chiaro.',
          'Testi orientati all’azione e prove (recensioni, lavori, numeri).',
          'Form breve, WhatsApp e chiamata diretta.',
          'Tracciamento delle conversioni (Google Analytics, Meta Pixel).',
          'Collegamento automatico delle richieste a WhatsApp, email o CRM.',
        ],
        howTitle: 'Come lavoriamo',
        how: [
          { title: 'Obiettivo', desc: 'Definiamo chi deve arrivare sulla pagina e cosa deve fare.' },
          { title: 'Testi e design', desc: 'Scriviamo e disegniamo la pagina intorno a quell’azione.' },
          { title: 'Sviluppo', desc: 'Pagina leggera, veloce da mobile, con tracciamento attivo.' },
          { title: 'Ottimizzazione', desc: 'Guardiamo i dati e miglioriamo ciò che non converte.' },
        ],
        faq: [
          {
            q: 'Che differenza c’è tra sito e landing page?',
            a: 'Il sito presenta tutta l’attività. La landing page ha un solo scopo, ad esempio raccogliere richieste da una campagna, e niente distrazioni.',
          },
          {
            q: 'Gestite anche le campagne pubblicitarie?',
            a: 'Ci occupiamo della pagina e del tracciamento. Per le campagne possiamo lavorare con chi le gestisce già per voi.',
          },
          {
            q: 'Posso collegarla al mio sito?',
            a: 'Sì, può stare sul vostro dominio o su un sottodominio dedicato.',
          },
        ],
      },
      en: {
        slug: 'landing-pages',
        nav: 'Landing pages',
        metaTitle: 'Landing Pages for Campaigns & Leads | Zenith Studio, Forlì',
        metaDescription:
          'Fast, custom landing pages for Google and Meta campaigns, events and launches: one page, one goal, more leads. Zenith Studio, Forlì, Italy.',
        eyebrow: 'Landing pages',
        h1: 'Landing pages that bring in leads',
        intro:
          'One page, one goal: getting you contacted. We build fast landing pages for ad campaigns, events, launches and promotions, connected to WhatsApp, email or your CRM.',
        forWhoTitle: 'When you need one',
        forWho: [
          'You run Google or Meta ads and want more enquiries for the same budget.',
          'You have an event, a course or a limited-time offer to promote.',
          'You want to test a new service before redoing your whole website.',
        ],
        includedTitle: 'What’s included',
        included: [
          'A custom page with one clear goal.',
          'Action-driven copy and proof (reviews, work, numbers).',
          'Short form, WhatsApp and click-to-call.',
          'Conversion tracking (Google Analytics, Meta Pixel).',
          'Enquiries routed automatically to WhatsApp, email or CRM.',
        ],
        howTitle: 'How we work',
        how: [
          { title: 'Goal', desc: 'We define who lands on the page and what they should do.' },
          { title: 'Copy & design', desc: 'We write and design the page around that action.' },
          { title: 'Build', desc: 'A lightweight page, fast on mobile, with tracking in place.' },
          { title: 'Optimization', desc: 'We read the data and improve what doesn’t convert.' },
        ],
        faq: [
          {
            q: 'What’s the difference between a website and a landing page?',
            a: 'A website presents your whole business. A landing page has a single purpose, such as collecting enquiries from a campaign, with no distractions.',
          },
          {
            q: 'Do you also run ad campaigns?',
            a: 'We handle the page and tracking. For campaigns we can work with whoever already manages them for you.',
          },
          {
            q: 'Can it live on my website?',
            a: 'Yes, it can sit on your domain or on a dedicated subdomain.',
          },
        ],
      },
    },
  },
];

export const serviceBase: Record<Lang, string> = { it: '/servizi/', en: '/en/services/' };

export function servicePath(lang: Lang, s: Service) {
  return `${serviceBase[lang]}${s.content[lang].slug}/`;
}
