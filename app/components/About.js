'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background gradient and blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Leading the industry with innovation and excellence
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="backdrop-blur-md bg-white/30 p-6 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <p className="text-lg text-gray-700 leading-relaxed">
                With over two decades of experience in industrial manufacturing, we've established ourselves
                as a leader in providing cutting-edge manufacturing solutions.
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/30 p-6 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction drives everything we do.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: "20+", text: "Years Experience" },
              { number: "500+", text: "Projects Completed" },
              { number: "100+", text: "Team Members" },
              { number: "50+", text: "Countries Served" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-md bg-white/40 p-6 rounded-2xl border border-white/20 shadow-xl 
                          hover:shadow-2xl transition-all duration-300 group"
              >
                <h3 className="font-bold text-4xl bg-gradient-to-r from-blue-600 to-purple-600 
                             bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {item.number}
                </h3>
                <p className="text-gray-600 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
