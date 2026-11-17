import type { Lang } from '../i18n/utils';

export interface WorkContent {
  sector: string;
  type: string;
  summary: string;
  built: string[];
}

export interface Work {
  slug: string;
  name: string;
  url: string;
  host: string;
  img: string;
  services: Array<'siti' | 'automazioni' | 'landing'>;
  content: Record<Lang, WorkContent>;
}

export const works: Work[] = [
  {
    slug: 'bb-la-villa',
    name: 'B&B La Villa',
    url: 'https://www.bblavilla.com',
    host: 'bblavilla.com',
    img: '/work/bblavilla.webp',
    services: ['siti'],
    content: {
      it: {
        sector: 'Bed & breakfast',
        type: 'Sito & prenotazioni',
        summary:
          'Sito vetrina per un bed & breakfast, pensato per presentare camere e servizi e ricevere richieste di prenotazione direttamente, senza passare solo dai portali.',
        built: [
          'Sito su misura, ottimizzato per mobile',
          'Presentazione di camere e servizi',
          'Richieste di prenotazione dirette dal sito',
        ],
      },
      en: {
        sector: 'Bed & breakfast',
        type: 'Website & bookings',
        summary:
          'Showcase website for a bed & breakfast, designed to present rooms and services and receive booking requests directly, not only through booking portals.',
        built: [
          'Custom, mobile-first website',
          'Rooms and services presentation',
          'Direct booking requests from the website',
        ],
      },
    },
  },
  {
    slug: 'relab-center',
    name: 'RELAB Center',
    url: 'https://relab-center.it',
    host: 'relab-center.it',
    img: '/work/relabcenter.webp',
    services: ['siti'],
    content: {
      it: {
        sector: 'Fisioterapia',
        type: 'Prenotazioni & servizi',
        summary:
          'Sito per un centro di fisioterapia: servizi spiegati in modo chiaro e un percorso semplice per prenotare o chiedere informazioni dal telefono.',
        built: [
          'Sito su misura, ottimizzato per mobile',
          'Pagine dedicate ai servizi',
          'Prenotazioni e richieste dal sito',
        ],
      },
      en: {
        sector: 'Physiotherapy',
        type: 'Bookings & services',
        summary:
          'Website for a physiotherapy centre: services explained clearly and a simple path to book or ask for information from mobile.',
        built: [
          'Custom, mobile-first website',
          'Dedicated service pages',
          'Bookings and enquiries from the website',
        ],
      },
    },
  },
  {
    slug: 'crinali-running-club',
    name: 'Crinali Running Club',
    url: 'https://www.crinalirunning.it',
    host: 'crinalirunning.it',
    img: '/work/crinalirunning.webp',
    services: ['siti'],
    content: {
      it: {
        sector: 'Trail running',
        type: 'Community & eventi',
        summary:
          'Sito per una società di trail running: racconta la community, presenta gli eventi e rende facile per nuovi runner informarsi e unirsi al gruppo.',
        built: [
          'Sito su misura, ottimizzato per mobile',
          'Sezione eventi e attività del club',
          'Contatti e iscrizioni dal sito',
        ],
      },
      en: {
        sector: 'Trail running',
        type: 'Community & events',
        summary:
          'Website for a trail running club: it tells the community’s story, presents events and makes it easy for new runners to learn more and join.',
        built: [
          'Custom, mobile-first website',
          'Club events and activities section',
          'Contacts and sign-ups from the website',
        ],
      },
    },
  },
  {
    slug: 'asfalti-mirko',
    name: 'Asfalti Mirko',
    url: 'https://asfaltimirko.it',
    host: 'asfaltimirko.it',
    img: '/work/asfaltimirko.webp',
    services: ['siti'],
    content: {
      it: {
        sector: 'Edilizia & impermeabilizzazioni',
        type: 'Sito aziendale',
        summary:
          'Sito aziendale per un’azienda del settore impermeabilizzazioni e isolanti termici: prodotti e servizi presentati in modo concreto, con richiesta di preventivo sempre a portata di mano.',
        built: [
          'Sito aziendale su misura, ottimizzato per mobile',
          'Presentazione di prodotti e servizi',
          'Richiesta di preventivo, chiamata e WhatsApp',
        ],
      },
      en: {
        sector: 'Construction & waterproofing',
        type: 'Company website',
        summary:
          'Company website for a waterproofing and thermal insulation business: products and services presented concretely, with a quote request always one tap away.',
        built: [
          'Custom, mobile-first company website',
          'Products and services presentation',
          'Quote requests, click-to-call and WhatsApp',
        ],
      },
    },
  },
];

export const workBase: Record<Lang, string> = { it: '/lavori/', en: '/en/work/' };

export function workPath(lang: Lang, w: Work) {
  return `${workBase[lang]}${w.slug}/`;
}
