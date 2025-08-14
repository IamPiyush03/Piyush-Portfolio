"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/skills", label: "SKILLS" },
  { href: "/experience", label: "EXPERIENCE" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/contact", label: "CONTACT" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b-4 border-[#2d5016] sticky top-0 z-50 shadow-[0_4px_0px_0px_#2d5016]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-pixel text-lg text-[#ff6b35] hover:text-[#4169e1] transition-colors">
            PD.DEV
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-pixel text-xs px-3 py-2 text-[#2d5016] hover:bg-[#ff6b35] hover:text-white transition-colors border-2 border-transparent hover:border-[#2d5016] shadow-[2px_2px_0px_0px_transparent] hover:shadow-[2px_2px_0px_0px_#2d5016]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#2d5016] hover:bg-[#f5f5dc] border-2 border-[#2d5016] shadow-[2px_2px_0px_0px_#2d5016] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t-2 border-[#2d5016] bg-white">
            <div className="py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block font-pixel text-xs px-4 py-3 text-[#2d5016] hover:bg-[#ff6b35] hover:text-white transition-colors border-l-4 border-transparent hover:border-[#2d5016]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
