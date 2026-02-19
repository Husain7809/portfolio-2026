"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { RESUME_LINK } from "@/lib/constant";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Reset initial states
    gsap.set(
      [
        ".hero-badge",
        ".hero-name",
        ".hero-title",
        ".hero-description",
        ".hero-button",
        ".hero-stats",
      ],
      {
        y: 30,
        opacity: 0,
      },
    );

    tl.to(".hero-badge", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
    })
      .to(
        ".hero-name",
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.6",
      )
      .to(
        ".hero-title",
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.8",
      )
      .to(
        ".hero-description",
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.8",
      )
      .to(
        ".hero-button",
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.8",
      )
      .to(
        ".hero-stats",
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
        },
        "-=0.8",
      );

    // Continuous subtle animation for the arrow
    gsap.to(".scroll-arrow", {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Floating animation for stats
    gsap.to(".stat-card", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: {
        each: 0.2,
        from: "center",
      },
    });
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="section min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center text-center py-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-shape-1 absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="bg-shape-2 absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="hero-badge mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Software Engineer | Full-Stack Developer
          </span>
        </div>
        <h1 className="hero-name text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-emerald-400 to-primary text-transparent bg-clip-text leading-tight">
          MOHAMMAD HUSAIN
        </h1>
        <h2 className="hero-title text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-foreground">
          Building Scalable Solutions for Modern Businesses
        </h2>
        <p className="hero-description text-lg sm:text-xl md:text-2xl mb-10 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Experienced <strong>Software Engineer</strong> with{" "}
          <strong>3+ years</strong> of expertise in developing enterprise-level
          applications using <strong>MERN stack</strong>, microservices
          architecture, and cloud technologies. Passionate about creating
          efficient, scalable solutions that drive business growth.
        </p>
        <div className="hero-button flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <Button
            size="lg"
            onClick={scrollToAbout}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Explore My Work
            <ArrowDown className="ml-2 h-5 w-5 scroll-arrow" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open(RESUME_LINK, "_blank")}
            className="px-8 py-6 text-lg border-2 hover:bg-primary/10 transition-all duration-300"
          >
            View Resume
          </Button>
        </div>

        <div className="hero-stats grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="stat-card text-center p-6 rounded-2xl glass shadow-xl hover:border-primary/50 transition-colors group">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              3+
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
              Years Experience
            </div>
          </div>
          <div className="stat-card text-center p-6 rounded-2xl glass shadow-xl hover:border-primary/50 transition-colors group">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              10+
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
              Projects Delivered
            </div>
          </div>
          <div className="stat-card text-center p-6 rounded-2xl glass shadow-xl hover:border-primary/50 transition-colors group">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              5+
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
              Technologies
            </div>
          </div>
          <div className="stat-card text-center p-6 rounded-2xl glass shadow-xl hover:border-primary/50 transition-colors group">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              100%
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
              Dedication
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
