"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Home, User, Code, Briefcase, Mail } from "lucide-react"
import { gsap } from "gsap"

interface NavItem {
  name: string
  href: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home", icon: <Home className="h-5 w-5" /> },
  { name: "About", href: "#about", icon: <User className="h-5 w-5" /> },
  { name: "Projects", href: "#projects", icon: <Code className="h-5 w-5" /> },
  { name: "Experience", href: "#experience", icon: <Briefcase className="h-5 w-5" /> },
  { name: "Contact", href: "#contact", icon: <Mail className="h-5 w-5" /> },
]

export default function MobileNav() {
  const [activeSection, setActiveSection] = useState("#home")

  useEffect(() => {
    // Animate the mobile nav in
    gsap.fromTo(".mobile-nav", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" })

    // Function to determine which section is currently in view
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      let currentSection = "#home"

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const sectionHeight = section.getBoundingClientRect().height

        // If the section is in the viewport (with some buffer)
        if (sectionTop <= 200 && sectionTop + sectionHeight > 200) {
          currentSection = `#${section.id}`
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="mobile-nav fixed bottom-0 left-0 right-0 md:hidden bg-background/90 backdrop-blur-md border-t border-border z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection(item.href)
            }}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              activeSection === item.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <div>{item.icon}</div>
            <span className="text-xs mt-1">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
