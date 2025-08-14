import Navigation from "@/components/navigation"
import { Footer } from "@/components/footer" // Added Footer import
import { Award, Calendar } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Engineering - Computer Engineering",
    institution: "Sinhgad College of Engineering, Pune",
    duration: "Dec 2021 - Jul 2025",
    grade: "CGPA: 8.6/10",
    icon: "🎓",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Namo Rims Jr. College, Pune",
    duration: "Jan 2019 - Jan 2021",
    grade: "Percentage: 88.67%",
    icon: "📚",
  },
]

const certifications = [
  {
    name: "Frontend Developer (React) Certificate",
    issuer: "HackerRank",
    date: "November 2024",
    type: "Professional Certification",
  },
  {
    name: "Generative AI Arcade Game & Google Cloud Computing Pathway",
    issuer: "Google DSC",
    date: "January 2023",
    type: "Cloud Computing",
  },
  {
    name: "C/C++ Programming Course",
    issuer: "N Infinity Engineering Academy",
    date: "May 2023",
    type: "Programming",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pixel-grid">
      <Navigation />
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="font-pixel text-4xl text-vibrant-orange mb-4">ABOUT ME</h1>
            <p className="font-mono text-lg text-dark-green max-w-2xl mx-auto">
              Full-stack developer passionate about building scalable web applications with modern technologies and
              clean architecture.
            </p>
          </div>

          {/* Personal Introduction */}
          <section className="pixel-card mb-12">
            <h2 className="font-pixel text-xl text-dark-green mb-6">MY JOURNEY</h2>
            <div className="space-y-4 font-mono text-dark-green leading-relaxed">
              <p>
                I'm a final-year Computer Engineering student at Sinhgad College of Engineering, Pune, with a strong
                academic record (8.6 CGPA) and a passion for full-stack development. My journey began with achieving
                88.67% in HSC, which laid the foundation for my technical career.
              </p>
              <p>
                Specializing in the MERN stack, I've gained hands-on experience through multiple internships at
                companies like Ronin Labs, Webstack Academy, and Bluestock Fintech. These experiences have shaped my
                expertise in building responsive UIs, optimized RESTful APIs, and integrating cutting-edge technologies
                like AI/ML.
              </p>
              <p>
                I'm particularly interested in creating solutions that bridge the gap between complex technical
                requirements and user-friendly interfaces. My projects demonstrate this approach, from AI-powered news
                detection systems to comprehensive production management platforms.
              </p>
            </div>
          </section>

          {/* Education Timeline */}
          <section className="mb-12">
            <h2 className="font-pixel text-xl text-dark-green mb-8 text-center">EDUCATION</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="pixel-card">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{edu.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-pixel text-lg text-vibrant-orange mb-2">{edu.degree}</h3>
                      <p className="font-mono text-dark-green mb-1">{edu.institution}</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <span className="font-mono text-sm text-bright-blue flex items-center gap-1">
                          <Calendar size={14} />
                          {edu.duration}
                        </span>
                        <span className="bg-lime-green text-dark-green px-3 py-1 font-pixel text-xs border border-dark-green">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-12">
            <h2 className="font-pixel text-xl text-dark-green mb-8 text-center">CERTIFICATIONS</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="pixel-card">
                  <div className="flex items-start gap-3">
                    <Award className="text-vibrant-orange mt-1" size={20} />
                    <div>
                      <h3 className="font-pixel text-sm text-dark-green mb-2 leading-relaxed">{cert.name}</h3>
                      <p className="font-mono text-sm text-bright-blue mb-1">{cert.issuer}</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <span className="font-mono text-xs text-dark-green">{cert.date}</span>
                        <span className="bg-gold text-dark-green px-2 py-1 font-pixel text-xs border border-dark-green">
                          {cert.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Summary */}
          <section className="pixel-card bg-vibrant-orange text-black">
            <h2 className="font-pixel text-xl mb-6">WHAT I BRING TO THE TABLE</h2>
            <div className="grid md:grid-cols-2 gap-6 font-mono">
              <div>
                <h3 className="font-pixel text-sm mb-3">Technical Expertise</h3>
                <ul className="space-y-2 text-sm">
                  <li>• MERN Stack Development</li>
                  <li>• RESTful API Design</li>
                  <li>• JWT Authentication</li>
                  <li>• Responsive UI/UX</li>
                  <li>• AI/ML Integration</li>
                </ul>
              </div>
              <div>
                <h3 className="font-pixel text-sm mb-3">Soft Skills</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Problem-solving mindset</li>
                  <li>• Clean code architecture</li>
                  <li>• Team collaboration</li>
                  <li>• Continuous learning</li>
                  <li>• Project management</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer /> {/* Added Footer component */}
    </div>
  )
}
