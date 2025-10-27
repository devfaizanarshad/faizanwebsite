import { motion, AnimatePresence } from 'framer-motion'
import { Home, Code, Smartphone, Globe, Mail, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const navItems = [
  { name: 'Home', icon: Home, id: 'hero' },
  { name: 'Services', icon: Code, id: 'services' },
  { name: 'Work', icon: Smartphone, id: 'mobile' },
  { name: 'Contact', icon: Mail, id: 'contact' },
]

const LeftNav = ({ isScrolled }) => {
  const [activeItem, setActiveItem] = useState('hero')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Desktop Navigation - Hidden on mobile */}
      <nav className="fixed left-0 top-0 bottom-0 w-20 hidden lg:flex flex-col items-center py-8 border-r border-white/10 bg-slate-950/50 backdrop-blur-xl z-50">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-12"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
            <span className="text-xl font-black text-white">S</span>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex-1 space-y-6">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeItem === item.id
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-12 h-12 flex items-center justify-center rounded-xl transition-all ${
                  isActive 
                    ? 'bg-cyan-500/20 text-cyan-400' 
                    : 'text-slate-500 hover:text-white hover:bg-white/5'
                }`}
                title={item.name}
                aria-label={item.name}
              >
                <Icon className="w-5 h-5" />
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-cyan-500/10 rounded-xl"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-semibold text-sm"
          title="Get in touch"
          aria-label="Get in touch"
        >
          <Mail className="w-5 h-5" />
        </motion.a>
      </nav>

      {/* Mobile Header - Visible only on mobile */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b lg:hidden border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500">
            <span className="text-xl font-black text-white">S</span>
          </div>
          <span className="text-lg font-bold text-white">Survtyx</span>
        </div>
        
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-lg text-white bg-white/5 hover:bg-white/10"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 px-8">
              {navItems.map((item, index) => {
                const Icon = item.icon
                const isActive = activeItem === item.id
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center gap-4 px-8 py-4 rounded-xl transition-all w-full max-w-sm ${
                      isActive 
                        ? 'bg-cyan-500/20 text-cyan-400' 
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-xl font-semibold">{item.name}</span>
                  </motion.button>
                )
              })}
              
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full gap-3 px-8 py-4 mt-4 text-lg font-semibold text-white transition-all rounded-xl max-w-sm bg-gradient-to-br from-cyan-400 to-blue-500"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default LeftNav
