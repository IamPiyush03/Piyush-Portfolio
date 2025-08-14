import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const featuredProjects = [
  {
    id: 1,
    name: "AI Fake News Detector",
    subtitle: "Intelligent News Analysis System",
    description:
      "AI-powered news analysis system using Hugging Face NLP models with 80%+ accuracy in fake news detection.",
    technologies: ["React", "Node.js", "MongoDB", "Hugging Face", "Material-UI", "Chart.js"],
    metrics: "80%+ Detection Accuracy",
    github: "https://github.com/Iampiyush03/ai-fake-news-detector",
    featured: true,
  },
  {
    id: 2,
    name: "Water Quality Monitoring",
    subtitle: "B.E. Final Year Project",
    description:
      "Full-stack monitoring platform with Next.js, real-time dashboards, and ML-powered potability predictions.",
    technologies: ["Next.js", "TypeScript", "Machine Learning", "Data Visualization"],
    academic: "Final Year Project",
    liveDemo: "https://water-quality-frontend-seven.vercel.app/",
    featured: true,
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-pixel text-2xl text-center text-vibrant-orange mb-12">FEATURED PROJECTS</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="pixel-card hover:pixel-pulse">
              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-pixel text-lg text-dark-green mb-1">{project.name}</h3>
                  <p className="font-mono text-sm text-bright-blue">{project.subtitle}</p>
                </div>
                {project.featured && (
                  <span className="bg-vibrant-orange text-white px-2 py-1 font-pixel text-xs">⭐ FEATURED</span>
                )}
              </div>

              {/* Description */}
              <p className="font-mono text-sm text-dark-green mb-4 leading-relaxed">{project.description}</p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-lime-green text-dark-green px-2 py-1 font-pixel text-xs border border-dark-green"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics/Academic */}
              {project.metrics && (
                <div className="mb-4">
                  <span className="bg-gold text-dark-green px-2 py-1 font-pixel text-xs border border-dark-green">
                    📊 {project.metrics}
                  </span>
                </div>
              )}

              {project.academic && (
                <div className="mb-4">
                  <span className="bg-bright-blue text-white px-2 py-1 font-pixel text-xs border border-dark-green">
                    🎓 {project.academic}
                  </span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3">
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="pixel-button bg-transparent">
                      <Github size={14} className="mr-1" />
                      Code
                    </Button>
                  </Link>
                )}
                {project.liveDemo && (
                  <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="pixel-button bg-transparent">
                      <ExternalLink size={14} className="mr-1" />
                      Live Demo
                    </Button>
                  </Link>
                )}
                <Link href="/projects">
                  <Button variant="outline" size="sm" className="pixel-button bg-transparent">
                    <ExternalLink size={14} className="mr-1" />
                    Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link href="/projects">
            <Button className="pixel-button-primary">View All Projects →</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
