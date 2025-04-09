import { BookCard } from "@/components/book-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"

export default function BooksPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Browse Books</h1>
          <p className="text-muted-foreground">Find your next favorite read at up to 90% off</p>
        </div>
        <div className="flex w-full items-center gap-2 md:w-auto">
          <div className="relative flex-1 md:w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search books..." className="pl-8 rounded-lg" />
          </div>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest Arrivals</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="discount">Biggest Discount</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Filters */}
        <div className="space-y-6 rounded-lg border p-4">
          <div>
            <h3 className="mb-4 text-lg font-medium">Categories</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="fiction" />
                <Label htmlFor="fiction">Fiction</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="non-fiction" />
                <Label htmlFor="non-fiction">Non-Fiction</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="children" />
                <Label htmlFor="children">Children's Books</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="textbooks" />
                <Label htmlFor="textbooks">Textbooks</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="self-help" />
                <Label htmlFor="self-help">Self-Help</Label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Condition</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="like-new" />
                <Label htmlFor="like-new">Like New</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="very-good" />
                <Label htmlFor="very-good">Very Good</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="good" />
                <Label htmlFor="good">Good</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="acceptable" />
                <Label htmlFor="acceptable">Acceptable</Label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Price Range</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <Label htmlFor="min-price">Min</Label>
                <Input id="min-price" type="number" placeholder="$0" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="max-price">Max</Label>
                <Input id="max-price" type="number" placeholder="$20" />
              </div>
            </div>
          </div>

          <Button className="w-full bg-green-600 hover:bg-green-700">Apply Filters</Button>
        </div>

        {/* Books Grid */}
        <div className="col-span-1 md:col-span-3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <BookCard
              title="To Kill a Mockingbird"
              author="Harper Lee"
              originalPrice={15.99}
              discountedPrice={1.99}
              condition="Good"
              imageUrl="/placeholder.svg?height=200&width=150"
              id="1"
            />
            <BookCard
              title="1984"
              author="George Orwell"
              originalPrice={12.99}
              discountedPrice={1.49}
              condition="Very Good"
              imageUrl="/placeholder.svg?height=200&width=150"
              id="2"
            />
            <BookCard
              title="The Great Gatsby"
              author="F. Scott Fitzgerald"
              originalPrice={14.99}
              discountedPrice={1.79}
              condition="Like New"
              imageUrl="/placeholder.svg?height=200&width=150"
              id="3"
            />
            <BookCard
              title="Pride and Prejudice"
              author="Jane Austen"
              originalPrice={11.99}
              discountedPrice={1.29}
              condition="Acceptable"
              imageUrl="/placeholder.svg?height=200&width=150"
              id="4"
            />
            <BookCard
              title="The Catcher in the Rye"
              author="J.D. Salinger"
              originalPrice={13.99}
              discountedPrice={1.59}
              condition="Good"
              imageUrl="/placeholder.svg?height=200&width=150"
              id="5"
            />
            <BookCard
              title="Lord of the Flies"
              author="William Golding"
              originalPrice={10.99}
              discountedPrice={1.19}
              condition="Very Good"
              imageUrl="/placeholder.svg?height=200&width=150"
              id="6"
            />
            <BookCard
              title="The Hobbit"
              author="J.R.R. Tolkien"
              originalPrice={16.99}
              discountedPrice={1.89}
              condition="Good"
              imageUrl="/placeholder.svg?height=200&width=150"
              id="7"
            />
            <BookCard
              title="Brave New World"
              author="Aldous Huxley"
              originalPrice={12.99}
              discountedPrice={1.39}
              condition="Acceptable"
              imageUrl="/placeholder.svg?height=200&width=150"
              id="8"
            />
            <BookCard
              title="The Alchemist"
              author="Paulo Coelho"
              originalPrice={11.99}
              discountedPrice={1.29}
              condition="Like New"
              imageUrl="/placeholder.svg?height=200&width=150"
              id="9"
            />
            <BookCard
              title="Animal Farm"
              author="George Orwell"
              originalPrice={9.99}
              discountedPrice={0.99}
              condition="Good"
              imageUrl="/placeholder.svg?height=200&width=150"
              id="10"
            />
            <BookCard
              title="The Little Prince"
              author="Antoine de Saint-Exupéry"
              originalPrice={8.99}
              discountedPrice={0.89}
              condition="Very Good"
              imageUrl="/placeholder.svg?height=200&width=150"
              id="11"
            />
            <BookCard
              title="Fahrenheit 451"
              author="Ray Bradbury"
              originalPrice={10.99}
              discountedPrice={1.09}
              condition="Good"
              imageUrl="/placeholder.svg?height=200&width=150"
              id="12"
            />
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" disabled>
                &lt;
              </Button>
              <Button variant="outline" size="sm" className="bg-green-600 text-white hover:bg-green-700">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="icon">
                &gt;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
