"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/components/ui/use-toast"

interface BookCardProps {
  title: string
  author: string
  originalPrice: number
  discountedPrice: number
  condition: string
  imageUrl: string
  id?: string
}

export function BookCard({
  title,
  author,
  originalPrice,
  discountedPrice,
  condition,
  imageUrl,
  id = "1",
}: BookCardProps) {
  const discountPercentage = Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addItem({
      id,
      title,
      author,
      price: discountedPrice,
      imageUrl,
    })

    toast({
      title: "Added to cart!",
      description: `${title} has been added to your cart.`,
      duration: 2000,
    })
  }

  return (
    <Card className="overflow-hidden brutal-card rounded-none">
      <Link href={`/books/${id}`}>
        <div className="relative aspect-[2/3] overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
          <Badge className="absolute right-2 top-2 bg-neon-yellow text-black font-bold border-2 border-black rounded-none">
            {discountPercentage}% OFF
          </Badge>
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="space-y-1">
          <Link href={`/books/${id}`} className="hover:underline">
            <h3 className="font-bold line-clamp-1 font-display">{title}</h3>
          </Link>
          <p className="text-sm text-muted-foreground">{author}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-black">${discountedPrice.toFixed(2)}</span>
              <span className="text-sm text-muted-foreground line-through">${originalPrice.toFixed(2)}</span>
            </div>
            <Badge variant="outline" className="text-xs border-2 border-black rounded-none">
              {condition}
            </Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} className="w-full brutal-btn rounded-none bg-neon-green">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
