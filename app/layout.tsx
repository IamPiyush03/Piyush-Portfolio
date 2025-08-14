import type React from "react"
import type { Metadata } from "next"
import { Press_Start_2P, VT323 } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
})

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Piyush Dhondge - Full-Stack Developer",
  description:
    "Full-stack MERN developer from Pune specializing in scalable web applications, AI integration, and modern UI/UX design.",
  keywords: "Piyush Dhondge, Full-Stack Developer, MERN Stack, React, Node.js, MongoDB, Pune Developer",
  authors: [{ name: "Piyush Dhondge" }],
  creator: "Piyush Dhondge",
  openGraph: {
    title: "Piyush Dhondge - Full-Stack Developer",
    description: "Full-stack MERN developer from Pune specializing in scalable web applications",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${pressStart2P.variable} ${vt323.variable}`}>
      <body className="bg-cream text-dark-green font-mono antialiased min-h-screen">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
