import { skillGroups, t, type Lang } from '../data/resume'
import { Section } from './Section'

export function Skills({ lang }: { lang: Lang }) {
  return (
    <Section title={t[lang].skills}>
      <div className="space-y-6">
        {skillGroups.map((g) => (
          <div key={g.title.en} className="print-avoid">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">{g.title[lang]}</p>
            <div className="flex flex-wrap gap-2">
              {g.items.map((k) => (
                <span key={k} className="rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground">
                  {k}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
