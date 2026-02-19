"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { FileDown, Award, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { RESUME_LINK } from "@/lib/constant";

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const elements = aboutRef.current?.querySelectorAll(".animate-item");

    if (elements) {
      gsap.fromTo(
        elements,
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );

      // Parallax effect for cards
      gsap.to(".about-card", {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-card-container",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  const highlights = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "3+ Years Experience",
      description: "Proven track record in full-stack development",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Scalable Solutions",
      description: "Building high-performance enterprise applications",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Continuous Growth",
      description:
        "Staying current with latest technologies and best practices",
    },
  ];

  useEffect(() => {
    // Reveal text animation
    gsap.from(".about-text p", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="section py-24 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="animate-item text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-emerald-400 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="animate-item text-center text-muted-foreground mb-16 text-lg">
            Passionate Software Engineer | Full-Stack Developer | Problem Solver
          </p>

          <div className="space-y-12">
            <div className="animate-item about-text">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                  <strong>Full Stack Developer</strong> with{" "}
                  <strong>3+ years of experience</strong> specializing in{" "}
                  <strong>MERN stack development</strong> and backend
                  engineering using Node.js, Express.js, and NestJS. Proven
                  expertise in building scalable, high-performance applications
                  across monolithic and microservices architectures.
                </p>
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                  Skilled in developing{" "}
                  <strong>RESTful and GraphQL APIs</strong>, integrating MongoDB
                  and PostgreSQL databases, and implementing efficient data
                  processing solutions. Experienced in{" "}
                  <strong>AWS cloud services</strong> (EC2, S3), Docker
                  containerization, and CI/CD workflows. Strong focus on system
                  reliability, cloud-native development, and delivering
                  production-grade software solutions.
                </p>
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                  Throughout my career, I have successfully delivered
                  enterprise-level solutions for diverse industries, including
                  e-commerce, procurement systems, sports management, and
                  service platforms. I excel at building robust backend systems,
                  designing efficient APIs, and implementing microservices
                  architectures that handle high traffic and complex business
                  logic.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-item about-card-container">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="about-card border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/50 bg-card/50 backdrop-blur-sm"
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4 text-primary">
                      {highlight.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="animate-item space-y-6">
              <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  Education & Qualifications
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="text-xl font-semibold mb-2">
                      Master of Computer Applications (MCA)
                    </h4>
                    <p className="text-muted-foreground mb-1">
                      HNGU University, Gujarat, India
                    </p>
                    <p className="text-sm text-muted-foreground">
                      January 2022 - July 2024
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="text-xl font-semibold mb-2">
                      Bachelor of Computer Application (BCA)
                    </h4>
                    <p className="text-muted-foreground mb-1">
                      Silver Oak University, Ahmedabad, Gujarat, India
                    </p>
                    <p className="text-sm text-muted-foreground">
                      January 2019 - January 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-item flex justify-center">
              <Button
                size="lg"
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open(RESUME_LINK, "_blank")}
              >
                <FileDown className="h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
