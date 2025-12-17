import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Tech Development Intern",
    company: "Symplichain Technologies Pvt. Ltd",
    location: "Remote",
    duration: "Oct 2025 - Present",
    description:
      "Developing full-stack SaaS features using React (TypeScript) and Django REST, implementing multi-tenant architecture, JWT authentication, RBAC, and optimized PostgreSQL data models. Building responsive dashboards and complex UI workflows using React, TypeScript, Tailwind, Recharts, and Leaflet, including multi-step forms and end-to-end authentication flows. Engineering secure backend services with DRF, Celery, and Redis, delivering scalable REST APIs, async task processing, third-party API integrations, and automated testing/documentation workflows.",
    tech: ["React", "TypeScript", "Django REST", "PostgreSQL", "Tailwind CSS", "Recharts", "Leaflet", "DRF", "Celery", "Redis", "JWT", "RBAC"],
    type: "current",
  },
  {
    title: "Full Stack Engineer - Intern",
    company: "Ronin Labs Private Limited",
    location: "Pune",
    duration: "May 2025 - Jul 2025",
    description:
      "Built dynamic UI components and an interactive story editor using React.js, ReactFlow, and styled-components, integrating animations with Framer Motion for an engaging user experience. Implemented scalable state management with Zustand to synchronize navigation, player progress, and story data across the application.",
    tech: ["React.js", "ReactFlow", "Styled-components", "Framer Motion", "Zustand"],
    type: "completed",
  },
  {
    title: "MERN Stack Development Intern",
    company: "Webstack Academy - WSA",
    location: "Remote",
    duration: "Jul 2024 - Sep 2024",
    description:
      "Developed a full-stack web application with features including restaurant browsing, menu viewing, cart management, order placement, and secure JWT-based authentication. Implemented user-facing and admin modules using React.js, Material UI, and Vite, and built RESTful APIs with Node.js, Express, and MongoDB for efficient data handling and role-based access control.",
    tech: ["React.js", "Material UI", "Vite", "Node.js", "Express.js", "MongoDB", "JWT"],
    type: "completed",
  },
  {
    title: "SDE Intern",
    company: "Bluestock Fintech",
    location: "Remote",
    duration: "Jun 2024 - Aug 2024",
    description:
      "Developed financial software solutions with an emphasis on high-quality code and performance optimizations. Worked on building secure and scalable fintech applications.",
    tech: ["JavaScript", "Performance Optimization", "Financial Software"],
    type: "completed",
  },
]

const education = [
  {
    degree: "Bachelor of Engineering, Computer Engineering",
    institution: "Sinhgad College of Engineering, Pune, India",
    duration: "Dec 2021 - Jul 2025",
    grade: "CGPA: 8.6",
    type: "degree",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Namo Rims Jr. College Pune, India",
    duration: "Jan 2019 - Jan 2021",
    grade: "Percentage: 88.67%",
    type: "secondary",
  },
]

const certifications = [
  {
    title: "Frontend Developer (React) Certificate",
    issuer: "HackerRank",
    date: "Nov 2024",
  },
  {
    title: "Generative AI Arcade Game & Google Cloud Computing Pathway",
    issuer: "Google DSC",
    date: "Jan 2023",
  },
  {
    title: "C/C++ Programming Course",
    issuer: "N Infinity Engineering Academy",
    date: "May 2023",
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#f5f5dc] text-[#2d5016]">
      <Navigation />

      <main className="container mx-auto px-4 py-8 mt-16">
        <div className="text-center mb-12">
          <h1 className="font-pixel text-2xl md:text-4xl mb-4 text-[#2d5016]">EXPERIENCE </h1>
          <div className="w-24 h-1 bg-[#ff6b35] mx-auto mb-6"></div>
          <p className="font-mono text-lg max-w-2xl mx-auto">
            My professional journey  and continuous learning achievements.
          </p>
        </div>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="font-pixel text-xl md:text-2xl mb-8 text-[#2d5016] text-center">PROFESSIONAL EXPERIENCE</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-white border-4 border-[#2d5016] shadow-[8px_8px_0px_0px_#2d5016] hover:shadow-[12px_12px_0px_0px_#2d5016] transition-all duration-200"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="font-pixel text-lg text-[#2d5016] mb-2">{exp.title}</CardTitle>
                      <CardDescription className="font-mono text-base text-[#2d5016]/80 mb-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Building className="w-4 h-4" />
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </CardDescription>
                    </div>
                    <Badge
                      className={`${exp.type === "current" ? "bg-[#4169e1]" : "bg-[#ff6b35]"} text-white font-mono border-2 border-[#2d5016] shadow-[2px_2px_0px_0px_#2d5016]`}
                    >
                      {exp.type === "current" ? "CURRENT" : "COMPLETED"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-[#2d5016]/90 mb-4 leading-relaxed">{exp.description}</p>
                  <div>
                    <h4 className="font-pixel text-sm text-[#2d5016] mb-3">TECHNOLOGIES:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-2 border-[#2d5016] text-[#2d5016] font-mono shadow-[2px_2px_0px_0px_#2d5016] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        

        {/* Certifications Section */}
        <section>
          <h2 className="font-pixel text-xl md:text-2xl mb-8 text-[#2d5016] text-center">CERTIFICATIONS</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-white border-4 border-[#2d5016] shadow-[8px_8px_0px_0px_#2d5016] hover:shadow-[12px_12px_0px_0px_#2d5016] transition-all duration-200"
              >
                <CardHeader>
                  <CardTitle className="font-pixel text-sm text-[#2d5016] mb-2">{cert.title}</CardTitle>
                  <CardDescription className="font-mono text-sm text-[#2d5016]/80">
                    <div className="mb-1">{cert.issuer}</div>
                    <div className="text-xs">{cert.date}</div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
