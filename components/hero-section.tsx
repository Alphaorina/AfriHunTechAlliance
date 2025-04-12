"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

interface HeroSectionProps {
  onContinue: () => void
}

export function HeroSection({ onContinue }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const colors = ["#BE0027", "#006600", "#CE2B37", "#436F4D"]

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }

      requestAnimationFrame(animate)
    }

    init()
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background z-10" />

      <div className="container relative z-20 mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-block rounded-full bg-red-100 px-4 py-1.5 text-sm font-medium text-red-800 mb-6"
        >
          Connecting Kenya & Hungary
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-green-600">
            Empowering African
          </span>
          <br />
          Innovation in Hungary
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-2xl text-xl text-foreground/80 mb-10"
        >
          Building a community of Kenyan students and entrepreneurs in Hungary to create impactful startups and
          solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white border-0"
          >
            Explore Startups
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button size="lg" variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-red-50">
            Join Our Community
          </Button>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        onClick={onContinue}
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <ChevronDown className="h-10 w-10 text-foreground/60" />
        </motion.div>
      </motion.button>
    </div>
  )
}
