"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const routes = [
    { href: "/", label: "Home" },
    { href: "/startups", label: "Startups" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Kenyans In Hungary Logo"
              fill
              className="object-cover"
            />
          </div>
          <span
            className={cn(
              "font-bold text-lg transition-colors duration-300",
              scrolled || isOpen ? "text-foreground" : "text-white",
            )}
          >
            Kenyans In Hungary
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground/80",
                scrolled ? "text-foreground" : "text-white",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            variant="default"
            className={cn(
              "transition-all duration-300",
              scrolled ? "bg-red-600 hover:bg-red-700" : "bg-white text-red-600 hover:bg-white/90",
            )}
          >
            <Link href="/join">Join Community</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className={cn("md:hidden z-50", scrolled || isOpen ? "text-foreground" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center"
            >
              <nav className="flex flex-col items-center gap-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="text-xl font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}

                <Button asChild className="mt-4 bg-red-600 hover:bg-red-700">
                  <Link href="/join" onClick={() => setIsOpen(false)}>
                    Join Community
                  </Link>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
