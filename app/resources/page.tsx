import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getResources } from "@/lib/notion"
import { FileText, GraduationCap, Lightbulb, Users } from "lucide-react"
import Link from "next/link"

export default async function ResourcesPage() {
  const resources = await getResources()

  return (
    <div className="container py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resources & Opportunities</h1>
        <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Access guides, funding opportunities, and educational resources to support your journey.
        </p>
      </div>

      <Tabs defaultValue="startup" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="startup">Startup Resources</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="funding">Funding</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        <TabsContent value="startup" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources
              .filter((resource) => resource.category === "startup")
              .map((resource) => (
                <Card key={resource.id}>
                  <CardHeader>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={resource.url}
                      className="text-green-600 hover:underline flex items-center"
                      target="_blank"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      View Resource
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="education" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources
              .filter((resource) => resource.category === "education")
              .map((resource) => (
                <Card key={resource.id}>
                  <CardHeader>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={resource.url}
                      className="text-green-600 hover:underline flex items-center"
                      target="_blank"
                    >
                      <GraduationCap className="h-4 w-4 mr-2" />
                      View Resource
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="funding" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources
              .filter((resource) => resource.category === "funding")
              .map((resource) => (
                <Card key={resource.id}>
                  <CardHeader>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={resource.url}
                      className="text-green-600 hover:underline flex items-center"
                      target="_blank"
                    >
                      <Lightbulb className="h-4 w-4 mr-2" />
                      View Opportunity
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="community" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources
              .filter((resource) => resource.category === "community")
              .map((resource) => (
                <Card key={resource.id}>
                  <CardHeader>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={resource.url}
                      className="text-green-600 hover:underline flex items-center"
                      target="_blank"
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Join Event
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
