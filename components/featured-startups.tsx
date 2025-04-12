import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink } from "lucide-react"
import { getFeaturedStartups } from "@/lib/notion"

export async function FeaturedStartups() {
  const startups = await getFeaturedStartups()

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-800 mb-4">
            Featured Startups
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Innovative Solutions from Kenya to Hungary
          </h2>
          <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Discover startups founded by Kenyan students and alumni in Hungary that are creating solutions for global
            challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.map((startup) => (
            <Card key={startup.id} className="overflow-hidden flex flex-col">
              <div className="relative h-48">
                <Image
                  src={startup.image || "/placeholder.svg?height=200&width=300"}
                  alt={startup.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{startup.name}</CardTitle>
                  <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">
                    {startup.stage}
                  </Badge>
                </div>
                <CardDescription>{startup.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium">Industry: </span>
                    <span className="text-sm text-muted-foreground">{startup.industry}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium">Founded: </span>
                    <span className="text-sm text-muted-foreground">{startup.foundedYear}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {startup.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/startups/${startup.slug}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {startup.website && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={startup.website} target="_blank" rel="noopener noreferrer">
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild>
            <Link href="/startups">
              View All Startups
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
