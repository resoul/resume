import { EMAIL, t, type Lang } from '../data/resume'

const LANGS: Lang[] = ['uk', 'en']

type Props = { lang: Lang; onLangChange: (lang: Lang) => void }

export function Header({ lang, onLangChange }: Props) {
  const s = t[lang]
  return (
    <header>
      <div className="flex items-center justify-between">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">{s.label}</p>
        <div className="no-print flex rounded-full border p-1 text-sm">
          {LANGS.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => onLangChange(l)}
              className={`rounded-full px-3 py-1 font-semibold transition ${lang === l ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-primary'}`}
            >
              {l === 'uk' ? 'UA' : 'EN'}
            </button>
          ))}
        </div>
      </div>
      <h1 className="mt-4 text-6xl font-light leading-tight md:text-7xl">
        {s.first} <span className="italic text-primary">{s.last}</span>
      </h1>
      <p className="mt-2 text-lg text-accent">Full Stack Developer</p>
      <p className="mt-6 text-xl text-muted-foreground">{s.intro}</p>
      <div className="no-print mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-full border px-6 py-3 font-semibold transition hover:border-primary hover:text-primary"
        >
          {s.pdf}
        </button>
        <a
          href={`mailto:${EMAIL}`}
          className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-accent"
        >
          {s.contact}
        </a>
      </div>
    </header>
  )
}
