export type Locale = 'en' | 'es' | 'de'

export const locales: Locale[] = ['en', 'es', 'de']

export interface Translations {
  portfolioLabel: string
  heroOccupation: string
  heroDescription: string
  photoPlaceholder: string
  aboutLabel: string
  aboutParagraph1: string
  aboutParagraph2: string
  contactLabel: string
}

const en: Translations = {
  portfolioLabel: 'Portfolio',
  heroOccupation: 'Creative Developer',
  heroDescription:
    'A short description about yourself. Two or three sentences that capture who you are, what you do, and what drives you. Keep it genuine and direct.',
  photoPlaceholder: 'Photo',
  aboutLabel: 'About',
  aboutParagraph1:
    "Write a longer bio here. Share your background, what you've built, and what you're working on now. Let your voice come through — this is the section where people decide they want to know more.",
  aboutParagraph2:
    'Second paragraph if you need it. Talk about your approach to work, your values, or something that makes you different from everyone else.',
  contactLabel: 'Contact',
}

const es: Translations = {
  portfolioLabel: 'Portafolio',
  heroOccupation: 'Desarrolladora Creativa',
  heroDescription:
    'Una breve descripción sobre ti. Dos o tres frases que capturen quién eres, qué haces y qué te motiva. Manténlo genuino y directo.',
  photoPlaceholder: 'Foto',
  aboutLabel: 'Sobre mí',
  aboutParagraph1:
    'Escribe una biografía más extensa aquí. Comparte tu trayectoria, lo que has construido y en qué estás trabajando ahora. Deja que tu voz se note.',
  aboutParagraph2:
    'Un segundo párrafo si lo necesitas. Habla sobre tu enfoque del trabajo, tus valores o algo que te diferencia de los demás.',
  contactLabel: 'Contacto',
}

const de: Translations = {
  portfolioLabel: 'Portfolio',
  heroOccupation: 'Kreative Entwicklerin',
  heroDescription:
    'Eine kurze Beschreibung über dich. Zwei oder drei Sätze, die einfangen, wer du bist, was du tust und was dich antreibt. Authentisch und direkt.',
  photoPlaceholder: 'Foto',
  aboutLabel: 'Über mich',
  aboutParagraph1:
    'Schreibe hier eine längere Biografie. Teile deinen Hintergrund, was du aufgebaut hast und woran du gerade arbeitest. Lass deine Stimme durchkommen.',
  aboutParagraph2:
    'Ein zweiter Absatz, falls benötigt. Sprich über deinen Arbeitsansatz, deine Werte oder etwas, das dich von anderen unterscheidet.',
  contactLabel: 'Kontakt',
}

const translations: Record<Locale, Translations> = { en, es, de }

export function t(locale: Locale): Translations {
  return translations[locale]
}
