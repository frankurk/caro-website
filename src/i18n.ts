export type Locale = 'en' | 'es' | 'de'

export const locales: Locale[] = ['en', 'es', 'de']

export interface Translations {
  portfolioLabel: string
  heroOccupation: string
  heroDescription: string
  aboutLabel: string
  aboutParagraph1: string
  aboutParagraph2: string
  contactLabel: string
}

const en: Translations = {
  portfolioLabel: 'Portfolio',
  heroOccupation: 'Software Engineer',
  heroDescription:
    'Software Developer based in Santiago, Chile. Currently working at Mercado Libre as Software Engineer.',
  aboutLabel: 'About me',
  aboutParagraph1:
    'I am a technology enthusiast dedicated to creating flawless digital experiences. I firmly believe that the magic is in the details; therefore, I immerse myself in every phase of development to ensure quality results that amaze.',
  aboutParagraph2:
    'I am motivated by teamwork and challenges that push me to expand my professional horizons.',
  contactLabel: 'Contact',
}

const es: Translations = {
  portfolioLabel: 'Portafolio',
  heroOccupation: 'Software Engineer',
  heroDescription:
    'Desarrolladora de software con sede en Santiago, Chile. Actualmente trabajando en Mercado Libre como Software Engineer.',
  aboutLabel: 'Sobre mí',
  aboutParagraph1:
    'Soy una entusiasta de la tecnología dedicada a crear experiencias digitales impecables. Creo firmemente que la magia está en los detalles; por eso, me sumerjo en cada fase del desarrollo para garantizar resultados de calidad que sorprendan.',
  aboutParagraph2:
    'Me motiva el trabajo en equipo y los retos que me obligan a expandir mis horizontes profesionales.',
  contactLabel: 'Contacto',
}

const de: Translations = {
  portfolioLabel: 'Portfolio',
  heroOccupation: 'Software Engineer',
  heroDescription:
    'Softwareentwicklerin mit Sitz in Santiago, Chile. Derzeit tätig bei Mercado Libre als Software Engineer.',
  aboutLabel: 'Über mich',
  aboutParagraph1:
    'Ich bin eine Technik-Enthusiastin, die sich der Schaffung makelloser digitaler Erlebnisse widmet. Ich glaube fest daran, dass die Magie im Detail liegt; deshalb vertiefe ich mich in jede Entwicklungsphase, um hochwertige Ergebnisse zu garantieren, die begeistern.',
  aboutParagraph2:
    'Mich motivieren Teamarbeit und Herausforderungen, die mich dazu bringen, meinen beruflichen Horizont zu erweitern.',
  contactLabel: 'Kontakt',
}

const translations: Record<Locale, Translations> = { en, es, de }

export function t(locale: Locale): Translations {
  return translations[locale]
}
