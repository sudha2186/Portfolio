'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypingAnimationProps {
  words: string[]
  className?: string
}

export function TypingAnimation({ words, className = '' }: TypingAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 0 : 2000

    let timer: NodeJS.Timeout

    if (!isDeleting && displayedText === currentWord) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && displayedText === '') {
      // Move to next word
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    } else {
      // Type or delete character
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentWord.slice(0, prev.length + 1)
        )
      }, typingSpeed)
    }

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentWordIndex, words])

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.7, repeat: Infinity }}
        className="ml-1 inline-block w-1 h-1 bg-current rounded-full"
      />
    </span>
  )
}
