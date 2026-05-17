import { useEffect, useState } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Impact } from './components/Impact'
import { DefectExamples } from './components/DefectExamples'
import { MiniCV } from './components/MiniCV'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function AppContent() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Impact />
        <DefectExamples />
        <MiniCV />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
