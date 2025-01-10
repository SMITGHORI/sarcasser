'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>
      
      <div className="container-width relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-6xl font-bold gradient-text leading-tight">
              Revolutionizing Manufacturing Technology
            </h1>
            <p className="text-xl text-gray-700">
              Empowering industries with cutting-edge solutions and innovative manufacturing processes.
            </p>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="glass-card px-8 py-3 rounded-full gradient-text font-medium"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="glass-card px-8 py-3 rounded-full text-gray-700 font-medium"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-4 aspect-square">
              {/* Add your hero image here */}
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-blue-200 to-purple-200" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
