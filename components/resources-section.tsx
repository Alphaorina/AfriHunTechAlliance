"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, FileText, GraduationCap, Lightbulb } from "lucide-react"

export function ResourcesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  }

  const resources = [
    {
      icon: GraduationCap,
      title: "Educational Resources",
      description: "Guides for navigating Hungarian universities and scholarship opportunities",
      color: "green",
      items: ["Scholarship application guides", "Language learning resources", "University program directories"],
    },
    {
      icon: Lightbulb,
      title: "Startup Resources",
      description: "Tools and guides for launching and growing your startup",
      color: "red",
      items: ["Business plan templates", "Market research guides", "Pitch deck examples"],
    },
    {
      icon: FileText,
      title: "Funding Opportunities",
      description: "Information on grants, investors, and funding programs",
      color: "green",
      items: ["Hungarian grant programs", "Investor networks", "EU funding opportunities"],
    },
    {
      icon: BookOpen,
      title: "Legal Resources",
      description: "Guidance on visas, business registration, and legal requirements",
      color: "red",
      items: ["Visa application guides", "Business registration process", "Intellectual property protection"],
    },
  ]

  return (
    <div className="h-full w-full flex items-center justify-center overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={container}
          className="flex flex-col items-center"
        >
          <motion.div
            variants={item}
            className="inline-block rounded-full bg-red-100 px-4 py-1.5 text-sm font-medium text-red-800 mb-6"
          >
            Resources
          </motion.div>

          <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold text-center mb-6">
            Tools for Success
          </motion.h2>

          <motion.p variants={item} className="text-xl text-center text-foreground/80 mb-16 max-w-3xl">
            Access guides, funding opportunities, and educational resources to support your journey.
          </motion.p>

          <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300"
              >
                <div
                  className={`h-16 w-16 rounded-full bg-${resource.color}-100 flex items-center justify-center mb-6`}
                >
                  <resource.icon className={`h-8 w-8 text-${resource.color}-600`} />
                </div>

                <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                <p className="text-foreground/70 mb-6">{resource.description}</p>

                <ul className="space-y-2 mb-6">
                  {resource.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <ArrowRight className={`h-3 w-3 mr-2 text-${resource.color}-600`} />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="ghost"
                  size="sm"
                  className={`text-${resource.color}-600 hover:text-${resource.color}-700 hover:bg-${resource.color}-50 p-0`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
            >
              View All Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
