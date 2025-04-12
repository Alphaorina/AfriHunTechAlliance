"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function PartnerSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  }

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
            Partnerships
          </motion.div>

          <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold text-center mb-6">
            Our Partners and Supporters
          </motion.h2>

          <motion.p variants={item} className="text-xl text-center text-foreground/80 mb-16 max-w-3xl">
            We collaborate with universities, businesses, and organizations in both Hungary and Kenya.
          </motion.p>

          <motion.div
            variants={container}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center w-full mb-16"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
                className="relative h-20 w-32 md:h-24 md:w-40 filter grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src="/placeholder.svg?height=100&width=160"
                  alt={`Partner logo ${i + 1}`}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
            <motion.div variants={item} className="space-y-6">
              <h3 className="text-3xl font-bold">Become a Partner</h3>
              <p className="text-lg text-foreground/80">
                We're always looking for new partners who share our vision of fostering innovation and collaboration
                between Kenya and Hungary.
              </p>
              <p className="text-lg text-foreground/80">
                Whether you're a university, business, investor, or organization, we'd love to explore how we can work
                together to support African students and entrepreneurs in Hungary.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image src="/placeholder.svg?height=400&width=600" alt="Partnership" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-red-600/30" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
