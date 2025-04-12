// This file contains functions to fetch data from Notion

// Mock data for development - would be replaced with actual Notion API calls
const mockStartups = [
  {
    id: "1",
    name: "AgroConnect",
    slug: "agroconnect",
    shortDescription: "Connecting small-scale farmers with markets and resources",
    industry: "AgriTech",
    stage: "Growth",
    foundedYear: "2021",
    tags: ["Agriculture", "Supply Chain", "Mobile App"],
    image: "/placeholder.svg?height=200&width=300",
    website: "https://example.com",
  },
  {
    id: "2",
    name: "MediTrack",
    slug: "meditrack",
    shortDescription: "Digital health records and telemedicine for rural communities",
    industry: "HealthTech",
    stage: "Early Stage",
    foundedYear: "2022",
    tags: ["Healthcare", "Telemedicine", "Rural Development"],
    image: "/placeholder.svg?height=200&width=300",
    website: "https://example.com",
  },
  {
    id: "3",
    name: "EduAccess",
    slug: "eduaccess",
    shortDescription: "Making quality education accessible through digital platforms",
    industry: "EdTech",
    stage: "MVP",
    foundedYear: "2023",
    tags: ["Education", "Digital Learning", "Accessibility"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    name: "CleanEnergy",
    slug: "cleanenergy",
    shortDescription: "Affordable solar solutions for homes and small businesses",
    industry: "CleanTech",
    stage: "Early Stage",
    foundedYear: "2022",
    tags: ["Renewable Energy", "Solar", "Sustainability"],
    image: "/placeholder.svg?height=200&width=300",
    website: "https://example.com",
  },
  {
    id: "5",
    name: "FinPay",
    slug: "finpay",
    shortDescription: "Mobile payment solutions for underbanked populations",
    industry: "FinTech",
    stage: "Growth",
    foundedYear: "2020",
    tags: ["Payments", "Financial Inclusion", "Mobile"],
    image: "/placeholder.svg?height=200&width=300",
    website: "https://example.com",
  },
  {
    id: "6",
    name: "WasteRecycle",
    slug: "wasterecycle",
    shortDescription: "Turning plastic waste into affordable building materials",
    industry: "CleanTech",
    stage: "Scaling",
    foundedYear: "2019",
    tags: ["Recycling", "Construction", "Sustainability"],
    image: "/placeholder.svg?height=200&width=300",
    website: "https://example.com",
  },
]

const mockResources = [
  {
    id: "1",
    title: "Startup Registration Guide",
    description: "Step-by-step guide to registering your business in Hungary",
    category: "startup",
    url: "/resources/startup-registration",
  },
  {
    id: "2",
    title: "Hungarian Scholarship Programs",
    description: "Overview of scholarship opportunities for African students",
    category: "education",
    url: "/resources/scholarships",
  },
  {
    id: "3",
    title: "EU Funding for Startups",
    description: "Guide to accessing European Union funding programs",
    category: "funding",
    url: "/resources/eu-funding",
  },
  {
    id: "4",
    title: "Networking Events Calendar",
    description: "Upcoming community events and networking opportunities",
    category: "community",
    url: "/resources/events",
  },
  {
    id: "5",
    title: "Market Entry Strategy",
    description: "How to enter the Hungarian and European markets",
    category: "startup",
    url: "/resources/market-entry",
  },
  {
    id: "6",
    title: "Visa Application Process",
    description: "Guide to student and entrepreneur visa applications",
    category: "education",
    url: "/resources/visa-guide",
  },
]

const mockTeamMembers = [
  {
    id: "1",
    name: "John Kamau",
    role: "Founder & Director",
    bio: "Former student at Budapest University of Technology with 10+ years of entrepreneurial experience",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "2",
    name: "Sarah Wanjiku",
    role: "Community Manager",
    bio: "Graduate of Corvinus University with a passion for building communities and event organization",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "3",
    name: "David Ochieng",
    role: "Startup Advisor",
    bio: "Serial entrepreneur with experience in both Kenyan and Hungarian markets",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "4",
    name: "Anna Nagy",
    role: "University Liaison",
    bio: "Professor at Budapest University with strong connections to African educational institutions",
    image: "/placeholder.svg?height=200&width=200",
  },
]

// In a real implementation, these functions would use the Notion API
// to fetch data from a Notion database

export async function getStartups() {
  // This would be replaced with actual Notion API calls
  return mockStartups
}

export async function getFeaturedStartups() {
  // This would be replaced with actual Notion API calls
  // For now, just return the first 3 startups
  return mockStartups.slice(0, 3)
}

export async function getResources() {
  // This would be replaced with actual Notion API calls
  return mockResources
}

export async function getTeamMembers() {
  // This would be replaced with actual Notion API calls
  return mockTeamMembers
}

// This would be a server action to submit contact form data to Notion
export async function submitContactForm(formData: FormData) {
  "use server"

  // In a real implementation, this would create a new page in a Notion database
  // For now, just log the form data
  console.log("Contact form submitted:", Object.fromEntries(formData.entries()))

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true }
}
