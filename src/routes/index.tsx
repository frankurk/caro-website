import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Portfolio })

function Portfolio() {
  return (
    <div className="relative min-h-screen">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed -right-32 -top-32 h-[50vw] w-[50vw] rounded-full bg-[radial-gradient(circle,rgba(200,184,154,0.035),transparent_70%)]" />

      <main className="relative mx-auto max-w-2xl px-6 py-20 sm:px-10 sm:py-32 lg:py-40">
        {/* Hero */}
        <section className="reveal">
          {/* Photo */}
          <div className="mb-14 flex justify-center sm:mb-16 sm:justify-start">
            <div className="photo-glow relative h-52 w-52 overflow-hidden rounded-sm sm:h-64 sm:w-64">
              <div className="flex h-full w-full items-center justify-center bg-stone-900 text-[11px] tracking-[0.25em] text-stone-600 uppercase">
                Photo
              </div>
            </div>
          </div>

          {/* Name & Occupation */}
          <div className="mb-10">
            <p
              className="mb-4 text-[10px] tracking-[0.35em] text-stone-500 uppercase"
              style={{ animationDelay: '100ms' }}
            >
              Portfolio
            </p>
            <h1
              className="font-display text-5xl font-light leading-[1.05] tracking-tight text-stone-100 sm:text-7xl"
              style={{ animationDelay: '200ms' }}
            >
              Your Name
            </h1>
            <p
              className="mt-3 text-base font-medium text-warm"
              style={{ animationDelay: '300ms' }}
            >
              Your Occupation — e.g. Creative Developer
            </p>
          </div>

          {/* Description */}
          <p
            className="max-w-lg text-[15px] leading-[1.75] text-stone-400"
            style={{ animationDelay: '400ms' }}
          >
            A short description about yourself. Two or three sentences that
            capture who you are, what you do, and what drives you. Keep it
            genuine and direct.
          </p>
        </section>

        {/* Divider */}
        <div className="hairline my-16" />

        {/* About / Background */}
        <section className="reveal" style={{ animationDelay: '150ms' }}>
          <p className="mb-5 text-[10px] tracking-[0.35em] text-stone-600 uppercase">
            About
          </p>
          <div className="space-y-4 text-[15px] leading-[1.8] text-stone-400">
            <p>
              Write a longer bio here. Share your background, what you've built,
              and what you're working on now. Let your voice come through — this
              is the section where people decide they want to know more.
            </p>
            <p>
              Second paragraph if you need it. Talk about your approach to work,
              your values, or something that makes you different from everyone
              else.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="hairline my-16" />

        {/* Contact */}
        <section className="reveal" style={{ animationDelay: '200ms' }}>
          <p className="mb-5 text-[10px] tracking-[0.35em] text-stone-600 uppercase">
            Contact
          </p>

          <div className="space-y-3">
            <a
              href="mailto:your.email@example.com"
              className="group inline-flex items-baseline gap-2 text-[15px] text-stone-300 transition-colors duration-200 hover:text-warm"
            >
              <span className="font-display text-xl italic text-warm/60">
                →
              </span>
              your.email@example.com
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

        <footer className="reveal text-[11px] text-stone-600" style={{ animationDelay: '250ms' }}>
          <p className="tracking-[0.15em] uppercase">
            © {new Date().getFullYear()} Your Name
          </p>
        </footer>
      </main>
    </div>
  )
}
