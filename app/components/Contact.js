'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative section-padding">
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>
      
      <div className="container-width relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">Get in touch with our expert team</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-2xl font-bold gradient-text mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-700">
                  <span className="mr-3">📍</span> 123 Manufacturing Ave, Tech City
                </p>
                <p className="flex items-center text-gray-700">
                  <span className="mr-3">📞</span> +1 (555) 123-4567
                </p>
                <p className="flex items-center text-gray-700">
                  <span className="mr-3">✉️</span> contact@manutech.com
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <form className="space-y-6">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/20 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/20 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/20 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full glass-card py-3 rounded-lg gradient-text font-medium"
                type="submit"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
