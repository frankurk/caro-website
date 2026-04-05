import { createFileRoute, redirect } from '@tanstack/react-router'
import type { Locale } from '#/i18n'
import { locales, t } from '#/i18n'
import { setPrerenderLocale } from '#/routes/__root'
import LocaleSwitcher from '#/components/LocaleSwitcher'

const name = 'Francisca Caro'
const email = 'francisca@caro.cl'

export const Route = createFileRoute('/{-$locale}/')({
  beforeLoad: ({ params }) => {
    const locale = (params.locale || 'en') as Locale
    if (!locales.includes(locale)) {
      throw redirect({ href: '/', replace: true })
    }
    setPrerenderLocale(locale)
    return { locale }
  },
  head: ({ params }) => {
    const locale = (params.locale || 'en') as Locale
    const tr = t(locale)
    return {
      meta: [
        { charSet: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { title: `${name} — ${tr.portfolioLabel}` },
        { name: 'description', content: tr.heroDescription.slice(0, 150) },
      ],
      htmlAttrs: { lang: locale },
      links: [],
    }
  },
  component: Portfolio,
})

function Portfolio() {
  const { locale } = Route.useRouteContext()
  const tr = t(locale as Locale)

  return (
    <div className="relative min-h-screen">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed -right-32 -top-32 h-[50vw] w-[50vw] rounded-full bg-[radial-gradient(circle,rgba(200,184,154,0.035),transparent_70%)]" />

      {/* Locale Switcher — top right */}
      <div className="fixed right-6 top-5 z-50 sm:right-10">
        <LocaleSwitcher />
      </div>

      <main className="relative mx-auto max-w-2xl px-6 py-20 sm:px-10 sm:py-32 lg:py-40">
        {/* Hero */}
        <section className="reveal">
          <div className="mb-14 flex justify-center sm:mb-16 sm:justify-start">
            <div className="photo-glow relative h-52 w-52 overflow-hidden rounded-sm sm:h-64 sm:w-64">
              <div className="flex h-full w-full items-center justify-center bg-stone-900 text-[11px] tracking-[0.25em] text-stone-600 uppercase">
                {tr.photoPlaceholder}
              </div>
            </div>
          </div>

          <div className="mb-10">
            <p
              className="mb-4 text-[10px] tracking-[0.35em] text-stone-500 uppercase"
              style={{ animationDelay: '100ms' }}
            >
              {tr.portfolioLabel}
            </p>
            <h1
              className="font-display text-5xl font-light leading-[1.05] tracking-tight text-stone-100 sm:text-7xl"
              style={{ animationDelay: '200ms' }}
            >
              {name}
            </h1>
            <p
              className="mt-3 text-base font-medium text-warm"
              style={{ animationDelay: '300ms' }}
            >
              {tr.heroOccupation}
            </p>
          </div>

          <p
            className="max-w-lg text-[15px] leading-[1.75] text-stone-400"
            style={{ animationDelay: '400ms' }}
          >
            {tr.heroDescription}
          </p>
        </section>

        {/* Divider */}
        <div className="hairline my-16" />

        {/* About */}
        <section className="reveal" style={{ animationDelay: '150ms' }}>
          <p className="mb-5 text-[10px] tracking-[0.35em] text-stone-600 uppercase">
            {tr.aboutLabel}
          </p>
          <div className="space-y-4 text-[15px] leading-[1.8] text-stone-400">
            <p>{tr.aboutParagraph1}</p>
            <p>{tr.aboutParagraph2}</p>
          </div>
        </section>

        {/* Divider */}
        <div className="hairline my-16" />

        {/* Contact */}
        <section className="reveal" style={{ animationDelay: '200ms' }}>
          <p className="mb-5 text-[10px] tracking-[0.35em] text-stone-600 uppercase">
            {tr.contactLabel}
          </p>

          <div className="space-y-3">
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-baseline gap-2 text-[15px] text-stone-300 transition-colors duration-200 hover:text-warm"
            >
              <span className="font-display text-xl italic text-warm/60">
                →
              </span>
              {email}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-[13px] tracking-[0.15em] text-stone-500 uppercase transition-colors duration-200 hover:text-warm"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-[13px] tracking-[0.15em] text-stone-500 uppercase transition-colors duration-200 hover:text-warm"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-[13px] tracking-[0.15em] text-stone-500 uppercase transition-colors duration-200 hover:text-warm"
            >
              X
            </a>
          </div>
        </section>

        {/* Footer mark */}
        <div className="hairline my-16" />

        <footer
          className="reveal text-[11px] text-stone-600"
          style={{ animationDelay: '250ms' }}
        >
          <p className="tracking-[0.15em] uppercase">
            © {new Date().getFullYear()} {name}
          </p>
        </footer>
      </main>
    </div>
  )
}
