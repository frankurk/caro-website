export type Locale = 'en' | 'es' | 'de'

export const locales: Locale[] = ['en', 'es', 'de']

export interface Translations {
  portfolioLabel: string
  heroName: string
  heroOccupation: string
  heroDescription: string
  photoPlaceholder: string
  aboutLabel: string
  aboutParagraph1: string
  aboutParagraph2: string
  contactLabel: string
  contactEmail: string
  linkGithub: string
  linkLinkedin: string
  linkX: string
  footerCopyright: string
}

const en: Translations = {
  portfolioLabel: 'Portfolio',
  heroName: 'Your Name',
  heroOccupation: 'Your Occupation — e.g. Creative Developer',
  heroDescription:
    'A short description about yourself. Two or three sentences that capture who you are, what you do, and what drives you. Keep it genuine and direct.',
  photoPlaceholder: 'Photo',
  aboutLabel: 'About',
  aboutParagraph1:
    "Write a longer bio here. Share your background, what you've built, and what you're working on now. Let your voice come through — this is the section where people decide they want to know more.",
  aboutParagraph2:
    'Second paragraph if you need it. Talk about your approach to work, your values, or something that makes you different from everyone else.',
  contactLabel: 'Contact',
  contactEmail: 'your.email@example.com',
  linkGithub: 'GitHub',
  linkLinkedin: 'LinkedIn',
  linkX: 'X',
  footerCopyright: '© {year} Your Name',
}

const es: Translations = {
  portfolioLabel: 'Portafolio',
  heroName: 'Tu Nombre',
  heroOccupation: 'Tu Profesión — ej. Desarrollador Creativo',
  heroDescription:
    'Una breve descripción sobre ti. Dos o tres frases que capturen quién eres, qué haces y qué te motiva. Manténlo genuino y directo.',
  photoPlaceholder: 'Foto',
  aboutLabel: 'Sobre mí',
  aboutParagraph1:
    'Escribe una biografía más extensa aquí. Comparte tu trayectoria, lo que has construido y en qué estás trabajando ahora. Deja que tu voz se note.',
  aboutParagraph2:
    'Un segundo párrafo si lo necesitas. Habla sobre tu enfoque del trabajo, tus valores o algo que te diferencia de los demás.',
  contactLabel: 'Contacto',
  contactEmail: 'tu.correo@ejemplo.com',
  linkGithub: 'GitHub',
  linkLinkedin: 'LinkedIn',
  linkX: 'X',
  footerCopyright: '© {year} Tu Nombre',
}

const de: Translations = {
  portfolioLabel: 'Portfolio',
  heroName: 'Dein Name',
  heroOccupation: 'Dein Beruf — z.B. Kreativer Entwickler',
  heroDescription:
    'Eine kurze Beschreibung über dich. Zwei oder drei Sätze, die einfangen, wer du bist, was du tust und was dich antreibt. Authentisch und direkt.',
  photoPlaceholder: 'Foto',
  aboutLabel: 'Über mich',
  aboutParagraph1:
    'Schreibe hier eine längere Biografie. Teile deinen Hintergrund, was du aufgebaut hast und woran du gerade arbeitest. Lass deine Stimme durchkommen.',
  aboutParagraph2:
    'Ein zweiter Absatz, falls benötigt. Sprich über deinen Arbeitsansatz, deine Werte oder etwas, das dich von anderen unterscheidet.',
  contactLabel: 'Kontakt',
  contactEmail: 'deine.email@beispiel.de',
  linkGithub: 'GitHub',
  linkLinkedin: 'LinkedIn',
  linkX: 'X',
  footerCopyright: '© {year} Dein Name',
}

const translations: Record<Locale, Translations> = { en, es, de }

export function t(locale: Locale): Translations {
  return translations[locale]
}
