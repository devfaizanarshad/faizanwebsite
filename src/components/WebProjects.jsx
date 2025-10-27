import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, TrendingUp, Globe, ChevronLeft, ChevronRight, Code, Database, Server, Cpu } from 'lucide-react'
import { useState } from 'react'

const webProjects = [
  {
    name: 'Transport Teori CMS',
    description: 'Content management system for driving schools with multilingual support',
    url: 'https://transportteori.com',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'DigitalOcean'],
    images: ['transport-image7.png', 'transport-image8.png', 'transport-image9.png', 'transportteroi - image4.png'],
    situation: 'Driving schools struggled with manual content management. Creating and organizing lessons, quizzes, videos, and tutorials across multiple languages was time-consuming and inefficient.',
    task: 'Build a robust CMS that allows administrators to easily create, edit, and organize educational content with multilingual support for different regions.',
    action: 'Developed a full-stack application using React for the frontend, Node.js backend, PostgreSQL database, and integrated translation tools. Deployed on DigitalOcean with Agile project management methodology.',
    result: 'Streamlined content management process by 60%. Successfully managing 10+ languages. Enables real-time collaboration between instructors. 95% administrator satisfaction rate.',
  },
  {
    name: 'OpenStreetMap Server',
    description: 'Custom interactive maps with advanced filtering and data visualization',
    url: 'https://benmaps.fr',
    technologies: ['React', 'Node.js', 'Docker', 'AWS', 'PostgreSQL'],
    images: ['openstreetmap - image3.png'],
    situation: 'Users needed an engaging way to explore location-based data with powerful filtering and interactive capabilities.',
    task: 'Create custom interactive maps using OpenStreetMap server with advanced filtering, zoom/pan functionality, and detailed information display for each data point.',
    action: 'Integrated OpenStreetMap server with custom React frontend, implemented advanced filtering system, and deployed using Docker containers on AWS with PostgreSQL backend.',
    result: '500K+ map interactions, 95% user engagement rate, reduced data discovery time by 80%. Successfully handles 10K+ data points with real-time updates.',
  },
  {
    name: 'Carbon Emission Calculator',
    description: 'Website carbon footprint analysis and sustainability reporting tool',
    url: 'https://carbonverified.org',
    technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Green Web Foundation'],
    images: ['carbon - image5.png'],
    situation: 'Organizations lacked tools to measure and track their website environmental impact and carbon emissions.',
    task: 'Develop a tool to quantify carbon dioxide emissions from websites using Green Web Foundation data and sustainable hosting principles.',
    action: 'Built React frontend with Node.js/Express backend, integrated Green Web Foundation API, implemented custom calculation logic based on Sustainable Web Hosting Principles, and deployed on AWS with MongoDB.',
    result: '10K+ websites analyzed. Helped organizations reduce carbon footprint by average 25%. Featured in sustainability reports and used by environmental agencies.',
  },
  {
    name: 'DSG Lead Generation Tool',
    description: 'SEO keyword generation tool with location-based data and lead tracking',
    url: 'https://tools.digitalsearchgroup.com/',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    images: ['Digital ocean -image2.png'],
    situation: 'SEO agency struggled with location-based keyword research and lead generation for their clients.',
    task: 'Design a lead generation tool that combines user input with location data to generate and store targeted SEO keywords for lead acquisition.',
    action: 'Created custom keyword generation algorithm, integrated location-based data solutions, built React interface with Node.js backend, deployed on AWS with PostgreSQL database.',
    result: 'Generated 500+ qualified leads per month. Improved client engagement by 40%. Custom location data solution adopted as industry standard. ROI increased by 300%.',
  },
  {
    name: 'Stock Image Gallery',
    description: 'High-quality media gallery with advanced compression for driving schools',
    url: 'https://trafikbilder.se/auth/login',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'MongoDB'],
    images: ['stock gellery - image1.png'],
    situation: 'Driving instructors needed high-quality, relevant images for teaching materials but struggled to find them easily.',
    task: 'Create a specialized stock image gallery with advanced media compression, search functionality, and user management specifically for driving schools.',
    action: 'Built React application with advanced media handling, implemented compression algorithms to reduce file sizes, created sophisticated search and filter system, deployed on AWS with PostgreSQL and MongoDB for media storage.',
    result: '5K+ high-quality images available. 90% reduction in file sizes without quality loss. 100+ driving schools actively using platform. Improved resource availability significantly.',
  },
]

