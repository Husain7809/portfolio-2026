"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  useEffect(() => {
    gsap.fromTo(".footer-content", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" })
  }, [])

  return (
    <footer className="bg-muted/50 border-t border-border py-6 md:py-8 mb-16 md:mb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer-content flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold text-primary">Mohammad Husain</p>
            <p className="text-sm text-muted-foreground">Software Engineer</p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/mohammad-varaliya-b23167206"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:mh.varaliya@gmail.com"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        <div className="footer-content mt-4 md:mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mohammad Husain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
