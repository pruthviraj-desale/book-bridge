import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift, BookHeart, Truck, Users, CheckCircle } from "lucide-react"

export default function DonatePage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Donate Books, Change Lives</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your donated books can help children, students, and communities in need. Join our mission to spread knowledge
          and joy.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Children reading books"
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center text-white">
            <h2 className="text-3xl font-bold">10,000+</h2>
            <p className="text-xl">Books donated to date</p>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-green-100 p-2">
              <BookHeart className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-medium">Support Education</h3>
              <p className="text-muted-foreground">
                Your donated books help students who can't afford educational materials.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-green-100 p-2">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-medium">Help Communities</h3>
              <p className="text-muted-foreground">
                We partner with NGOs and orphanages to provide books to underserved communities.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-green-100 p-2">
              <Truck className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-medium">Free Pickup</h3>
              <p className="text-muted-foreground">We offer free pickup services for bulk donations in select areas.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-2xl font-bold">How to Donate</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <Gift className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>1. Prepare Your Books</CardTitle>
              <CardDescription>Gather books in good condition that you'd like to donate.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="ml-5 list-disc space-y-2 text-sm text-muted-foreground">
                <li>Books should be in readable condition</li>
                <li>Remove any personal information</li>
                <li>Sort books by category if possible</li>
                <li>Pack them securely in boxes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>2. Schedule a Donation</CardTitle>
              <CardDescription>Choose how you want to donate your books.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="ml-5 list-disc space-y-2 text-sm text-muted-foreground">
                <li>Drop off at our collection centers</li>
                <li>Schedule a free pickup (for 20+ books)</li>
                <li>Ship to our processing center</li>
                <li>Donate at partner bookstores</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <BookHeart className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>3. Make an Impact</CardTitle>
              <CardDescription>Your books will help those who need them most.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="ml-5 list-disc space-y-2 text-sm text-muted-foreground">
                <li>Receive a donation certificate</li>
                <li>Track where your books are going</li>
                <li>Get updates on the impact</li>
                <li>Tax deduction receipt available</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16 rounded-lg bg-green-50 p-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Ready to Donate?</h2>
          <p className="mt-2 text-muted-foreground">
            Fill out our quick form to schedule a donation or find the nearest drop-off location.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Schedule a Donation
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              Find Drop-off Locations
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-2xl font-bold">Our Partner Organizations</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="mb-4 h-20 w-20 rounded-full bg-gray-200"></div>
              <h3 className="text-lg font-medium">NGO Partner {i}</h3>
              <p className="text-center text-sm text-muted-foreground">Supporting education and literacy programs.</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">Have Questions?</h2>
        <p className="mt-2 text-muted-foreground">
          Contact our donation team for more information or special arrangements.
        </p>
        <div className="mt-4">
          <Button variant="link" className="text-green-600">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