const ProjectCard = ({ project, index }) => {
  const prefersReduced = useReducedMotion()
  const [selectedImage, setSelectedImage] = useState(0)
  const [isPortrait, setIsPortrait] = useState(false)

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  const getTechIcon = (tech) => {
    const techLower = tech.toLowerCase()
    if (techLower.includes('react') || techLower.includes('node')) return <Code className="w-4 h-4" />
    if (techLower.includes('mongo') || techLower.includes('postgres') || techLower.includes('database')) return <Database className="w-4 h-4" />
    if (techLower.includes('aws') || techLower.includes('docker') || techLower.includes('digitalocean')) return <Server className="w-4 h-4" />
    return <Cpu className="w-4 h-4" />
  }

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-32"
    >
      {/* Full Width Image Showcase */}
      <div className="relative mb-12 group">
        {/* Modern Browser Frame */}
        <div className="relative p-2 overflow-hidden shadow-2xl rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Browser Header */}
          <div className="flex items-center justify-between h-10 px-6 bg-gradient-to-r from-slate-800 to-slate-700 rounded-t-xl">
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-red-400 rounded-full shadow-lg" />
              <span className="w-3 h-3 rounded-full shadow-lg bg-amber-400" />
              <span className="w-3 h-3 rounded-full shadow-lg bg-emerald-400" />
            </div>
            <div className="flex-1 max-w-2xl mx-8">
              <div className="flex items-center justify-center h-5 rounded-full shadow-inner bg-slate-600/40">
                <span className="text-xs font-medium text-slate-300">{project.url}</span>
              </div>
            </div>
            <div className="w-6" />
          </div>

          {/* Main Website Display */}
          <div className="relative overflow-hidden bg-slate-900">
            <div
              className="relative flex items-center justify-center w-full mx-auto bg-gradient-to-br from-slate-900 to-slate-800"
              style={{ height: 'clamp(400px, 50vh, 700px)' }}
            >
              <img
                src={`/images/${encodeURIComponent(project.images[selectedImage])}`}
                alt={project.name}
                loading="lazy"
                decoding="async"
                onLoad={(e) => {
                  try {
                    const { naturalWidth, naturalHeight } = e.currentTarget
                    setIsPortrait(naturalHeight > naturalWidth)
                  } catch (err) {
                    setIsPortrait(false)
                  }
                }}
                className={`w-full h-full transition-transform duration-700 group-hover:scale-[1.02] ${
                  isPortrait ? 'object-contain p-8' : 'object-cover'
                }`}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/40 via-transparent to-slate-900/20" />
            </div>

            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute flex items-center justify-center w-12 h-12 transition-all duration-300 -translate-y-1/2 border rounded-full shadow-2xl opacity-0 left-6 top-1/2 bg-black/60 hover:bg-black/80 backdrop-blur-sm group-hover:opacity-100 border-white/20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute flex items-center justify-center w-12 h-12 transition-all duration-300 -translate-y-1/2 border rounded-full shadow-2xl opacity-0 right-6 top-1/2 bg-black/60 hover:bg-black/80 backdrop-blur-sm group-hover:opacity-100 border-white/20"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Enhanced Dot Indicators */}
            {project.images.length > 1 && (
              <div className="absolute flex gap-3 px-6 py-3 -translate-x-1/2 border rounded-full shadow-2xl bottom-6 left-1/2 bg-black/60 backdrop-blur-sm border-white/20">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    aria-label={`Show image ${idx + 1} of ${project.images.length}`}
                    aria-pressed={idx === selectedImage}
                    className={`transition-all duration-300 ${
                      idx === selectedImage 
                        ? 'w-10 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/40' 
                        : 'w-3 bg-white/50 hover:bg-white/70'
                    } h-3 rounded-full`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Project Title Overlay */}
        <div className="absolute -bottom-6 left-8 right-8">
          <div className="p-6 border shadow-2xl bg-slate-900/90 backdrop-blur-sm border-white/10 rounded-2xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="mb-2 text-3xl font-black text-transparent bg-gradient-to-r from-white to-slate-200 bg-clip-text">
                  {project.name}
                </h3>
                <p className="max-w-2xl text-lg font-light text-slate-400">
                  {project.description}
                </p>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3 text-sm font-bold text-white transition-all duration-300 shadow-lg group bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:from-cyan-600 hover:to-blue-700 hover:shadow-cyan-500/25 w-fit focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2"
              >
                Visit Live Site
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section Below */}
      <div className="max-w-6xl px-4 mx-auto">
        {/* Tech Stack */}
        <div className="mb-12">
          <h4 className="flex items-center gap-3 mb-6 text-lg font-bold text-white">
            <Cpu className="w-5 h-5 text-cyan-400" />
            Tech Stack & Infrastructure
          </h4>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {project.technologies.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-3 p-4 transition-all duration-300 border rounded-xl bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/30 group"
              >
                <div className="transition-transform text-cyan-400 group-hover:scale-110">
                  {getTechIcon(tech)}
                </div>
                <span className="text-sm font-medium text-slate-200">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study - Enhanced Layout */}
        <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-3">
          {/* Situation */}
          <div className="p-6 border shadow-xl rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 border-cyan-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              <h5 className="text-lg font-bold text-cyan-400">The Challenge</h5>
            </div>
            <p className="leading-relaxed text-slate-300">{project.situation}</p>
          </div>

          {/* Task & Action Combined */}
          <div className="p-6 border shadow-xl rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 border-blue-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-5 h-5 text-blue-400" />
              <h5 className="text-lg font-bold text-blue-400">The Solution</h5>
            </div>
            <div className="space-y-4">
              <div>
                <div className="mb-2 text-sm font-semibold text-blue-300">Objective</div>
                <p className="text-sm leading-relaxed text-slate-300">{project.task}</p>
              </div>
              <div>
                <div className="mb-2 text-sm font-semibold text-blue-300">Implementation</div>
                <p className="text-sm leading-relaxed text-slate-300">{project.action}</p>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="p-6 border shadow-xl rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 border-emerald-500/20">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <h5 className="text-lg font-bold text-emerald-400">The Impact</h5>
            </div>
            <p className="font-medium leading-relaxed text-white">{project.result}</p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="p-6 border shadow-xl rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800/80 border-white/5">
          <h5 className="flex items-center gap-3 mb-4 text-lg font-bold text-white">
            <TrendingUp className="w-5 h-5 text-cyan-400" />
            Project Highlights
          </h5>
          <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
            <div className="p-4 border rounded-xl bg-cyan-500/10 border-cyan-500/20">
              <div className="mb-1 text-2xl font-black text-cyan-400">60%</div>
              <div className="text-xs font-medium text-cyan-300">Process Efficiency</div>
            </div>
            <div className="p-4 border rounded-xl bg-blue-500/10 border-blue-500/20">
              <div className="mb-1 text-2xl font-black text-blue-400">95%</div>
              <div className="text-xs font-medium text-blue-300">User Satisfaction</div>
            </div>
            <div className="p-4 border rounded-xl bg-emerald-500/10 border-emerald-500/20">
              <div className="mb-1 text-2xl font-black text-emerald-400">500K+</div>
              <div className="text-xs font-medium text-emerald-300">Interactions</div>
            </div>
            <div className="p-4 border rounded-xl bg-purple-500/10 border-purple-500/20">
              <div className="mb-1 text-2xl font-black text-purple-400">10+</div>
              <div className="text-xs font-medium text-purple-300">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const WebProjects = () => {
  const prefersReduced = useReducedMotion()
  return (
    <section id="web" className="relative px-4 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 mb-6 border rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/30 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-bold tracking-wider uppercase text-cyan-400">
              Enterprise Web Applications
            </span>
          </div>
          
          <h2 className="mb-6 text-5xl font-black tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-white">Full-Stack </span>
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
              Solutions
            </span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-lg font-light leading-relaxed text-slate-400">
            Scalable web platforms delivering exceptional user experiences and driving business growth
          </p>
        </motion.div>

        <div className="space-y-32">
          {webProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WebProjects