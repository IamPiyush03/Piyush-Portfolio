"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import { Footer } from "@/components/footer" // Added Footer import

const skillsData = {
  programming: [
    { name: "C", level: 70, years: 2, color: "bg-blue-500" },
    { name: "C++", level: 75, years: 2, color: "bg-blue-600" },
    { name: "JavaScript (ES6+)", level: 90, years: 3, color: "bg-yellow-500" },
  ],
  frontend: [
    { name: "HTML5", level: 95, years: 3, color: "bg-orange-500" },
    { name: "CSS3", level: 90, years: 3, color: "bg-blue-500" },
    { name: "React.js", level: 90, years: 2, color: "bg-cyan-500" },
    { name: "Tailwind CSS", level: 85, years: 1.5, color: "bg-teal-500" },
    { name: "TypeScript", level: 75, years: 1, color: "bg-blue-600" },
    { name: "Vite", level: 80, years: 1, color: "bg-purple-500" },
  ],
  backend: [
    { name: "Node.js", level: 85, years: 2, color: "bg-green-500" },
    { name: "Express.js", level: 85, years: 2, color: "bg-gray-600" },
    { name: "RESTful APIs", level: 90, years: 2, color: "bg-indigo-500" },
    { name: "MongoDB", level: 80, years: 2, color: "bg-green-600" },
  ],
  tools: [
    { name: "Git", level: 85, years: 2, color: "bg-red-500" },
    { name: "GitHub", level: 90, years: 2, color: "bg-gray-800" },
    { name: "VS Code", level: 95, years: 3, color: "bg-blue-500" },
  ],
}

function SkillBar({ skill, index }: { skill: any; index: number }) {
  const [animatedLevel, setAnimatedLevel] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(skill.level)
    }, index * 100)
    return () => clearTimeout(timer)
  }, [skill.level, index])

  const getLevelLabel = (level: number) => {
    if (level >= 90) return "Expert"
    if (level >= 80) return "Advanced"
    if (level >= 70) return "Intermediate"
    return "Beginner"
  }

  const getLevelColor = (level: number) => {
    if (level >= 90) return "text-lime-green"
    if (level >= 80) return "text-bright-blue"
    if (level >= 70) return "text-gold"
    return "text-pixel-red"
  }

  return (
    <div className="pixel-card hover:pixel-pulse">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-pixel text-sm text-dark-green">{skill.name}</h3>
        <span className={`font-pixel text-xs ${getLevelColor(skill.level)}`}>{getLevelLabel(skill.level)}</span>
      </div>

      <div className="skill-bar mb-3">
        <div className="skill-fill" style={{ width: `${animatedLevel}%` }} />
      </div>

      <div className="flex justify-between items-center font-mono text-xs text-dark-green">
        <span>{skill.level}%</span>
        <span>{skill.years} years</span>
      </div>
    </div>
  )
}

function SkillSection({ title, skills }: { title: string; skills: any[] }) {
  return (
    <section className="mb-12">
      <h2 className="font-pixel text-xl text-vibrant-orange mb-6 text-center">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  )
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen pixel-grid">
      <Navigation />
      <main className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="font-pixel text-4xl text-vibrant-orange mb-4">SKILLS & EXPERTISE</h1>
            <p className="font-mono text-lg text-dark-green max-w-2xl mx-auto">
              My technical arsenal built through hands-on experience, continuous learning, and real-world project
              implementation.
            </p>
          </div>

          {/* Skills Legend */}
          <div className="pixel-card mb-12 bg-white">
            <h3 className="font-pixel text-sm text-dark-green mb-4">SKILL LEVELS</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-lime-green border border-dark-green"></div>
                <span className="text-lime-green font-pixel">Expert (90%+)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-bright-blue border border-dark-green"></div>
                <span className="text-bright-blue font-pixel">Advanced (80%+)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gold border border-dark-green"></div>
                <span className="text-gold font-pixel">Intermediate (70%+)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-pixel-red border border-dark-green"></div>
                <span className="text-pixel-red font-pixel">Beginner (&lt;70%)</span>
              </div>
            </div>
          </div>

          {/* Skill Sections */}
          <SkillSection title="PROGRAMMING LANGUAGES" skills={skillsData.programming} />
          <SkillSection title="FRONTEND DEVELOPMENT" skills={skillsData.frontend} />
          <SkillSection title="BACKEND & DATABASE" skills={skillsData.backend} />
          <SkillSection title="DEVELOPMENT TOOLS" skills={skillsData.tools} />

          {/* Summary */}
          <section className="pixel-card text-center text-black bg-orange-600 opacity-100">
            <h2 className="font-pixel text-xl mb-4">CONTINUOUS LEARNING</h2>
            <p className="font-mono leading-relaxed max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, tools, and best
              practices to stay at the forefront of web development. Currently diving deeper into AI/ML integration and
              advanced React patterns.
            </p>
          </section>
        </div>
      </main>
      <Footer /> {/* Added Footer component */}
    </div>
  )
}
