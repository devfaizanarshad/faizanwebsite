import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const prefersReduced = useReducedMotion()

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="relative z-10 max-w-5xl px-16 mx-auto text-center">
        <motion.div
          initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8">
            <span className="text-xs font-medium tracking-wider uppercase text-cyan-400">
              Web & Mobile Development
            </span>
          </div>

          <h1 className="mb-8 font-black leading-tight tracking-tight text-7xl md:text-8xl">
            <span className="text-white">Ship </span>
            <span className="text-gradient">faster.</span>
            <br />
            <span className="text-white">Build </span>
            <span className="text-gradient-2">better.</span>
          </h1>

          <p className="max-w-3xl mx-auto mb-12 text-xl font-light leading-relaxed md:text-2xl text-slate-400">
            We build web and mobile applications for businesses.
            <br />
            Fast delivery. Clean code. Real impact.
          </p>
        </motion.div>

        <motion.div
          initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all group rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-focus:translate-x-1" />
          </motion.a>

          <motion.a
            href="#mobile"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 font-semibold text-white transition-all border rounded-xl border-white/10 hover:border-cyan-500/50"
          >
            View Work
          </motion.a>
        </motion.div>

        <motion.div
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="grid max-w-3xl grid-cols-3 gap-8 mx-auto mt-20 text-center"
        >
          <div>
            <div className="mb-1 text-3xl font-black text-gradient">12+</div>
            <div className="text-xs tracking-wider uppercase text-slate-500">Projects</div>
          </div>
          <div>
            <div className="mb-1 text-3xl font-black text-gradient">2-4</div>
            <div className="text-xs tracking-wider uppercase text-slate-500">Week Delivery</div>
          </div>
          <div>
            <div className="mb-1 text-3xl font-black text-gradient">100%</div>
            <div className="text-xs tracking-wider uppercase text-slate-500">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
