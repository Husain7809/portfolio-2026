"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

const experiences = [
  {
    company: "Bytes Technolab",
    role: "Software Engineer",
    location: "Ahmedabad, India",
    period: "03/2023 - Present",
    description: "A leading software development company specializing in creating scalable applications",
    responsibilities: [
      "Developed and maintained RESTful APIs and GraphQL APIs using Node.js within the Nest.js and Express.js framework, ensuring efficient and scalable solutions",
      "Designed and implemented React.js components, collaborating with frontend teams to build dynamic and interactive user interfaces",
      "Led the development of key projects across various industries, focusing on delivering scalable, high-performance back-end solutions",
      "Collaborated with front-end and DevOps teams to ensure seamless integration of back-end services with modern web technologies",
      "Contributed to the enhancement of system efficiency by implementing asynchronous programming techniques",
      "Key responsibilities included the end-to-end development of APIs, from conceptualization to implementation and maintenance",
    ],
    skills: ["Node.js", "NestJS", "Express.js", "MongoDB", "PostgreSQL", "React.js", "Microservices"],
  },
]

export default function Experience() {
  const experienceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const experienceCards = experienceRef.current?.querySelectorAll(".experience-card")

    if (experienceCards) {
      gsap.fromTo(
        experienceCards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: experienceRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    }

    const listItems = experienceRef.current?.querySelectorAll(".responsibility-item")

    if (listItems) {
      gsap.fromTo(
        listItems,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power1.out",
          scrollTrigger: {
            trigger: experienceRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      )
    }
  }, [])

  return (
    <section id="experience" ref={experienceRef} className="section py-20 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="experience-card border border-border">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{exp.description}</p>

                <div>
                  <h4 className="font-medium mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="responsibility-item flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="bg-primary/10 text-primary hover:bg-primary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
