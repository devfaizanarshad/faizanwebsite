import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const mobileProjects = [
  {
    name: 'Attendy',
    description: 'AI-powered attendance tracking',
    deployed: true,
    googlePlay: 'https://play.google.com/store/apps/details?id=com.attendy.app',
    appleStore: 'https://apps.apple.com/app/attendy',
    images: ['Attendy - image4.png', 'Attendy - image5.png', 'Attendy - image7.png'],
    situation: 'Educational institutions faced inaccurate attendance records and wasted hours on manual tracking.',
    task: 'Build an automated system using AI facial recognition and location verification.',
    action: 'Developed React Native app with real-time sync, offline mode, and analytics dashboard.',
    result: '10K+ downloads, saves 20 hours/week, 98% accuracy, featured on App Store.',
    stats: {
      downloads: '10K+',
      rating: '4.8★'
    }
  },
  {
    name: 'DocTok',
    description: 'Video consultation platform',
    deployed: true,
    googlePlay: 'https://play.google.com/store/apps/details?id=com.doctok.app',
    images: ['DocTok - image10.jpg', 'DocTok - image11.jpg', 'DocTok - image12.jpg'],
    situation: 'Patients waited weeks for appointments. Healthcare was inaccessible in remote areas.',
    task: 'Create secure video consultation platform with e-prescription capabilities.',
    action: 'Built React Native app with end-to-end encryption, payment integration, and prescription management.',
    result: '500+ doctors onboarded, 10K consultations/month, 85% patient satisfaction, 90% reduced wait times.',
    stats: {
      doctors: '500+',
      consultations: '10K/m'
    }
  },
  {
    name: 'Healthwire',
    description: 'Medicine delivery and doctor booking',
    deployed: true,
    appleStore: 'https://apps.apple.com/app/healthwire',
    images: ['Healthwire-image13.jpg', 'Healthwire-image14.jpg', 'Healthwire-image15.jpg'],
    situation: 'Finding doctors and getting medications delivered was time-consuming.',
    task: 'Build all-in-one healthcare app combining doctor booking, pharmacy network, and health records.',
    action: 'Developed iOS app with integrated pharmacy network and appointment scheduling.',
    result: 'Top 10 health app, 100K+ users, 300% revenue increase for partners, 4.8★ rating.',
    stats: {
      users: '100K+',
      rating: '4.8★'
    }
  },
  {
    name: 'TransportTeorri',
    description: 'Driving license learning platform',
    deployed: false,
    images: ['TransportTeorri - Driving Licence App - image1.png', 'TransportTeorri - Driving Licence App- image2.png', 'TransportTeorri - Driving Licence App - image3.png'],
    situation: 'Driving schools used outdated methods with limited practice opportunities.',
    task: 'Create interactive learning platform with multilingual support and practice tests.',
    action: 'Built React Native app with gamified learning and progress tracking.',
    result: 'Beta shows 95% pass rate improvement, 40% faster completion.',
    stats: null // No stats for unreleased app
  },
]

