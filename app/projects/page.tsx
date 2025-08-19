import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "AI Fake News Detector",
    description: "Intelligent News Analysis System with 80%+ accuracy using Hugging Face's NLP models",
    longDescription:
      "Developed an AI-powered news analysis system that detects fake news with high accuracy. Built a responsive frontend with Material-UI and interactive analytics dashboard using Chart.js for data visualization. Implemented secure RESTful API with JWT authentication, rate limiting, and comprehensive error handling.",
    tech: ["React.js", "Material-UI", "Chart.js", "Node.js", "MongoDB", "Hugging Face", "JWT"],
    github: "https://github.com/Iampiyush03/ai-fake-news-detector",
    link: "https://ai-fake-news-detector.vercel.app/",
    deployment: "Vercel (frontend) and Render (backend) with MongoDB Atlas",
  },
  {
    title: "Product Line Management",
    description: "Production Line Management System using MERN stack with real-time analytics",
    longDescription:
      "Built comprehensive Production Line Management System with role-based authentication, real-time analytics dashboard, and automated order tracking system. Designed material inventory management with low-stock alerts and usage tracking functionality.",
    tech: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/IamPiyush03/Product-Line-Management",
    link: "https://product-line-management.vercel.app/",
    deployment: "Full-stack MERN application",
  },
  {
    title: "Crypto Portfolio Tracker",
    description: "Web-based cryptocurrency portfolio tracking and market monitoring application",
    longDescription:
      "Developed a comprehensive crypto asset management dashboard that assists investors in tracking portfolio performance and monitoring real-time market trends. Focused on delivering seamless user experience with dynamic updates and actionable insights.",
    tech: ["React.js", "JavaScript", "CSS3", "API Integration", "Chart.js"],
    link: "https://crypto-portfolio-eta.vercel.app/",
    github: "https://github.com/IamPiyush03/Crypto-Portfolio",
    deployment: "Web-based application",
  },
  {
    title: "Water Quality Analysis & Monitoring",
    description: "B.E. Final Year Project - Full-stack water quality monitoring platform",
    longDescription:
      "Built comprehensive water quality monitoring platform with Next.js (TypeScript) frontend, offering real-time dashboards, interactive data visualizations, and ML-powered potability predictions. Implemented JWT-based authentication, PDF/CSV report generation, and historical trend analysis.",
    tech: ["Next.js", "TypeScript", "Machine Learning", "JWT", "PDF Generation", "Data Visualization"],
    link: "https://water-quality-frontend-seven.vercel.app/",
    github: "https://github.com/IamPiyush03/ai-fake-news-detector",
    deployment: "Cloud deployment with CI/CD automation",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#f5f5dc] text-[#2d5016]">
      <Navigation />

      <main className="container mx-auto px-4 py-8 mt-16">
        <div className="text-center mb-12">
          <h1 className="font-pixel text-2xl md:text-4xl mb-4 text-[#2d5016]">MY PROJECTS</h1>
          <div className="w-24 h-1 bg-[#ff6b35] mx-auto mb-6"></div>
          <p className="font-mono text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, AI/ML integration, and modern web
            technologies.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white border-4 border-[#2d5016] shadow-[8px_8px_0px_0px_#2d5016] hover:shadow-[12px_12px_0px_0px_#2d5016] transition-all duration-200"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="font-pixel text-xl text-[#2d5016] mb-2">{project.title}</CardTitle>
                    <CardDescription className="font-mono text-base text-[#2d5016]/80">
                      {project.description}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <Button
                      size="sm"
                      className="bg-[#4169e1] hover:bg-[#4169e1]/90 text-white font-mono border-2 border-[#2d5016] shadow-[4px_4px_0px_0px_#2d5016] hover:shadow-[2px_2px_0px_0px_#2d5016] active:shadow-none active:translate-x-1 active:translate-y-1"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        DEMO
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-2 border-[#2d5016] text-[#2d5016] hover:bg-[#2d5016] hover:text-white font-mono shadow-[4px_4px_0px_0px_#2d5016] hover:shadow-[2px_2px_0px_0px_#2d5016] active:shadow-none active:translate-x-1 active:translate-y-1 bg-transparent"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        CODE
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-[#2d5016]/90 mb-6 leading-relaxed">{project.longDescription}</p>

                <div className="mb-4">
                  <h4 className="font-pixel text-sm text-[#2d5016] mb-3">TECH STACK:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-[#ff6b35] text-white font-mono border-2 border-[#2d5016] shadow-[2px_2px_0px_0px_#2d5016] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="text-sm font-mono text-[#2d5016]/70">
                  <strong>Deployment:</strong> {project.deployment}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
