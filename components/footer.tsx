import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Kenyans In Hungary</h3>
          <p className="text-sm text-muted-foreground">
            Building bridges between Kenya and Hungary through innovation, education, and entrepreneurship.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/startups" className="text-muted-foreground hover:text-foreground">
                Startups
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-muted-foreground hover:text-foreground">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/events" className="text-muted-foreground hover:text-foreground">
                Events
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources/startup-guide" className="text-muted-foreground hover:text-foreground">
                Startup Guide
              </Link>
            </li>
            <li>
              <Link href="/resources/funding" className="text-muted-foreground hover:text-foreground">
                Funding Opportunities
              </Link>
            </li>
            <li>
              <Link href="/resources/mentorship" className="text-muted-foreground hover:text-foreground">
                Mentorship Program
              </Link>
            </li>
            <li>
              <Link href="/resources/universities" className="text-muted-foreground hover:text-foreground">
                Hungarian Universities
              </Link>
            </li>
            <li>
              <Link href="/resources/legal" className="text-muted-foreground hover:text-foreground">
                Legal Resources
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">Subscribe</h3>
          <p className="text-sm text-muted-foreground">
            Stay updated with our newsletter for the latest events, opportunities, and community news.
          </p>
          <div className="flex space-x-2">
            <Input type="email" placeholder="Your email" className="max-w-[220px]" />
            <Button type="submit" size="sm">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Kenyans In Hungary. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
