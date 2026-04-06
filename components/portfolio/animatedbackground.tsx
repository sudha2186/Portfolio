'use client'

import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* 🔮 Blob 1 (LEFT) */}
      <motion.div
        animate={{
          x: [0, 200, -200, 0],
          y: [0, -100, 100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
      />

      {/* 🔵 Blob 2 (RIGHT) */}
      <motion.div
        animate={{
          x: [0, -200, 200, 0],
          y: [0, 100, -100, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
      />

      {/* 🌸 CENTER FLOAT */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />

      {/* 🌠 STAR GRID */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:25px_25px] opacity-10"></div>

    </div>
  )
}