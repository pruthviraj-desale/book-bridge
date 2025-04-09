import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  avatarUrl: string
}

export function TestimonialCard({ quote, name, role, avatarUrl }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden brutal-card">
      <CardContent className="p-6">
        <QuoteIcon className="h-8 w-8 text-black mb-4" />
        <p className="mb-6 text-black">{quote}</p>
        <div className="flex items-center gap-4">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-black">
            <Image src={avatarUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-bold font-display">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
