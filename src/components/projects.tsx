"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "USA BMX (BMX Racing Organization)",
    description:
      "A comprehensive platform for BMX racing enthusiasts, providing a hub for organized races, track facilities, and a rider community.",
    role: "Backend Developer",
    tech: ["Node.js", "NestJS", "PostgreSQL"],
    responsibilities: [
      "Designed and implemented RESTful APIs using Node.js and Nest.js",
      "Integrated PostgreSQL for robust data management",
      "Ensured smooth performance during live events and user interactions",
    ],
    image: "/placeholder.svg?height=300&width=600",
    github: "#",
    demo: "#",
  },
  {
    title: "One Home Solution (OHS)",
    description: "A platform designed to streamline booking and managing home maintenance services.",
    role: "Backend Developer",
    tech: ["Node.js", "NestJS", "PostgreSQL"],
    responsibilities: [
      "Worked on implementing the appointment booking system with real-time slot availability",
      "The platform supports recurring seasonal services, such as pool maintenance",
    ],
    image: "/placeholder.svg?height=300&width=600",
    github: "#",
    demo: "#",
  },
  {
    title: "KGK (Online Jewelry Selling Platform)",
    description: "A large-scale e-commerce platform for online jewelry sales, supporting both B2B and B2C users.",
    role: "Backend Developer",
    tech: [
      "Node.js",
      "NestJS",
      "Next.js",
      "Redis",
      "Elasticsearch",
      "PostgreSQL",
      "MongoDB",
      "Strapi",
      "Microservices",
    ],
    responsibilities: [
      "Developed a multi-language, multi-currency product listing API for jewelry, diamonds, and gemstones",
      "Implemented PDD (Product Design & Development), auction, and catalog modules",
      "Built a microservices-based architecture to ensure scalability and high performance",
      "Handled large volumes of data through Kafka and Elasticsearch for fast search results",
    ],
    image: "/placeholder.svg?height=300&width=600",
    github: "#",
    demo: "#",
  },
  {
    title: "FDJ Admin Panel Platform",
    description: "An admin panel to manage and track third-party orders.",
    role: "Full Stack Developer",
    tech: ["MERN Stack", "Redis", "Bull Queue", "ShipStation API", "AWS EC2"],
    responsibilities: [
      "Built an admin panel to manage and track third-party orders",
      "Implemented order processing stages, inventory checks, and shipment tracking",
      "Developed daily/monthly reports and role-based access control (RBAC)",
      "Added currency conversion API for multi-currency transactions",
      "Deployed on AWS EC2, ensuring scalability and reliability",
    ],
    image: "/placeholder.svg?height=300&width=600",
    github: "#",
    demo: "#",
  },
]

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const projectCards = projectsRef.current?.querySelectorAll(".project-card")

    if (projectCards) {
      gsap.fromTo(
        projectCards,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      )
    }
  }, [])

  return (
    <section id="projects" ref={projectsRef} className="section py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-sm text-muted-foreground">Role: {project.role}</p>
                </div>

                <div>
                  <p className="font-medium mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-medium mb-2">Key Responsibilities:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {project.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="default" size="sm" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
