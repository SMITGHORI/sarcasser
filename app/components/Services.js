'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Automated Manufacturing',
    description: 'State-of-the-art automated manufacturing solutions for increased efficiency.',
    icon: '🤖'
  },
  {
    title: 'Quality Control',
    description: 'Advanced quality control systems ensuring perfect output every time.',
    icon: '✓'
  },
  {
    title: 'Process Optimization',
    description: 'Streamline your manufacturing processes for maximum productivity.',
    icon: '📈'
  },
  {
    title: 'Maintenance Services',
    description: 'Comprehensive maintenance and support for your manufacturing equipment.',
    icon: '🔧'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative section-padding">
      <div className="absolute inset-0 gradient-bg rotate-180">
        <div className="absolute inset-0 backdrop-blur-[100px]" />
      </div>
      
      <div className="container-width relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions for modern manufacturing</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold gradient-text mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
