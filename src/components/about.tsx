"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = aboutRef.current?.querySelectorAll(".animate-item")

    if (elements) {
      gsap.fromTo(
        elements,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    }
  }, [])

  return (
    <section id="about" ref={aboutRef} className="section py-20">
      <div className="container mx-auto">
        <h2 className="animate-item text-3xl font-bold mb-12 text-center">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-item space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-muted-foreground">
              Skilled Software Engineer with 2+ years of experience specializing in backend development using Node.js
              and Nest.js. Proven ability to build scalable, high-performance systems while collaborating with
              cross-functional teams.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground">
              Expertise in database management, system integration, and API development, delivering efficient solutions
              that enhance operational efficiency and system reliability.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">Education</h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <p className="font-medium">Master of Computer Applications (MCA)</p>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Silver Oak University, Ahmedabad, Gujarat, India (09/2022 - 07/2024)
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Bachelor of Computer Application (BCA)</p>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      HNGU University, Gujarat, India (01/2019 - 01/2022)
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <Button className="animate-item flex items-center gap-2 bg-primary hover:bg-primary/90 text-white">
              <FileDown className="h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className="animate-item mt-6 md:mt-0">
            <div className="relative rounded-lg overflow-hidden border border-border bg-card p-1 max-w-sm mx-auto md:max-w-none">
              <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                <img
                  src="/placeholder.svg?height=500&width=500"
                  alt="Mohammad Husain"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
