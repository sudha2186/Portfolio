'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/portfolio/section-heading'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-background to-card/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <SectionHeading
        title="About Me"
        subtitle={
            <code className="px-2 py-1 rounded-md bg-background/20 text-foreground/80 font-mono text-sm md:text-base">
            {`const developer = { code: true, creativity: true, logic: true };`}
            </code>
        }
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg md:text-xl text-foreground/80 leading-loose tracking-wide"
          >

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              I don’t just{' '}
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent font-semibold animate-gradient">
                write code
              </span>{' '}
              — I{' '}
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent font-semibold animate-gradient">
                build solutions
              </span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              As a Computer Engineering student, I enjoy breaking down complex
              problems into{' '}
              <span className="text-primary font-semibold hover:text-purple-400 transition">
                simple
              </span>
              ,{' '}
              <span className="text-primary font-semibold hover:text-purple-400 transition">
                functional
              </span>
              , and{' '}
              <span className="text-primary font-semibold hover:text-purple-400 transition">
                meaningful applications
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              I approach every project with{' '}
              <span className="text-primary font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">
                curiosity
              </span>{' '}
              and{' '}
              <span className="text-primary font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">
                logic
              </span>, constantly exploring better ways to design, optimize, and
              improve. I enjoy both the process and the outcome.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Currently, I’m focused on building real-world projects and exploring{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                modern web technologies
              </span>{' '}
              and{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                AI
              </span>{' '}
              to create impactful solutions.
            </motion.p>
          </motion.div>

          {/* RIGHT SIDE - CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { title: '5+ Projects', desc: 'Built real-world applications' },
              { title: 'Full Stack', desc: 'Frontend + Backend development' },
              { title: 'Problem Solver', desc: 'Logical & optimized solutions' },
              { title: 'Fast Learner', desc: 'Quickly adapting new tech' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.08 }}
                className="p-6 rounded-2xl text-center border border-primary/10 
                bg-white/5 backdrop-blur-lg
                hover:border-primary/40 
                transition-all duration-300 
                hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
              >
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/60 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* GRADIENT ANIMATION STYLE */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0%;
          }
          100% {
            background-position: 200%;
          }
        }

        .animate-gradient {
          background-size: 200%;
          animation: gradient 4s linear infinite;
        }
      `}</style>
    </section>
  )
}