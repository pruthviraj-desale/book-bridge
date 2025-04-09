"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Menu, Search, ShoppingCart, X } from "lucide-react"
import { useCart } from "@/context/cart-context"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { itemCount } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-black" />
            <span className="text-xl font-bold font-display">BookShare</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4 font-display">
            Home
          </Link>
          <Link href="/books" className="text-sm font-medium hover:underline underline-offset-4 font-display">
            Browse Books
          </Link>
          <Link href="/sell" className="text-sm font-medium hover:underline underline-offset-4 font-display">
            Sell Books
          </Link>
          <Link href="/donate" className="text-sm font-medium hover:underline underline-offset-4 font-display">
            Donate
          </Link>
          <Link href="/impact" className="text-sm font-medium hover:underline underline-offset-4 font-display">
            Our Impact
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search books..." className="w-[200px] pl-8 md:w-[250px] brutal-input" />
          </div>
          <Link href="/cart">
            <Button variant="outline" size="icon" className="relative brutal-shadow rounded-none bg-white">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-neon-pink border-2 border-black text-[10px] font-bold text-black">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
          <Link href="/register">
            <Button className="brutal-btn rounded-none bg-neon-green">Sign Up</Button>
          </Link>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/books" className="text-sm font-medium hover:underline underline-offset-4">
              Browse Books
            </Link>
            <Link href="/sell" className="text-sm font-medium hover:underline underline-offset-4">
              Sell Books
            </Link>
            <Link href="/donate" className="text-sm font-medium hover:underline underline-offset-4">
              Donate
            </Link>
            <Link href="/impact" className="text-sm font-medium hover:underline underline-offset-4">
              Our Impact
            </Link>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search books..." className="w-full pl-8 brutal-input" />
            </div>
            <div className="flex gap-4">
              <Link href="/cart" className="flex-1">
                <Button variant="outline" className="w-full brutal-shadow rounded-none">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Cart ({itemCount})
                </Button>
              </Link>
              <Link href="/register" className="flex-1">
                <Button className="w-full brutal-btn rounded-none">Sign Up</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
