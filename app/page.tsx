"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { SectionIndicator } from "@/components/section-indicator"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { StartupShowcase } from "@/components/startup-showcase"
import { CommunitySection } from "@/components/community-section"
import { ResourcesSection } from "@/components/resources-section"
import { PartnerSection } from "@/components/partner-section"
import { JoinCTA } from "@/components/join-cta"

export default function Home() {
  const [activeSection, setActiveSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const sectionsRef = useRef<HTMLDivElement>(null)
  const sections = ["hero", "mission", "startups", "community", "resources", "partners", "join"]

  const handleWheel = (e: WheelEvent) => {
    if (isScrolling) return

    setIsScrolling(true)

    if (e.deltaY > 0 && activeSection < sections.length - 1) {
      // Scrolling down
      setActiveSection((prev) => prev + 1)
    } else if (e.deltaY < 0 && activeSection > 0) {
      // Scrolling up
      setActiveSection((prev) => prev - 1)
    }

    setTimeout(() => {
      setIsScrolling(false)
    }, 1000) // Debounce scrolling
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isScrolling) return

    setIsScrolling(true)

    if ((e.key === "ArrowDown" || e.key === "PageDown") && activeSection < sections.length - 1) {
      setActiveSection((prev) => prev + 1)
    } else if ((e.key === "ArrowUp" || e.key === "PageUp") && activeSection > 0) {
      setActiveSection((prev) => prev - 1)
    }

    setTimeout(() => {
      setIsScrolling(false)
    }, 1000)
  }

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeSection, isScrolling])

  const goToSection = (index: number) => {
    if (!isScrolling) {
      setActiveSection(index)
    }
  }

  const goToNextSection = () => {
    if (!isScrolling && activeSection < sections.length - 1) {
      setActiveSection((prev) => prev + 1)
    }
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-background relative">
      <SectionIndicator sections={sections} activeSection={activeSection} onChange={goToSection} />

      <div ref={sectionsRef} className="h-full w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full w-full"
          >
            {activeSection === 0 && <HeroSection onContinue={goToNextSection} />}

            {activeSection === 1 && <MissionSection />}

            {activeSection === 2 && <StartupShowcase />}

            {activeSection === 3 && <CommunitySection />}

            {activeSection === 4 && <ResourcesSection />}

            {activeSection === 5 && <PartnerSection />}

            {activeSection === 6 && <JoinCTA />}
          </motion.div>
        </AnimatePresence>
      </div>

      {activeSection < sections.length - 1 && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          onClick={goToNextSection}
        >
          <ChevronDown className="h-8 w-8 text-foreground/60" />
        </motion.div>
      )}
    </div>
  )
}
