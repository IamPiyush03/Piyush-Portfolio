import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-[#2d5016] text-white border-t-4 border-[#2d5016] mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div>
            <h3 className="font-pixel text-lg mb-4">PIYUSH DHONDGE</h3>
            <p className="font-mono text-white/80 text-sm leading-relaxed">
              Full-stack developer specializing in MERN stack, building secure, scalable, and high-performance web
              applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-pixel text-sm mb-4">QUICK LINKS</h4>
            <nav className="space-y-2">
              <a href="/" className="font-mono text-white/80 hover:text-[#ff6b35] transition-colors block text-sm">
                Home
              </a>
              <a href="/about" className="font-mono text-white/80 hover:text-[#ff6b35] transition-colors block text-sm">
                About
              </a>
              <a
                href="/skills"
                className="font-mono text-white/80 hover:text-[#ff6b35] transition-colors block text-sm"
              >
                Skills
              </a>
              <a
                href="/projects"
                className="font-mono text-white/80 hover:text-[#ff6b35] transition-colors block text-sm"
              >
                Projects
              </a>
              <a
                href="/experience"
                className="font-mono text-white/80 hover:text-[#ff6b35] transition-colors block text-sm"
              >
                Experience
              </a>
              <a
                href="/contact"
                className="font-mono text-white/80 hover:text-[#ff6b35] transition-colors block text-sm"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-pixel text-sm mb-4">CONNECT</h4>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:piyushdhondge3@gmail.com"
                className="font-mono text-white/80 hover:text-[#ff6b35] transition-colors flex items-center gap-2 text-sm"
              >
                <Mail className="w-4 h-4" />
                piyushdhondge3@gmail.com
              </a>
              <a
                href="tel:+918830164826"
                className="font-mono text-white/80 hover:text-[#ff6b35] transition-colors block text-sm"
              >
                +91-8830164826
              </a>
              <p className="font-mono text-white/80 text-sm">Pune, India</p>
            </div>

            <div className="flex gap-3">
              <Button
                size="sm"
                className="bg-[#4169e1] hover:bg-[#4169e1]/90 text-white border-2 border-white shadow-[2px_2px_0px_0px_white] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 p-2"
                asChild
              >
                <a href="https://www.linkedin.com/in/piyush-dhondge" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button
                size="sm"
                className="bg-white hover:bg-white/90 text-[#2d5016] border-2 border-white shadow-[2px_2px_0px_0px_#ff6b35] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 p-2"
                asChild
              >
                <a href="https://github.com/IamPiyush03" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button
                size="sm"
                className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white border-2 border-white shadow-[2px_2px_0px_0px_white] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 p-2"
                asChild
              >
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-white/20 mt-8 pt-8 text-center">
          <p className="font-mono text-white/60 text-sm">
            © 2025 Piyush Dhondge. Built with Next.js & Tailwind CSS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
