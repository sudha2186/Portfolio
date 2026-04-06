'use client'

import React from 'react'
import { motion } from 'framer-motion'

export interface TimelineItem {
  year: string
  title: string
  company?: string
  description: string
}

export interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative py-8">
      {/* Vertical Line with Gradient */}
      <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-60" />

      {/* Timeline Items */}
      <div className="space-y-12">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative pl-20 sm:pl-32"
          >
            {/* Timeline Dot with Glow */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: idx * 0.15 + 0.1 }}
              whileHover={{ scale: 1.15 }}
              className="absolute left-0 w-10 h-10 bg-card border-2 border-primary rounded-full flex items-center justify-center glow-purple"
            >
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                className="w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full"
              />
            </motion.div>

            {/* Content Card */}
            <motion.div 
              whileHover={{ y: -5, boxShadow: '0 0 30px rgba(167, 139, 250, 0.2)' }}
              transition={{ duration: 0.3 }}
              className="glassmorphism rounded-lg p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.15 + 0.2 }}
                    className="text-sm font-semibold text-primary/80"
                  >
                    {item.year}
                  </motion.p>
                  <motion.h4 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.15 + 0.25 }}
                    className="text-lg font-bold text-foreground mt-2"
                  >
                    {item.title}
                  </motion.h4>
                  {item.company && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: idx * 0.15 + 0.3 }}
                      className="text-sm text-primary/60 font-medium mt-1"
                    >
                      {item.company}
                    </motion.p>
                  )}
                </div>
              </div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.15 + 0.35 }}
                className="text-sm text-foreground/70 mt-4 leading-relaxed"
              >
                {item.description}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
