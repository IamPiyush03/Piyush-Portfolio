import { Button } from "@/components/ui/button"
import { Mail, Download } from "lucide-react"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="py-20 px-4 bg-vibrant-orange">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-pixel text-3xl text-white mb-6">READY TO BUILD SOMETHING AMAZING?</h2>

        <p className="font-mono text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          I'm currently open to new opportunities and exciting projects. Let's discuss how we can bring your ideas to
          life with modern web technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-vibrant-orange hover:bg-gray-100 font-pixel border-2 border-white"
            >
              <Mail size={18} className="mr-2" />
              Get In Touch
            </Button>
          </Link>

          <a href="https://drive.google.com/file/d/1GZo8D8X6jUnSoqyOCdsIs0L6XGmbI1LF/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-vibrant-orange font-pixel bg-transparent"
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </Button>
          </a>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center font-mono text-white/80">
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span>piyushdhondge3@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>+91-8830164826</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Pune, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
