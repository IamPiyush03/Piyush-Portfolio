"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { AVATAR_PLACEHOLDER } from "@/assets/images"
import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin, MapPin } from "lucide-react"

const skills = ["React.js", "Node.js", "MongoDB", "Express.js", "TypeScript", "Next.js"]

export default function Hero() {
  const [currentSkill, setCurrentSkill] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-mono">
                <MapPin size={16} className="text-vibrant-orange" />
                <span>Pune, Maharashtra, India</span>
              </div>

              <h1 className="font-pixel text-4xl md:text-5xl text-vibrant-orange leading-tight">
                PIYUSH
                <br />
                DHONDGE
              </h1>

              <div className="space-y-2">
                <p className="font-pixel text-lg text-dark-green">Full-Stack Developer</p>
                <p className="font-mono text-lg text-bright-blue">MERN Specialist </p>
              </div>

              {/* Animated Skills */}
              <div className="h-8 flex items-center">
                <span className="font-mono text-dark-green mr-2">Specializing in:</span>
                <span className="font-pixel text-vibrant-orange typewriter">{skills[currentSkill]}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="/projects">
                <Button className="pixel-button-primary">View Projects</Button>
              </a>
              <Button variant="outline" className="pixel-button bg-transparent" asChild>
                <a href="https://drive.google.com/file/d/1GZo8D8X6jUnSoqyOCdsIs0L6XGmbI1LF/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Download size={16} className="mr-2" />
                  Resume
                </a>
              </Button>
              <a href="/contact">
                <Button variant="outline" className="pixel-button bg-transparent">
                  <Mail size={16} className="mr-2" />
                  Contact
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/IamPiyush03"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-dark-green bg-white hover:bg-dark-green hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/piyush-dhondge"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-dark-green bg-white hover:bg-dark-green hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - Pixel Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="pixel-card max-w-md relative">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-orange-500 p-2 flex items-center justify-center">
                <div className="relative w-64 h-64 bg-white border-4 border-green-800 flex items-center justify-center overflow-hidden">
                  <Image src={AVATAR_PLACEHOLDER} alt="Avatar" fill className="object-cover" priority />
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-green-400 border-2 border-green-800 px-2 py-1 font-pixel text-xs animate-pulse shadow-lg">
                {"</>"}
              </div>
              <div className="absolute -bottom-4 -left-4 bg-orange-400 border-2 border-green-800 px-2 py-1 font-pixel text-xs animate-bounce shadow-lg">
                MERN
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
