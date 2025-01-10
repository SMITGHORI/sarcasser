'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-card py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-width">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="text-2xl font-bold gradient-text">ManuTech</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:gradient-text transition-all duration-300"
              >
                {item}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="glass-card px-6 py-2 rounded-full gradient-text font-medium"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
