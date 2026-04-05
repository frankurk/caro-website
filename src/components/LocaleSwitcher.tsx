import { Link } from '@tanstack/react-router'
import { locales } from '#/i18n'

export default function LocaleSwitcher() {
  return (
    <div className="flex items-center gap-1" aria-label="Language">
      {locales.map((locale) => (
        <Link
          key={locale}
          to="/{-$locale}"
          params={{ locale: locale === 'en' ? undefined : locale }}
          className="rounded-sm px-2.5 py-1 text-[11px] tracking-[0.2em] uppercase text-stone-600 transition-colors duration-200 hover:text-stone-300"
          activeProps={{ className: '!bg-stone-800 !text-warm font-semibold' }}
        >
          {locale}
        </Link>
      ))}
    </div>
  )
}
