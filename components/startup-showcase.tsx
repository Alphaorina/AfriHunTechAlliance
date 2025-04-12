"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

// Mock data - would come from Notion in production
const startups = [
  {
    id: "1",
    name: "AgroConnect",
    shortDescription: "Connecting small-scale farmers with markets and resources",
    industry: "AgriTech",
    stage: "Growth",
    foundedYear: "2021",
    tags: ["Agriculture", "Supply Chain", "Mobile App"],
    image: "/placeholder.svg?height=600&width=800",
    website: "https://example.com",
  },
  {
    id: "2",
    name: "MediTrack",
    shortDescription: "Digital health records and telemedicine for rural communities",
    industry: "HealthTech",
    stage: "Early Stage",
    foundedYear: "2022",
    tags: ["Healthcare", "Telemedicine", "Rural Development"],
    image: "/placeholder.svg?height=600&width=800",
    website: "https://example.com",
  },
  {
    id: "3",
    name: "EduAccess",
    shortDescription: "Making quality education accessible through digital platforms",
    industry: "EdTech",
    stage: "MVP",
    foundedYear: "2023",
    tags: ["Education", "Digital Learning", "Accessibility"],
    image: "/placeholder.svg?height=600&width=800",
  },
]

export function StartupShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const constraintsRef = useRef(null)

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)

    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev === startups.length - 1 ? 0 : prev + 1))
    } else {
      setCurrentIndex((prev) => (prev === 0 ? startups.length - 1 : prev - 1))
    }
  }

  const startup = startups[currentIndex]

  return (
    <div className="h-full w-full flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-red-100 px-4 py-1.5 text-sm font-medium text-red-800 mb-6"
          >
            Featured Startups
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            Innovative Solutions from Kenya to Hungary
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-center text-foreground/80 max-w-3xl"
          >
            Discover startups founded by Kenyan students and alumni in Hungary that are creating solutions for global
            challenges.
          </motion.p>
        </div>

        <div ref={constraintsRef} className="relative w-full h-[500px] overflow-hidden rounded-2xl">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full"
            >
              <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="relative h-full">
                  <Image src={startup.image || "/placeholder.svg"} alt={startup.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-end p-8 md:hidden">
                    <h3 className="text-3xl font-bold text-white mb-2">{startup.name}</h3>
                    <p className="text-white/90">{startup.shortDescription}</p>
                  </div>
                </div>

                <div className="p-8 flex flex-col">
                  <div className="hidden md:block">
                    <h3 className="text-3xl font-bold mb-4">{startup.name}</h3>
                    <p className="text-xl text-foreground/80 mb-6">{startup.shortDescription}</p>
                  </div>

                  <div className="space-y-4 mt-auto">
                    <div className="flex items-center">
                      <span className="font-medium mr-2">Industry:</span>
                      <span className="text-foreground/70">{startup.industry}</span>
                    </div>

                    <div className="flex items-center">
                      <span className="font-medium mr-2">Stage:</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        {startup.stage}
                      </Badge>
                    </div>

                    <div className="flex items-center">
                      <span className="font-medium mr-2">Founded:</span>
                      <span className="text-foreground/70">{startup.foundedYear}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {startup.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-red-50 text-red-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-6">
                      <Button className="bg-green-600 hover:bg-green-700">Learn More</Button>

                      {startup.website && (
                        <Button variant="outline" asChild>
                          <a href={startup.website} target="_blank" rel="noopener noreferrer">
                            Visit Website
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
              onClick={() => paginate(-1)}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {startups.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-all duration-300",
                    index === currentIndex ? "bg-red-600 w-8" : "bg-foreground/20 hover:bg-foreground/40",
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
              onClick={() => paginate(1)}
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
