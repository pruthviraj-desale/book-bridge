import Link from "next/link"
import { BookOpen, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t-2 border-black py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-black" />
              <span className="text-xl font-bold font-display">BookShare</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Making books accessible to everyone while creating a positive impact on society.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-black">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-black">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-black">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold font-display">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/books" className="text-muted-foreground hover:text-black">
                  All Books
                </Link>
              </li>
              <li>
                <Link href="/books/fiction" className="text-muted-foreground hover:text-black">
                  Fiction
                </Link>
              </li>
              <li>
                <Link href="/books/non-fiction" className="text-muted-foreground hover:text-black">
                  Non-Fiction
                </Link>
              </li>
              <li>
                <Link href="/books/children" className="text-muted-foreground hover:text-black">
                  Children's Books
                </Link>
              </li>
              <li>
                <Link href="/books/textbooks" className="text-muted-foreground hover:text-black">
                  Textbooks
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold font-display">Sell & Donate</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sell" className="text-muted-foreground hover:text-black">
                  Sell Your Books
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-muted-foreground hover:text-black">
                  Donate Books
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-muted-foreground hover:text-black">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-muted-foreground hover:text-black">
                  NGO Partners
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold font-display">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-black">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-black">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-black">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-black">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-black">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t-2 border-black pt-6 text-center text-sm text-muted-foreground">
          <p>© 2025 BookShare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
