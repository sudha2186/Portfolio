'use client'

import React from 'react'
import { motion } from 'framer-motion'

const EDUCATION = [
  {
    year: '2024 - 2028',
    title: 'BTech in Computer Engineering',
    place: 'Vidyalankar Institute of Technology, Mumbai',
    CGPI: '10 CGPI',
  },
  {
    year: '2022 - 2024',
    title: 'HSC',
    place: 'K.J. Somaiya Coloege of Science and Commerce, Mumbai',
  },
  {
    year: '2022',
    title: 'SSC',
    place: 'R.A.U.B.S. English High School, Bhandup',
  },
]

export default function EducationSection() {
  return (
    <section className="py-28 relative overflow-hidden bg-background">

      {/* 🔮 Animated Background Glow */}
      <motion.div
        animate={{ x: [0, 200, -200, 0], y: [0, -100, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -200, 200, 0], y: [0, 100, -100, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-20">
            <span className="text-primary">Education</span>
        </h2>

        {/* Timeline */}
        <div className="relative">

          {/* 🌈 Animated Gradient Line */}
          <motion.div
            className="absolute top-1/2 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <div className="flex justify-between items-center relative">

            {EDUCATION.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.3 }}
                whileHover={{ scale: 1.08 }}
                className="flex flex-col items-center w-1/3 px-4"
              >

                {/* 🔥 Glowing Dot */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-6 h-6 rounded-full bg-primary 
                  shadow-[0_0_20px_rgba(139,92,246,1)] z-10"
                />

                {/* 💎 Glass Card */}
                <div className="mt-8 backdrop-blur-lg bg-white/5 border border-white/10 p-6 rounded-xl shadow-xl hover:shadow-purple-500/30 transition-all">

                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-primary text-sm mt-1">
                    {item.place}
                  </p>

                  <p className="text-xs text-gray-400">
                    {item.year}
                  </p>
                    <p className="text-xs text-gray-400">
                    {item.CGPI}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}