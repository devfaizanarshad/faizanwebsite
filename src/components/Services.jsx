import { motion } from 'framer-motion'
import { Smartphone, Globe, Brain, Cloud, Code, Shield } from 'lucide-react'

const services = [
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'iOS and Android apps with React Native and Flutter',
    features: ['Cross-platform development', 'App Store optimization', 'Push notifications', 'Performance monitoring'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Responsive web applications built to scale',
    features: ['Frontend frameworks', 'Backend APIs', 'Database design', 'Security implementation'],
  },
  {
    icon: Brain,
    title: 'AI Features',
    description: 'Intelligent automation and predictive analytics',
    features: ['Machine learning integration', 'Chatbot development', 'Recommendation systems', 'Data analysis'],
  },
  {
    icon: Code,
    title: 'Full-Stack Services',
    description: 'Complete solutions from frontend to infrastructure',
    features: ['Architecture design', 'API development', 'Cloud deployment', 'CI/CD pipelines'],
  },
  {
    icon: Cloud,
    title: 'Infrastructure',
    description: 'Scalable cloud architecture and DevOps',
    features: ['AWS services', 'Docker containers', 'Load balancing', 'Monitoring tools'],
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Enterprise-grade protection and compliance',
    features: ['Data encryption', 'GDPR compliance', 'Security audits', 'Penetration testing'],
  },
]

const Services = () => {
  return (
    <section id="services" className="relative px-16 py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <span className="text-xs font-medium tracking-wider uppercase text-cyan-400">
              Services
            </span>
          </div>

          <h2 className="mb-8 text-5xl font-black tracking-tight md:text-7xl">
            <span className="text-white">What We </span>
            <span className="text-gradient">Build</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-xl font-light text-slate-400">
            Full-stack development services for modern businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
                className="p-8 transition-all duration-300 border group rounded-2xl bg-slate-900/50 border-white/5 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <motion.div 
                  className="inline-flex p-3 mb-6 transition-colors rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon className="w-6 h-6 text-cyan-400" />
                </motion.div>
                
                <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
                  {service.title}
                </h3>
                
                <p className="mb-6 leading-relaxed transition-colors text-slate-400 group-hover:text-slate-300">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + idx * 0.1 }}
                      className="flex items-center gap-3 text-sm transition-colors text-slate-500 group-hover:text-slate-400"
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                        whileHover={{ scale: 1.5 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services