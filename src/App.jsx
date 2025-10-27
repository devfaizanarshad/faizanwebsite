import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import Hero from './components/Hero'
import Services from './components/Services'
import WebProjects from './components/WebProjects'
import TechStack from './components/TechStack'
import MobileProjects from './components/MobileProjects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import LeftNav from './components/LeftNav'

function App() {
  const { scrollYProgress } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative flex min-h-screen bg-slate-950">
      <LeftNav isScrolled={isScrolled} />
      
      <main className="flex-1 lg:ml-20 pt-20 lg:pt-0">
  <Hero />
  <Services />
  <TechStack />
  <MobileProjects />
  <WebProjects />
  <Testimonials />
        <Contact />
        
        <footer className="relative px-16 py-20 text-center border-t border-white/5">
          <p className="text-sm text-slate-400">© 2024 Survtyx</p>
        </footer>
      </main>
    </div>
  )
}

export default App
