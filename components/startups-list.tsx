import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"

interface Startup {
  id: string
  name: string
  slug: string
  shortDescription: string
  industry: string
  stage: string
  foundedYear: string
  tags: string[]
  image?: string
  website?: string
}

interface StartupsListProps {
  startups: Startup[]
}

export function StartupsList({ startups }: StartupsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
  )
}
