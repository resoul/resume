import { jobs, t, type Lang } from '../data/resume'
import { Section } from './Section'

export function Experience({ lang }: { lang: Lang }) {
  const s = t[lang]
  return (
    <Section title={s.experience}>
      <div className="space-y-10 border-l pl-6">
        {jobs.map((j) => (
          <div key={j.company} className="print-avoid relative">
            <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-primary" />
            <p className="text-sm text-muted-foreground">
              {j.period[lang]} · {j.duration[lang]}
            </p>
            <h3 className="text-2xl">
              {j.role} <span className="text-primary">· {j.company}</span>
            </h3>
            <p className="text-sm text-muted-foreground">{j.area[lang]}</p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-accent">{s.achievements}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              {j.items[lang].map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
