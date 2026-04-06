'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const socialLinks = [
  {
    icon: Github,
    url: 'https://github.com/sudha2186',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/sudha-maurya-53aa35324/',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    url: 'mailto:sudhamaurya2106@gmail.com',
    label: 'Email',
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-card/50 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map(({ icon: Icon, url, label }, idx) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.2, color: 'var(--primary)' }}
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-sm text-foreground/50"
          >
            <p>© 2024 SudhaM. All rights reserved.</p>
            <p className="mt-2">
               -- Turning caffeine into code and ideas into reality. --
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
