import { useEffect, useState } from 'react'
import { Experience } from './components/Experience'
import { Header } from './components/Header'
import { Skills } from './components/Skills'
import { EMAIL, t, type Lang } from './data/resume'

function App() {
  const [lang, setLang] = useState<Lang>('uk')

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t[lang].title
  }, [lang])

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Header lang={lang} onLangChange={setLang} />
      <Experience lang={lang} />
      <Skills lang={lang} />
      <footer className="mt-24 border-t pt-8 text-sm text-muted-foreground">
        {EMAIL} · {t[lang].footer}
      </footer>
    </main>
  )
}

export default App
