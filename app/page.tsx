import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookHeart, BookOpen, Gift, Users } from "lucide-react"
import { BookCard } from "@/components/book-card"
import { ImpactCounter } from "@/components/impact-counter"
import { TestimonialCard } from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-neon-green py-20 border-b-2 border-black">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-display">
                Books that make a difference
              </h1>
              <p className="max-w-[600px] text-black md:text-xl">
                Buy second-hand books at up to 90% off, sell your used books, or donate to help NGOs and orphanages.
                Every book has a story beyond its pages.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="brutal-btn-blue rounded-none">
                  <Link href="/books">Browse Books</Link>
                </Button>
                <Button asChild size="lg" className="brutal-btn-pink rounded-none">
                  <Link href="/donate">Donate Books</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px]">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-40 w-32 rotate-[-15deg] rounded-none bg-white border-2 border-black shadow-brutal transform-gpu transition-transform hover:rotate-[-5deg] hover:shadow-brutal-lg"></div>
                  <div className="h-40 w-32 rotate-[5deg] rounded-none bg-white border-2 border-black shadow-brutal transform-gpu transition-transform hover:rotate-[15deg] hover:shadow-brutal-lg"></div>
                  <div className="h-40 w-32 rotate-[15deg] rounded-none bg-white border-2 border-black shadow-brutal transform-gpu transition-transform hover:rotate-[5deg] hover:shadow-brutal-lg"></div>
                  <div className="h-40 w-32 rotate-[-5deg] rounded-none bg-white border-2 border-black shadow-brutal transform-gpu transition-transform hover:rotate-[-15deg] hover:shadow-brutal-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display">How It Works</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our community of book lovers and make a difference with every book
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 brutal-card p-6">
              <div className="rounded-full bg-neon-green p-4 border-2 border-black">
                <BookOpen className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold font-display">Buy Books</h3>
              <p className="text-center text-gray-500">
                Browse our collection of second-hand books at up to 90% off retail prices.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 brutal-card p-6">
              <div className="rounded-full bg-neon-pink p-4 border-2 border-black">
                <BookHeart className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold font-display">Sell Books</h3>
              <p className="text-center text-gray-500">
                List your used books and give them a second life while earning some money.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 brutal-card p-6">
              <div className="rounded-full bg-neon-yellow p-4 border-2 border-black">
                <Gift className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold font-display">Donate Books</h3>
              <p className="text-center text-gray-500">
                Donate books to NGOs and orphanages to help those who need them most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="bg-[#F5F5F5] py-16 border-y-2 border-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display">
                Featured Books
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover amazing reads at unbeatable prices
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <BookCard
              title="To Kill a Mockingbird"
              author="Harper Lee"
              originalPrice={15.99}
              discountedPrice={1.99}
              condition="Good"
              imageUrl="/placeholder.svg?height=200&width=150"
            />
            <BookCard
              title="1984"
              author="George Orwell"
              originalPrice={12.99}
              discountedPrice={1.49}
              condition="Very Good"
              imageUrl="/placeholder.svg?height=200&width=150"
            />
            <BookCard
              title="The Great Gatsby"
              author="F. Scott Fitzgerald"
              originalPrice={14.99}
              discountedPrice={1.79}
              condition="Like New"
              imageUrl="/placeholder.svg?height=200&width=150"
            />
            <BookCard
              title="Pride and Prejudice"
              author="Jane Austen"
              originalPrice={11.99}
              discountedPrice={1.29}
              condition="Acceptable"
              imageUrl="/placeholder.svg?height=200&width=150"
            />
          </div>
          <div className="flex justify-center">
            <Button asChild size="lg" className="brutal-btn rounded-none">
              <Link href="/books">View All Books</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display">Our Impact</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Together, we're making books accessible and creating a positive change
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <ImpactCounter icon={<BookOpen className="h-8 w-8 text-black" />} count={25000} label="Books Shared" />
            <ImpactCounter icon={<Users className="h-8 w-8 text-black" />} count={5000} label="Happy Readers" />
            <ImpactCounter icon={<Gift className="h-8 w-8 text-black" />} count={7500} label="Books Donated" />
          </div>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="brutal-btn-yellow rounded-none">
              <Link href="/impact">Learn More About Our Impact</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-neon-blue py-16 border-y-2 border-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display">
                What Our Community Says
              </h2>
              <p className="max-w-[700px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from people who are part of our book-sharing journey
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="I've saved so much money buying books from BookShare. The condition is always as described, and I love knowing I'm helping reduce waste."
              name="Sarah Johnson"
              role="Book Lover"
              avatarUrl="/placeholder.svg?height=40&width=40"
            />
            <TestimonialCard
              quote="As a college student, textbooks were always a huge expense. Thanks to BookShare, I can afford all my course materials and even have money left for leisure reading!"
              name="Michael Chen"
              role="Student"
              avatarUrl="/placeholder.svg?height=40&width=40"
            />
            <TestimonialCard
              quote="Our orphanage has received hundreds of books through BookShare's donation program. The children are so excited to have access to these stories."
              name="Priya Sharma"
              role="NGO Director"
              avatarUrl="/placeholder.svg?height=40&width=40"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neon-pink py-16 border-b-2 border-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display">
                Join Our Mission
              </h2>
              <p className="max-w-[700px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Whether you're buying, selling, or donating, you're helping create a more literate and sustainable world
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="brutal-btn-yellow rounded-none">
                <Link href="/register">Sign Up Now</Link>
              </Button>
              <Button asChild size="lg" className="brutal-btn-blue rounded-none">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
