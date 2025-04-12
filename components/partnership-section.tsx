import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PartnershipSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-4">Partnerships</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Partners and Supporters</h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            We collaborate with universities, businesses, and organizations in both Hungary and Kenya.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="relative h-20 w-32 md:h-24 md:w-40">
              <Image
                src="/placeholder.svg?height=100&width=160"
                alt={`Partner logo ${i + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Become a Partner</h3>
            <p className="text-muted-foreground">
              We're always looking for new partners who share our vision of fostering innovation and collaboration
              between Kenya and Hungary.
            </p>
            <p className="text-muted-foreground">
              Whether you're a university, business, investor, or organization, we'd love to explore how we can work
              together to support African students and entrepreneurs in Hungary.
            </p>
            <Button asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=300&width=500" alt="Partnership" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
