'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const BOT_RESPONSES: Record<string, string> = {
  projects:
    "I've worked on several exciting projects including web applications, mobile apps, and AI-powered tools. Some highlights include full-stack e-commerce platforms, real-time collaboration tools, and machine learning projects. Each project has taught me valuable lessons in scalability, user experience, and modern development practices.",
  skills:
    "My technical skills include JavaScript/TypeScript, React, Next.js, Node.js, Python, SQL databases, Tailwind CSS, and cloud platforms. I'm also experienced with version control, testing frameworks, and DevOps practices. I'm constantly learning new technologies to stay updated with industry trends.",
  contact:
    "You can reach me through email, LinkedIn, or GitHub. I'm always open to interesting opportunities, collaborations, or just a friendly chat about tech. Feel free to connect with me on any of my social media platforms listed on the website.",
  hello: "Hello! I'm an AI assistant here to help answer questions about my portfolio. You can ask me about my projects, skills, or how to contact me.",
  default:
    "I appreciate your question! For more specific information, feel free to explore the different sections of my portfolio or reach out directly through the contact section.",
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your portfolio assistant. Ask me about projects, skills, or contact information.",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    if (
      lowerMessage.includes('project') ||
      lowerMessage.includes('work') ||
      lowerMessage.includes('built')
    ) {
      return BOT_RESPONSES.projects
    }
    if (
      lowerMessage.includes('skill') ||
      lowerMessage.includes('experience') ||
      lowerMessage.includes('tech') ||
      lowerMessage.includes('expertise')
    ) {
      return BOT_RESPONSES.skills
    }
    if (
      lowerMessage.includes('contact') ||
      lowerMessage.includes('reach') ||
      lowerMessage.includes('email') ||
      lowerMessage.includes('phone')
    ) {
      return BOT_RESPONSES.contact
    }
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return BOT_RESPONSES.hello
    }

    return BOT_RESPONSES.default
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 800 + Math.random() * 400)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-background shadow-lg glow-purple hover:shadow-2xl transition-all duration-300 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-8 w-96 h-96 max-w-[calc(100vw-2rem)] glassmorphism rounded-2xl shadow-2xl flex flex-col border border-primary/20 z-40 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-primary/20 px-6 py-4">
              <h3 className="text-lg font-bold text-foreground">
                Ask me about my work
              </h3>
              <p className="text-xs text-foreground/60 mt-1">
                Try asking about projects, skills, or contact
              </p>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-hide">
              <AnimatePresence mode="popLayout">
                {messages.map((message, idx) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${
                      message.sender === 'user'
                        ? 'justify-end'
                        : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                        message.sender === 'user'
                          ? 'bg-primary text-background rounded-br-none'
                          : 'bg-card border border-primary/20 text-foreground rounded-bl-none'
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-2 items-center"
                  >
                    <div className="bg-card border border-primary/20 px-4 py-2 rounded-lg flex gap-1">
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                        className="w-2 h-2 bg-primary rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }}
                        className="w-2 h-2 bg-primary rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-primary rounded-full"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-primary/20 px-4 py-3 bg-gradient-to-t from-background/50 to-background/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me something..."
                  className="flex-1 bg-card/50 border border-primary/20 rounded-lg px-3 py-2 text-sm text-foreground placeholder-foreground/50 outline-none focus:border-primary/50 transition-colors"
                  disabled={isTyping}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  disabled={isTyping || !inputValue.trim()}
                  className="bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-background rounded-lg p-2 transition-all"
                >
                  <Send size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
