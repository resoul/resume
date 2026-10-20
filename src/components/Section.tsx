import type { ReactNode } from 'react'

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-20">
      <h2 className="mb-8 text-3xl italic text-primary">{title}</h2>
      {children}
    </section>
  )
}
