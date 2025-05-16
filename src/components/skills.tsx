"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "NestJS", "REST", "GraphQL", "Microservices"],
  },
  {
    name: "Frontend",
    skills: ["React.js", "Next.js"],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Elasticsearch", "Redis"],
  },
  {
    name: "DevOps & Cloud",
    skills: ["Docker", "AWS", "EC2", "S3"],
  },
  {
    name: "Message Brokers",
    skills: ["Kafka", "RabbitMQ"],
  },
  {
    name: "Other",
    skills: ["Git", "GitHub", "DSA", "Problem Solving", "E-Commerce"],
  },
]

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const categories = skillsRef.current?.querySelectorAll(".skill-category")

    if (categories) {
      gsap.fromTo(
        categories,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    }

    const badges = skillsRef.current?.querySelectorAll(".skill-badge")

    if (badges) {
      gsap.fromTo(
        badges,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      )
    }
  }, [])

  return (
    <section id="skills" ref={skillsRef} className="section py-20 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-category bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    className="skill-badge bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
