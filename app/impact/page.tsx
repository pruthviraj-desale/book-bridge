import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Gift, Leaf, School, DollarSign, Globe } from "lucide-react"
import { impactStats, ngoPartners } from "@/app/data/constants"


export default function ImpactPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight font-display">Our Impact</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Together, we're making books accessible and creating positive change in communities around the world.
        </p>
      </div>

      {/* Impact Stats */}
      <div className="mt-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="brutal-card p-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neon-green border-2 border-black">
              <BookOpen className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-3xl font-bold font-display">{impactStats.booksShared.toLocaleString()}</h3>
            <p className="text-muted-foreground">Books Shared</p>
          </div>
          <div className="brutal-card p-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neon-pink border-2 border-black">
              <Gift className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-3xl font-bold font-display">{impactStats.booksDonated.toLocaleString()}</h3>
            <p className="text-muted-foreground">Books Donated</p>
          </div>
          <div className="brutal-card p-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neon-yellow border-2 border-black">
              <DollarSign className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-3xl font-bold font-display">${impactStats.moneyRaised.toLocaleString()}</h3>
            <p className="text-muted-foreground">Money Raised</p>
          </div>
          <div className="brutal-card p-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neon-blue border-2 border-black">
              <School className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-3xl font-bold font-display">{impactStats.schoolsSupported.toLocaleString()}</h3>
            <p className="text-muted-foreground">Schools Supported</p>
          </div>
        </div>
      </div>

      {/* Environmental Impact */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8 font-display">Environmental Impact</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="brutal-card p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neon-green border-2 border-black">
                <Leaf className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display">{impactStats.co2Saved.toLocaleString()} kg</h3>
                <p className="text-muted-foreground">CO2 Emissions Saved</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm">
                By reusing books instead of producing new ones, we've saved approximately{" "}
                {impactStats.co2Saved.toLocaleString()} kg of CO2 emissions. That's equivalent to taking{" "}
                {Math.round(impactStats.co2Saved / 4000)} cars off the road for a year!
              </p>
            </div>
          </div>
          <div className="brutal-card p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neon-green border-2 border-black">
                <Leaf className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display">{impactStats.treesPreserved.toLocaleString()}</h3>
                <p className="text-muted-foreground">Trees Preserved</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm">
                Our book reuse program has helped preserve approximately {impactStats.treesPreserved.toLocaleString()}{" "}
                trees. That's enough to produce oxygen for {impactStats.treesPreserved * 2} people for a year!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stories */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8 font-display">Impact Stories</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="brutal-card overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Rural school library"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 font-display">Rural School Library</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We helped establish a library in a rural school that previously had no access to books. Now, over 200
                students have access to educational materials.
              </p>
              <Link href="/stories/rural-school">
                <Button variant="link" className="p-0 h-auto font-bold underline">
                  Read the full story
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="brutal-card overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Community reading program"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 font-display">Community Reading Program</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our donated books helped start a community reading program that brings together people of all ages to
                share stories and build connections.
              </p>
              <Link href="/stories/community-reading">
                <Button variant="link" className="p-0 h-auto font-bold underline">
                  Read the full story
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="brutal-card overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Children's hospital program"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 font-display">Children's Hospital Program</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We provide books to children's hospitals, bringing joy and comfort to young patients during their stay.
              </p>
              <Link href="/stories/hospital-program">
                <Button variant="link" className="p-0 h-auto font-bold underline">
                  Read the full story
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* NGO Partners */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8 font-display">Our NGO Partners</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ngoPartners.map((ngo) => (
            <div key={ngo.id} className="brutal-card p-6 text-center">
              <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full border-2 border-black">
                <Image
                  src={ngo.logo || "/placeholder.svg"}
                  alt={ngo.name}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 font-display">{ngo.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{ngo.description}</p>
              <p className="text-sm font-medium">
                <span className="font-bold">{ngo.booksReceived.toLocaleString()}</span> books received
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Map */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8 font-display">Global Reach</h2>
        <div className="brutal-card p-6">
          <div className="aspect-video relative bg-gray-100 border-2 border-black">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Globe className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">
                  Our impact spans <span className="font-bold">{impactStats.communitiesReached}</span> communities
                  worldwide
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="text-center">
              <h3 className="text-xl font-bold font-display">{impactStats.communitiesReached}</h3>
              <p className="text-sm text-muted-foreground">Communities Reached</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold font-display">42</h3>
              <p className="text-sm text-muted-foreground">Countries</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold font-display">6</h3>
              <p className="text-sm text-muted-foreground">Continents</p>
            </div>
          </div>
        </div>
      </div>

      {/* Get Involved CTA */}
      <div className="mt-16 brutal-card p-8 bg-neon-yellow border-2 border-black">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4 font-display">Join Our Mission</h2>
          <p className="mb-6 text-black">
            Whether you're buying, selling, or donating, you're helping create a more literate and sustainable world.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button className="brutal-btn bg-black text-white hover:bg-gray-800">
              <Link href="/donate">Donate Books</Link>
            </Button>
            <Button className="brutal-btn-blue">
              <Link href="/volunteer">Volunteer</Link>
            </Button>
            <Button className="brutal-btn-pink">
              <Link href="/partner">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
