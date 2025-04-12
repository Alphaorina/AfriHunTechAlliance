"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CommunitySection() {
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

  const communityEvents = [
    {
      title: "Regular Meetups",
      description: "Join our monthly gatherings to network and share ideas",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Mentorship Program",
      description: "Get guidance from experienced entrepreneurs and professionals",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Startup Workshops",
      description: "Learn essential skills to launch and grow your business",
      image: "/placeholder.svg?height=400&width=300",
    },
  ]

  return (
    <div className="h-full w-full flex items-center justify-center overflow-hidden">
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
            className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-800 mb-6"
          >
            Our Community
          </motion.div>

          <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold text-center mb-6">
            Join Our Growing Network
          </motion.h2>

          <motion.p variants={item} className="text-xl text-center text-foreground/80 mb-16 max-w-3xl">
            Connect with fellow Africans in Hungary, share experiences, and build lasting relationships.
          </motion.p>

          <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {communityEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="relative rounded-xl overflow-hidden group"
              >
                <div className="relative h-[400px]">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-white/90">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-12">
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
              Explore Community
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
