import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiNodedotjs, 
  SiTypescript, 
  SiPostgresql, 
  SiMongodb,
  SiAmazonaws,
  SiDocker,
  SiExpress,
  SiGraphql,
  SiVite,
  SiFlutter,
  SiReactquery
} from 'react-icons/si'

const technologies = [
  { name: 'React', icon: SiReact, category: 'Frontend' },
  { name: 'React Native', icon: SiReact, category: 'Mobile' },
  { name: 'Flutter', icon: SiFlutter, category: 'Mobile' },
  { name: 'Node.js', icon: SiNodedotjs, category: 'Backend' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Language' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Database' },
  { name: 'AWS', icon: SiAmazonaws, category: 'Cloud' },
  { name: 'Docker', icon: SiDocker, category: 'DevOps' },
  { name: 'Express', icon: SiExpress, category: 'Backend' },
  { name: 'GraphQL', icon: SiGraphql, category: 'API' },
  { name: 'Vite', icon: SiVite, category: 'Tooling' },
]

const TechStack = () => {
  return (
    <section id="tech" className="py-32 px-16 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
              Technology Stack
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            <span className="text-white">Built With </span>
            <span className="text-gradient">Modern Tools</span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            We use industry-leading technologies to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group p-6 rounded-xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all text-center"
              >
                <div className="flex justify-center mb-3">
                  <IconComponent className="w-8 h-8 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">
                  {tech.name}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechStack