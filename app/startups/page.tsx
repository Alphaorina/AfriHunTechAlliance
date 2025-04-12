import { StartupsList } from "@/components/startups-list"
import { StartupFilters } from "@/components/startup-filters"
import { getStartups } from "@/lib/notion"

export default async function StartupsPage() {
  const startups = await getStartups()

  return (
    <div className="container py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Discover Innovative Startups</h1>
        <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Explore startups founded by Kenyan students and alumni in Hungary, creating solutions for global challenges.
        </p>
      </div>

      <StartupFilters />
      <StartupsList startups={startups} />
    </div>
  )
}
