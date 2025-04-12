import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getTeamMembers } from "@/lib/notion"

export default async function AboutPage() {
  const teamMembers = await getTeamMembers()

  return (
    <div className="container py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Kenyans In Hungary</h1>
        <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Our story, mission, and the team behind building bridges between Kenya and Hungary.
        </p>
      </div>

      <Tabs defaultValue="mission" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="mission">Our Mission</TabsTrigger>
          <TabsTrigger value="story">Our Story</TabsTrigger>
          <TabsTrigger value="team">Our Team</TabsTrigger>
        </TabsList>

        <TabsContent value="mission" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Building Bridges Through Innovation</h2>
              <p className="text-muted-foreground mb-4">
                Our mission is to create a thriving ecosystem that connects African students and entrepreneurs in
                Hungary with resources, mentorship, and investment opportunities to build innovative startups that
                address challenges in both regions.
              </p>
              <p className="text-muted-foreground mb-4">
                We believe in the power of cross-cultural collaboration and aim to leverage the unique perspectives and
                talents of Kenyans studying and working in Hungary to create impactful solutions.
              </p>
              <p className="text-muted-foreground">
                By fostering connections between Hungarian universities, investors, and Kenyan stakeholders, we create a
                supportive environment for innovation that benefits both countries.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Our mission" fill className="object-cover" />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="story" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 md:order-1">
              <Image src="/placeholder.svg?height=400&width=600" alt="Our story" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold mb-4">How We Started</h2>
              <p className="text-muted-foreground mb-4">
                Kenyans In Hungary began as a small community group of Kenyan students studying in Budapest who
                recognized the need for a support network and the untapped potential for innovation collaboration
                between the two countries.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as informal meetups quickly evolved into a structured organization as we witnessed the
                incredible ideas and entrepreneurial spirit within our community.
              </p>
              <p className="text-muted-foreground">
                Today, we've grown into a vibrant platform that not only supports the African community in Hungary but
                actively fosters startup development and cross-border innovation.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="team" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={member.image || "/placeholder.svg?height=200&width=300"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <p className="text-sm mt-2">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
