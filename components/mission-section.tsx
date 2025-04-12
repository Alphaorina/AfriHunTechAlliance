"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Building2, HelpingHand, Users } from "lucide-react"

export function MissionSection() {
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

  const features = [
    {
      icon: GraduationCap,
      title: "Student Support",
      description: "Mentorship and resources for African students in Hungarian universities",
      color: "red",
    },
    {
      icon: Building2,
      title: "Startup Incubation",
      description: "Support for turning innovative ideas into viable businesses with global impact",
      color: "green",
    },
    {
      icon: HelpingHand,
      title: "Investment Connections",
      description: "Linking promising startups with Hungarian and international investors",
      color: "red",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Creating a supportive network for Africans in Hungary",
      color: "green",
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
            Our Mission
          </motion.div>

          <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold text-center mb-6 max-w-3xl">
            Bridging Kenya and Hungary Through Innovation
          </motion.h2>

          <motion.p variants={item} className="text-xl text-center text-foreground/80 mb-16 max-w-3xl">
            We connect African students, alumni, Hungarian investors, universities, and Kenyan stakeholders to build
            impactful startups and solutions.
          </motion.p>

          <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl"
              >
                <div className={`h-16 w-16 rounded-full bg-${feature.color}-100 flex items-center justify-center mb-6`}>
                  <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
