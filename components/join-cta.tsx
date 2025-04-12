"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"

export function JoinCTA() {
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

  return (
    <div className="h-full w-full flex items-center justify-center overflow-hidden bg-gradient-to-r from-red-600 to-green-600">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={container}
          className="flex flex-col items-center text-white"
        >
          <motion.h2 variants={item} className="text-4xl md:text-6xl font-bold text-center mb-8">
            Ready to Join Our Community?
          </motion.h2>

          <motion.p variants={item} className="text-xl md:text-2xl text-center text-white/90 mb-12 max-w-3xl">
            Connect with fellow Africans in Hungary and be part of our growing ecosystem of innovation and
            collaboration.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-6">
            <Button size="lg" className="bg-white text-red-600 hover:bg-white/90 text-lg px-8 py-6 h-auto">
              Join Community
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
            >
              Submit Your Startup
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
