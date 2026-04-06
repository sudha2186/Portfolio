'use client'

import React from 'react'
import { motion } from 'framer-motion'

export interface SkillBadgeProps {
  name: string
  icon: React.ReactNode
  proficiency?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  index?: number
}

const proficiencyColors: Record<string, string> = {
  Beginner: 'from-blue-400 to-cyan-400',
  Intermediate: 'from-purple-400 to-blue-400',
  Advanced: 'from-pink-400 to-purple-400',
  Expert: 'from-amber-300 to-pink-400',
}

// ✅ ONLY CARD COMPONENT
export function SkillBadge({
  name,
  icon,
  proficiency = 'Intermediate',
  index = 0
}: SkillBadgeProps) {

  const filledDots =
    proficiency === 'Beginner' ? 1 :
    proficiency === 'Intermediate' ? 2 :
    proficiency === 'Advanced' ? 3 : 4

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.08 }}
      className="relative group"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-lg blur-md opacity-0 group-hover:opacity-50 transition duration-300 bg-gradient-to-r from-primary to-secondary" />

      {/* Card */}
      <div className="relative flex flex-col items-center justify-center gap-2 w-36 h-36 md:w-40 md:h-40 p-4 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-all shadow-sm hover:shadow-lg hover:shadow-primary/20">

        {/* Icon */}
        <div className="text-5xl flex items-center justify-center group-hover:scale-110 transition">
          {icon}
        </div>

        {/* Name */}
        <span className="text-sm font-medium text-foreground">
          {name}
        </span>

        {/* Dots */}
        <div className="flex gap-1 mt-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < filledDots
                  ? `bg-gradient-to-r ${proficiencyColors[proficiency]}`
                  : 'bg-border/40'
              }`}
            />
          ))}
        </div>

      </div>
    </motion.div>
  )
}