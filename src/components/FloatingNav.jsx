import { motion } from 'framer-motion'
import { Home, Code, Smartphone, Globe, Wrench, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

const navItems = [
  { name: 'Home', icon: Home, id: 'hero' },
  { name: 'Services', icon: Code, id: 'services' },
  { name: 'Mobile', icon: Smartphone, id: 'mobile' },
  { name: 'Web', icon: Globe, id: 'web' },
  { name: 'Tech', icon: Wrench, id: 'tech' },
  { name: 'Contact', icon: Mail, id: 'contact' },
]

const FloatingNav = () => {
  const [activeItem, setActiveItem] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 200

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveItem(navItems[index].id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 px-4 py-3 glass rounded-2xl border border-slate-200/50 shadow-2xl backdrop-blur-2xl">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.id
          return (
            <motion.button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative px-4 py-3 rounded-xl transition-all duration-300 group ${
                isActive ? 'bg-gradient-to-r from-amber-500 to-amber-600' : ''
              }`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-600 group-hover:text-amber-600'}`} />
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          )
        })}
      </div>
    </motion.nav>
  )
}

export default FloatingNav
