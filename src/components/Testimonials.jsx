import { motion } from 'framer-motion'
import { Star, Quote, ArrowRight, ArrowLeft } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    content: 'The healthcare platform they built for us revolutionized our patient care. We went from managing 50 consultations daily to 500+ without adding staff. The ROI was immediate.',
    metrics: '10x patient capacity',
    category: 'Healthcare',
    project: 'Telemedicine Platform'
  },
  {
    content: 'Our attendance tracking was a nightmare until they automated everything. The AI recognition system is 98% accurate and saved our administration 400+ hours monthly.',
    metrics: '98% accuracy rate',
    category: 'Education',
    project: 'Attendance System'
  },
  {
    content: 'The medicine delivery app they developed increased our orders by 300% in 6 months. The real-time tracking and prescription management are exactly what customers needed.',
    metrics: '300% growth in 6 months',
    category: 'E-commerce',
    project: 'Delivery Platform'
  },
  {
    content: 'They transformed our driving school management. Student pass rates improved by 95% and we reduced administrative work by 60%. The multilingual support is fantastic.',
    metrics: '95% pass rate improvement',
    category: 'Education',
    project: 'Learning Platform'
  },
  {
    content: 'The carbon calculator they built helped us track and reduce our environmental impact by 25%. Our sustainability reports are now data-driven and credible.',
    metrics: '25% carbon reduction',
    category: 'Sustainability',
    project: 'Analytics Tool'
  },
  {
    content: 'Our SEO lead generation tool they created generates 500+ qualified leads monthly. The location-based targeting increased our client engagement by 40%.',
    metrics: '500+ leads/month',
    category: 'Marketing',
    project: 'SEO Tool'
  },
  {
    content: 'The stock image gallery for driving schools saved our instructors hours of preparation time. The advanced compression reduced file sizes by 90% without quality loss.',
    metrics: '90% file size reduction',
    category: 'Media',
    project: 'Media Platform'
  },
  {
    content: 'Their custom mapping solution helped us visualize 10K+ data points with real-time updates. User engagement increased by 95% and data discovery time reduced by 80%.',
    metrics: '95% engagement rate',
    category: 'Technology',
    project: 'Mapping System'
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative px-4 py-32 overflow-hidden sm:px-8 lg:px-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute rounded-full top-20 left-20 w-96 h-96 bg-cyan-500/5 blur-3xl animate-pulse" />
        <div className="absolute rounded-full bottom-20 right-20 w-96 h-96 bg-blue-500/5 blur-3xl animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <span className="text-xs font-medium tracking-wider uppercase text-cyan-400">
              Client Success Stories
            </span>
          </div>

          <h2 className="mb-8 text-5xl font-black tracking-tight md:text-7xl">
            <span className="text-white">What Clients </span>
            <span className="text-gradient">Say</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-slate-400">
            Real results from businesses we've helped transform
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div 
          className="relative mb-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute z-20 flex items-center justify-center w-12 h-12 transition-all -translate-y-1/2 border rounded-full left-4 top-1/2 bg-slate-900/80 border-white/10 hover:bg-slate-800 backdrop-blur-sm"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute z-20 flex items-center justify-center w-12 h-12 transition-all -translate-y-1/2 border rounded-full right-4 top-1/2 bg-slate-900/80 border-white/10 hover:bg-slate-800 backdrop-blur-sm"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </button>

          {/* Main Testimonial */}
          <div className="relative h-96">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, x: 100 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                  scale: index === currentIndex ? 1 : 0.9,
                  x: index === currentIndex ? 0 : 100
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${
                  index === currentIndex ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
              >
                <div className="max-w-4xl mx-auto text-center">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="inline-flex p-4 mb-8 border rounded-2xl bg-cyan-500/10 border-cyan-500/20"
                  >
                    <Quote className="w-8 h-8 text-cyan-400" />
                  </motion.div>

                  {/* Stars */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center gap-1 mb-8"
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Content */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-3xl mx-auto mb-8 text-2xl italic font-light leading-relaxed md:text-3xl text-slate-300"
                  >
                    "{testimonial.content}"
                  </motion.p>

                  {/* Metrics & Category */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col items-center justify-center gap-6 sm:flex-row"
                  >
                    <div className="px-4 py-2 border rounded-full bg-cyan-500/10 border-cyan-500/20">
                      <span className="text-lg font-semibold text-cyan-400">{testimonial.metrics}</span>
                    </div>
                    <div className="px-4 py-2 border rounded-full bg-slate-800/50 border-white/5">
                      <span className="text-sm tracking-wider uppercase text-slate-400">{testimonial.category}</span>
                    </div>
                    <div className="px-4 py-2 border rounded-full bg-blue-500/10 border-blue-500/20">
                      <span className="text-sm text-blue-400">{testimonial.project}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-cyan-400 w-8' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`View testimonial ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
        </div>

        {/* Mini Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 mb-16 md:grid-cols-3"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 border rounded-2xl bg-slate-900/50 border-white/5 backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-slate-400">
                "{testimonial.content.slice(0, 120)}..."
              </p>
              <div className="text-xs font-medium text-cyan-400">{testimonial.metrics}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6 text-center md:grid-cols-4"
        >
          {[
            { number: '50+', label: 'Happy Clients', colorClass: 'text-cyan-400' },
            { number: '12+', label: 'Projects', colorClass: 'text-blue-400' },
            { number: '100%', label: 'Satisfaction', colorClass: 'text-emerald-400' },
            { number: '4.9/5', label: 'Rating', colorClass: 'text-amber-400' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 border rounded-2xl bg-slate-900/50 border-white/5 backdrop-blur-sm"
            >
              <div className={`text-3xl font-black mb-2 ${stat.colorClass}`}>
                {stat.number}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials