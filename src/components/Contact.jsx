import { motion } from 'framer-motion'
import { Send, Mail, MessageSquare } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Prepare the email data
    const emailData = {
      to: 'devfaizanarshad@gmail.com',
      subject: `New Project Inquiry from ${formData.name}`,
      body: `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
This message was sent from your portfolio website.
      `.trim()
    }

    try {
      /* 
       * PRODUCTION RECOMMENDATION: Replace mailto with a proper email service
       * 
       * Option 1 - EmailJS (Free tier: 200 emails/month):
       * 1. Sign up at https://www.emailjs.com/
       * 2. npm install @emailjs/browser
       * 3. Replace below with:
       *    import emailjs from '@emailjs/browser'
       *    await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
       * 
       * Option 2 - Formspree (Free tier: 50 submissions/month):
       * 1. Sign up at https://formspree.io/
       * 2. Get your form endpoint
       * 3. Replace below with:
       *    await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       *      method: 'POST',
       *      headers: { 'Content-Type': 'application/json' },
       *      body: JSON.stringify(formData)
       *    })
       * 
       * Option 3 - Custom Backend:
       * Create a serverless function (Vercel/Netlify) or API endpoint to handle emails
       */
      
      // Current Method: Direct mailto link (opens email client)
      const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`
      window.location.href = mailtoLink
      
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      }, 1000)

    } catch (error) {
      console.error('Error sending message:', error)
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative px-16 py-32">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <span className="text-xs font-medium tracking-wider uppercase text-cyan-400">
              Get In Touch
            </span>
          </div>

          <h2 className="mb-8 text-5xl font-black tracking-tight md:text-7xl">
            <span className="text-white">Let's Build </span>
            <span className="text-gradient">Together</span>
          </h2>
          
          <p className="text-xl font-light text-slate-400">
            Ready to turn your idea into reality?
          </p>
        </motion.div>

        <div className="grid gap-8 mb-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 border rounded-2xl bg-slate-900/50 border-white/5"
          >
            <Mail className="w-8 h-8 mb-4 text-cyan-400" />
            <h3 className="mb-2 text-xl font-bold text-white">Email Us</h3>
            <p className="mb-4 text-slate-400">We'll respond within 24 hours</p>
            <a 
              href="mailto:devfaizanarshad@gmail.com" 
              className="text-lg font-medium break-all transition-colors text-cyan-400 hover:text-cyan-300"
            >
              devfaizanarshad@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 border rounded-2xl bg-slate-900/50 border-white/5"
          >
            <MessageSquare className="w-8 h-8 mb-4 text-cyan-400" />
            <h3 className="mb-2 text-xl font-bold text-white">Quick Response</h3>
            <p className="text-slate-400">We're here to help with any questions</p>
          </motion.div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="p-8 border rounded-2xl bg-slate-900/50 border-white/5"
        >
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 mb-6 text-center border rounded-lg bg-emerald-500/20 border-emerald-500/30 text-emerald-400"
            >
              ✅ Message sent! We'll get back to you soon.
            </motion.div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-cyan-400">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 text-white transition-colors border rounded-lg bg-slate-950 border-white/10 focus:border-cyan-500 focus:outline-none placeholder-slate-500"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-cyan-400">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 text-white transition-colors border rounded-lg bg-slate-950 border-white/10 focus:border-cyan-500 focus:outline-none placeholder-slate-500"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-cyan-400">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="4"
                className="w-full px-4 py-3 text-white transition-colors border rounded-lg resize-none bg-slate-950 border-white/10 focus:border-cyan-500 focus:outline-none placeholder-slate-500"
                placeholder="Tell us about your project..."
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                isSubmitting 
                  ? 'bg-slate-600 text-slate-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/30'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>

            <p className="mt-4 text-xs text-center text-slate-500">
              Your message will be sent directly to devfaizanarshad@gmail.com
            </p>
          </div>
        </motion.form>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400">
            Prefer to connect directly? Reach out at{' '}
            <a 
              href="mailto:devfaizanarshad@gmail.com" 
              className="underline text-cyan-400 hover:text-cyan-300"
            >
              devfaizanarshad@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact