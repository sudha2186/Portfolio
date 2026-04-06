'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Award } from 'lucide-react'

export interface CertificateCardProps {
  title: string
  issuer: string
  date: string
  credentialUrl?: string
  index?: number
}

export function CertificateCard({
  title,
  issuer,
  date,
  credentialUrl,
  index = 0,
}: CertificateCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(true)}
        className="relative cursor-pointer group"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition duration-300 bg-gradient-to-r from-purple-500 to-blue-500" />

        {/* Card Content */}
        <div className="relative z-10 rounded-xl p-6 bg-card/80 backdrop-blur-md border border-border/50 shadow-md hover:shadow-xl transition-all h-full">
          
          {/* Icon */}
          <div className="mb-4">
            <Award className="text-primary w-8 h-8 group-hover:scale-110 transition" />
          </div>

          {/* Text */}
          <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition">
            {title}
          </h4>

          <p className="text-sm text-foreground/60 mt-2">{issuer}</p>
          <p className="text-xs text-foreground/40 mt-1">{date}</p>
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
              className="relative rounded-2xl p-8 max-w-md w-full bg-card border border-border/50 shadow-2xl"
            >
              {/* Glow Background */}
              <div className="absolute inset-0 rounded-2xl blur-2xl opacity-30 bg-gradient-to-r from-purple-500 to-blue-500" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    {title}
                  </h3>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-foreground/60 hover:text-foreground transition"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Info */}
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-foreground/60">Issued by</p>
                    <p className="text-lg font-semibold text-foreground">
                      {issuer}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-foreground/60">Date</p>
                    <p className="text-lg font-semibold text-foreground">
                      {date}
                    </p>
                  </div>
                </div>

                {/* Button */}
                {credentialUrl && (
                  <motion.a
                    href={credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="mt-6 inline-block w-full text-center px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-primary/50 transition"
                  >
                    View Credential
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}