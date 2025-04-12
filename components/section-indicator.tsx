"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionIndicatorProps {
  sections: string[]
  activeSection: number
  onChange: (index: number) => void
}

export function SectionIndicator({ sections, activeSection, onChange }: SectionIndicatorProps) {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
      {sections.map((section, index) => (
        <button
          key={section}
          onClick={() => onChange(index)}
          className="group relative flex items-center"
          aria-label={`Go to ${section} section`}
        >
          <div className="relative">
            <div
              className={cn(
                "h-3 w-3 rounded-full transition-all duration-300",
                activeSection === index ? "bg-red-600" : "bg-foreground/20 group-hover:bg-foreground/40",
              )}
            />
            {activeSection === index && (
              <motion.div
                layoutId="activeDot"
                className="absolute inset-0 h-3 w-3 rounded-full border-2 border-red-600"
                initial={{ scale: 0 }}
                animate={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
          <div className="overflow-hidden">
            <div
              className={cn(
                "pl-4 text-sm font-medium capitalize transition-all duration-300 whitespace-nowrap",
                activeSection === index
                  ? "translate-x-0 opacity-100"
                  : "translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
              )}
            >
              {section}
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}
