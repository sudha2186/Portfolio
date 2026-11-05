'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { NavBar } from '@/components/portfolio/navbar'
import { ProjectCard } from '@/components/portfolio/project-card'
import { SkillBadge } from '@/components/portfolio/skill-badge'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { Timeline } from '@/components/portfolio/timeline'
import { CertificateCard } from '@/components/portfolio/certificate-card'
import { ContactForm } from '@/components/portfolio/contact-form'
import { Footer } from '@/components/portfolio/footer'
import { AIChatbot } from '@/components/portfolio/ai-chatbot'
import { TypingAnimation } from '@/components/portfolio/typing-animation'
import AboutSection from '@/components/portfolio/about-section'
import {
  FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub,
  FaJava, FaPython
} from 'react-icons/fa'

import {
  SiJavascript, SiFlask, SiFastapi,
  SiMysql, SiPostgresql, SiCanva
} from 'react-icons/si'

import { SiCplusplus } from 'react-icons/si'
import { TbLetterC } from 'react-icons/tb'
import EducationSection from '@/components/portfolio/education-section'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const SKILLS = {
  Frontend: [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  ],

  Backend: [
    { name: 'Flask', icon: <SiFlask className="text-white" /> },
    { name: 'FastAPI', icon: <SiFastapi className="text-green-400" /> },
  ],

  Database: [
    { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-indigo-400" /> },
  ],

  Tools: [
    { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
    { name: 'GitHub', icon: <FaGithub className="text-white" /> },
    { name: 'Canva', icon: <SiCanva className="text-cyan-400" /> },
  ],

  'Programming Languages': [
    { name: 'C', icon: <TbLetterC className="text-blue-300" /> },
    { name: 'C++', icon: <SiCplusplus className="text-blue-500" /> },
    { name: 'Python', icon: <FaPython className="text-yellow-300" /> },
    { name: 'Java', icon: <FaJava className="text-red-500" /> },
  ],
}

const PROJECTS = [
  {
    title: 'TeenBuddy AI',
    description: 'AI-powered chatbot that helps students with study guidance, exam preparation, and career support using Gemini API with an interactive and user-friendly interface.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Streamlit', 'Gemini API'],
    image: `${basePath}/teenbuddy.png`,
    githubUrl: 'https://github.com/sudha2186/TeenBuddyAI_Agentic_model',
  },
  {
    title: 'Pet Adoption System',
    description: 'Web-based platform to connect adopters with pets, including user registration, listings, and request management for a smooth adoption process.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'MySQL'],
    image: `${basePath}/pet.jpeg`,
    githubUrl: 'https://github.com/sudha2186/pet-Adoption-System-PawConnect',
  },
  {
    title: 'EduScheduler',
    description: 'AI-based timetable scheduling system that generates optimized academic schedules while minimizing conflicts and improving resource allocation.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'Next Js', 'React', 'Node JS', 'MongoDB'],
    image: `${basePath}/tt.png`,
    githubUrl: 'https://github.com/example',
  },
  {
    title: 'Automatic Irrigation System',
    description: 'IoT-based system that automates watering using soil moisture sensors to optimize water usage and support plant growth.',
    technologies: ['Arduino', 'Sensors', 'Embedded C'],
    image: `${basePath}/irrigation.png`,
  },
  {
    title: 'Digital Thermometer',
    description: 'Hardware-based system to measure and display temperature in real-time using sensors and microcontroller integration.',
    technologies: ['Arduino', 'Temperature Sensor', 'Embedded C'],
    image: `${basePath}/thermo.png`,
  },
]

const EXPERIENCE = [
  {
    year: 'May 2025 - July 2025',
    title: 'Web Development Intern',
    company: 'Techsprout',
    description: 'Worked on real-world web applications using modern technologies, focusing on responsive UI, debugging, and improving user experience.',
  },
  {
    year: '2025 - Present',
    title: 'Creative Head',
    company: 'CESA (Computer Engineering Students Association)',
    description: 'Led design and branding initiatives, created posters and digital content, and enhanced event engagement through creative strategies.',
  },
  {
    year: '2025 - Present',
    title: 'Class Representative (CR)',
    company: 'Vidyalankar Institute of Technology',
    description: 'Acted as a communication bridge between students and faculty, managing academic coordination and resolving student concerns.',
  },
]

const CERTIFICATES = [
  {
    title: 'Overall Academic Topper',
    issuer: 'Institute Level',
    date: '2024',
    description: 'Awarded for achieving the highest overall academic performance.',
  },
  {
    title: 'Topper Certificate',
    issuer: 'Department',
    date: '2024',
    description: 'Recognized for consistent academic excellence.',
  },
  {
    title: 'Subject Topper – Data Structures',
    issuer: 'Department',
    date: '2025',
    description: 'Secured highest marks in Data Structures subject.',
  },
  {
    title: 'Subject Topper – Microprocessor',
    issuer: 'Department',
    date: '2025',
    description: 'Achieved top rank in Microprocessor subject.',
  },
  {
    title: 'Presentation Skills Excellence',
    issuer: 'College Event',
    date: '2025',
    description: 'Recognized for outstanding presentation and communication skills.',
  },
  {
    title: 'Introduction to Computer Science',
    issuer: 'Harvard University',
    date: '2024',
    description: 'Completed foundational CS course covering algorithms, problem-solving, and programming.',
  },
  {
    title: 'MATLAB Programming Course',
    issuer: 'Online Certification',
    date: '2025',
    description: 'Learned numerical computing, simulations, and data visualization using MATLAB.',
  },
]

export default function Home() {
  return (
    <main className="scroll-smooth">
      <NavBar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10 pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left"
          >
            <div className="flex-1">
              <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                Hi, I&apos;m{' '}
                <span className="neon-text-purple animate-glow">
                  Sudha Maurya
                </span>
              </motion.h1>

              <div className="text-2xl sm:text-3xl font-semibold text-primary mb-6">
                <TypingAnimation
                  words={[
                    'Full Stack Developer',
                    'Java Developer',
                    'AI Enthusiast',
                    'Problem Solver'
                  ]}
                />
              </div>

              <div className="text-lg mb-6 font-mono text-purple-400">
  <TypingAnimation
    words={[
      '> system.out.println("Building the future, one line at a time.");'
    ]}
  />
</div>

              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                View My Work...
              </motion.a>
              <motion.a
                href={`${basePath}/resume.pdf`}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-primary rounded-lg text-primary hover:shadow-lg hover:shadow-primary/50 hover:bg-primary/13 transition-all"
              >
                Download Resume 
              </motion.a>
            </motion.div>
            </div>

            {/* PROFILE IMAGE */}
            <div className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-purple-500 shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-purple-500/50">
              <motion.img
                src={`${basePath}/profile.jpeg`}
                alt="profile"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-48 h-48 md:w-64 md:h-64 object-cover object-top rounded-full border-4 border-purple-500 shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* About Section */}
      < AboutSection />
      < EducationSection />

      {/* Skills Section */}
   <section id="skills" className="py-24 relative z-10 bg-background">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    <SectionHeading
      title="Skills & Expertise"
      subtitle={
        <code className="px-2 py-1 rounded-md bg-background/20 text-foreground/80 font-mono text-sm md:text-base">
          {`// Technologies and tools I work with daily`}
        </code>
      }
    />

    {/* ✅ SINGLE LOOP ONLY */}
    <div className="space-y-16 mt-12">
      {Object.entries(SKILLS).map(([category, skills], catIdx) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: catIdx * 0.1 }}
        >
          {/* Category Title */}
          <h3 className="text-2xl font-bold text-primary mb-8 tracking-wide">
            {category}
          </h3>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {skills.map((skill, idx) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                proficiency={
                  idx % 4 === 0 ? 'Expert' :
                  idx % 4 === 1 ? 'Advanced' :
                  idx % 4 === 2 ? 'Intermediate' : 'Advanced'
                }
                index={idx}
              />
            ))}
          </div>

        </motion.div>
      ))}
    </div>

  </div>
</section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b from-background to-card/20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Projects"
            subtitle="A selection of projects I&apos;ve built and contributed to"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Experience"
            subtitle="My professional journey and key milestones"
          />

          <Timeline items={EXPERIENCE} />
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-24 bg-gradient-to-b from-background relative z-10 to-card/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Certifications"
            subtitle="Professional certifications and achievements"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {CERTIFICATES.map((cert, idx) => (
              <CertificateCard
                key={cert.title}
                {...cert}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Let&apos;s Connect"
            subtitle="Have a project or opportunity? I'd love to hear from you!"
          />

          <ContactForm />
        </div>
      </section>

      <Footer />
      <AIChatbot />
    </main>
  )
}
