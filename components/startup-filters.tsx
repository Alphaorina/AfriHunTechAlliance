"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export function StartupFilters() {
  const [search, setSearch] = useState("")
  const [industry, setIndustry] = useState("")
  const [stage, setStage] = useState("")

  return (
    <div className="bg-muted p-4 rounded-lg mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search startups..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={industry} onValueChange={setIndustry}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Industries</SelectItem>
            <SelectItem value="fintech">FinTech</SelectItem>
            <SelectItem value="healthtech">HealthTech</SelectItem>
            <SelectItem value="edtech">EdTech</SelectItem>
            <SelectItem value="agritech">AgriTech</SelectItem>
            <SelectItem value="cleantech">CleanTech</SelectItem>
            <SelectItem value="ecommerce">E-Commerce</SelectItem>
          </SelectContent>
        </Select>

        <Select value={stage} onValueChange={setStage}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by stage" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Stages</SelectItem>
            <SelectItem value="idea">Idea Stage</SelectItem>
            <SelectItem value="mvp">MVP</SelectItem>
            <SelectItem value="early">Early Stage</SelectItem>
            <SelectItem value="growth">Growth Stage</SelectItem>
            <SelectItem value="scaling">Scaling</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-end mt-4">
        <Button
          variant="outline"
          size="sm"
          className="mr-2"
          onClick={() => {
            setSearch("")
            setIndustry("")
            setStage("")
          }}
        >
          Reset Filters
        </Button>
        <Button size="sm">Apply Filters</Button>
      </div>
    </div>
  )
}
