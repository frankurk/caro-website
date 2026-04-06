# Francisca Caro — Portfolio

Personal portfolio website.

**Live site:** [caro.cl](https://caro.cl)

## Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React + Vite)
- **Routing:** File-based routing with [TanStack Router](https://tanstack.com/router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **i18n:** Custom locale system (`src/i18n.ts`) supporting English, Spanish, and German
- **Language:** TypeScript

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`.

## Building For Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components (e.g. LocaleSwitcher)
├── routes/
│   ├── __root.tsx       # Root layout & shell
│   └── {-$locale}/      # Localized routes
│       └── index.tsx    # Home / portfolio page
├── i18n.ts              # Translation strings & locale helper
└── styles.css           # Global & Tailwind styles

public/                  # Static assets (e.g. avatar.jpg, favicon)
```

## i18n

Translations are managed in `src/i18n.ts` with support for three locales:

- `en` — English
- `es` — Spanish
- `de` — German

The URL prefix reflects the active locale (e.g. `/en/`, `/es/`, `/de/`). The `LocaleSwitcher` component handles switching. To add a new locale, extend the `Locale` type, add translations to the `translations` record, and update the `locales` array.

## Learn More

- [TanStack Start docs](https://tanstack.com/start)
- [TanStack Router docs](https://tanstack.com/router)
- [Tailwind CSS docs](https://tailwindcss.com/)