const ProjectCard = ({ project, index }) => {
  const prefersReduced = useReducedMotion()
  const [selectedImage, setSelectedImage] = useState(0)

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      className="relative mb-32"
    >
      <div className="grid items-center grid-cols-1 gap-12 xl:grid-cols-2">
        
        {/* Phone Mockup */}
        <motion.div
          initial={prefersReduced ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.15 + 0.1 }}
          className="relative"
        >
          <div className="relative max-w-sm mx-auto">
            {/* Phone Container */}
            <div className="relative bg-slate-900 rounded-[3rem] p-6 border-2 border-white/10 shadow-2xl">
              <div className="relative bg-black rounded-[2rem] overflow-hidden aspect-[9/19]">
                <motion.img
                  key={selectedImage}
                  src={`/images/${encodeURIComponent(project.images[selectedImage])}`}
                  alt={project.name}
                  loading="lazy"
                  decoding="async"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="object-cover w-full h-full"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                
                {/* Navigation */}
                {project.images.length > 1 && (
                  <>
                    <motion.button
                      onClick={prevImage}
                      className="absolute flex items-center justify-center w-8 h-8 -translate-y-1/2 border rounded-full left-2 top-1/2 bg-black/60 backdrop-blur-sm border-white/20"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4 text-white" />
                    </motion.button>
                    <motion.button
                      onClick={nextImage}
                      className="absolute flex items-center justify-center w-8 h-8 -translate-y-1/2 border rounded-full right-2 top-1/2 bg-black/60 backdrop-blur-sm border-white/20"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4 text-white" />
                    </motion.button>
                  </>
                )}

                {/* Dots */}
                {project.images.length > 1 && (
                  <div className="absolute flex gap-2 -translate-x-1/2 bottom-4 left-1/2">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === selectedImage ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/50'
                        }`}
                        aria-label={`View image ${idx + 1}`}
                        aria-current={idx === selectedImage}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Stats - Only show for deployed apps */}
            {project.stats && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  className="absolute p-4 border shadow-2xl -right-8 top-8 bg-slate-900/90 backdrop-blur-sm border-cyan-500/20 rounded-2xl"
                >
                  <div className="text-2xl font-black text-cyan-400">
                    {Object.values(project.stats)[0]}
                  </div>
                  <div className="text-xs text-slate-400">
                    {Object.keys(project.stats)[0]}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                  className="absolute p-4 border shadow-2xl -left-8 bottom-8 bg-slate-900/90 backdrop-blur-sm border-emerald-500/20 rounded-2xl"
                >
                  <div className="text-2xl font-black text-emerald-400">
                    {Object.values(project.stats)[1]}
                  </div>
                  <div className="text-xs text-slate-400">
                    {Object.keys(project.stats)[1]}
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={prefersReduced ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.15 + 0.2 }}
          className="space-y-6"
        >
          <div>
            <motion.h3 
              className="mb-3 text-4xl font-black text-white"
              whileHover={{ scale: 1.02 }}
            >
              {project.name}
            </motion.h3>
            <p className="mb-6 text-xl text-slate-400">{project.description}</p>
          </div>

          {/* Case Study */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 border rounded-xl bg-slate-900/80 border-cyan-500/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <div className="text-sm font-bold tracking-wider uppercase text-cyan-400">Situation</div>
              </div>
              <p className="leading-relaxed text-slate-300">{project.situation}</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 border rounded-xl bg-slate-900/80 border-blue-500/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <div className="text-sm font-bold tracking-wider text-blue-400 uppercase">Action</div>
              </div>
              <p className="leading-relaxed text-slate-300">{project.action}</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 border rounded-xl bg-slate-900/80 border-emerald-500/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <div className="text-sm font-bold tracking-wider uppercase text-emerald-400">Result</div>
              </div>
              <p className="font-medium leading-relaxed text-white">{project.result}</p>
            </motion.div>
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.5 }}
            className="flex gap-4 pt-4"
          >
            {project.deployed ? (
              <>
                {project.googlePlay && (
                  <motion.a
                    href={project.googlePlay}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center flex-1 gap-3 px-8 py-4 text-sm font-medium transition-all border rounded-lg bg-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Google Play
                  </motion.a>
                )}
                {project.appleStore && (
                  <motion.a
                    href={project.appleStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center flex-1 gap-3 px-8 py-4 text-sm font-medium text-blue-400 transition-all border rounded-lg bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    App Store
                  </motion.a>
                )}
              </>
            ) : (
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-center flex-1 px-8 py-4 text-sm font-medium rounded-lg bg-slate-800 text-slate-400"
              >
                Coming Soon
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

const MobileProjects = () => {
  const prefersReduced = useReducedMotion()
  
  return (
    <section id="mobile" className="relative px-4 py-32 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
          >
            <span className="text-xs font-medium tracking-wider uppercase text-cyan-400">
              Portfolio
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 text-5xl font-black tracking-tight md:text-7xl"
          >
            <span className="text-white">Our </span>
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
              Work
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto text-xl font-light text-slate-400"
          >
            Innovative mobile applications transforming industries and user experiences
          </motion.p>
        </motion.div>

        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12 text-3xl font-bold text-center text-white"
          >
            Mobile Applications
          </motion.h3>
          
          <div className="space-y-32">
            {mobileProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileProjects