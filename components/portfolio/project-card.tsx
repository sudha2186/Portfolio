'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  image?: string
  index?: number
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  image,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="glassmorphism rounded-xl p-6 h-full flex flex-col group border border-primary/10 hover:border-primary/30 transition-all duration-300 glow-purple hover:shadow-xl hover:shadow-purple-500/20"
    >
      {image && (
        <div className="mb-4 h-40 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}

      <h3 className="text-lg font-bold text-foreground mb-2 neon-text-purple">
        {title}
      </h3>
      <p className="text-sm text-foreground/70 mb-4 flex-grow">{description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3 pt-4 border-t border-border/20">
        {githubUrl && (
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors"
          >
            <Github size={16} /> Code
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}
