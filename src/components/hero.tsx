"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(".hero-name", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })
      .fromTo(".hero-title", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8")
      .fromTo(
        ".hero-description",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8",
      )
      .fromTo(".hero-button", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8")

    // Continuous subtle animation for the arrow
    gsap.to(".scroll-arrow", {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    })
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="section min-h-screen flex flex-col justify-center items-center text-center py-20 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="hero-name text-3xl sm:text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">
          MOHAMMAD HUSAIN
        </h1>
        <h2 className="hero-title text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-foreground">
          Software Engineer
        </h2>
        <p className="hero-description text-base sm:text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Skilled backend developer specializing in Node.js and Nest.js with 2+ years of experience building scalable,
          high-performance systems.
        </p>
        <div className="hero-button flex justify-center space-x-4">
          <Button size="lg" onClick={scrollToAbout} className="bg-primary hover:bg-primary/90 text-white">
            Explore My Work
          </Button>
        </div>

        <div
          className="absolute bottom-24 md:bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <ArrowDown className="scroll-arrow h-8 w-8 text-primary" />
        </div>
      </div>
    </section>
  )
}
