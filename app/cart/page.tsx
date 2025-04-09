"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2, ShoppingBag, ArrowLeft, CreditCard } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart()
  const { toast } = useToast()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleCheckout = () => {
    setIsCheckingOut(true)

    // Simulate a checkout process
    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase. Your books will be on their way soon!",
        duration: 5000,
      })
      clearCart()
      setIsCheckingOut(false)
    }, 2000)
  }

  if (items.length === 0) {
    return (
      <div className="container px-4 py-16 md:px-6 text-center">
        <div className="mx-auto max-w-md">
          <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h1 className="text-3xl font-bold mb-4 font-display">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">Looks like you haven't added any books to your cart yet.</p>
          <Link href="/books">
            <Button className="brutal-btn rounded-none">Browse Books</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-display">Your Cart</h1>
        <p className="text-muted-foreground">Review your items before checkout</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="brutal-card p-6">
            <div className="divide-y-2 divide-black">
              {items.map((item) => (
                <div key={item.id} className="py-6 first:pt-0 last:pb-0">
                  <div className="flex gap-4">
                    <div className="h-24 w-16 flex-shrink-0 overflow-hidden border-2 border-black">
                      <Image
                        src={item.imageUrl || "/placeholder.svg"}
                        alt={item.title}
                        width={64}
                        height={96}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="font-bold font-display">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.author}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 border-2 border-black bg-white font-bold"
                          >
                            -
                          </button>
                          <Input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                            className="h-8 w-12 text-center brutal-input"
                          />
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 border-2 border-black bg-white font-bold"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                          <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex justify-between">
            <Link href="/books">
              <Button variant="outline" className="brutal-shadow rounded-none">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>
            <Button variant="outline" className="brutal-shadow rounded-none" onClick={clearCart}>
              <Trash2 className="mr-2 h-4 w-4" />
              Clear Cart
            </Button>
          </div>
        </div>

        <div>
          <div className="brutal-card p-6">
            <h2 className="text-xl font-bold mb-4 font-display">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between border-b-2 border-dashed border-black pb-4">
                <span>Subtotal</span>
                <span className="font-bold">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b-2 border-dashed border-black pb-4">
                <span>Shipping</span>
                <span className="font-bold">$4.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-lg font-bold">Total</span>
                <span className="text-lg font-bold">${(total + 4.99).toFixed(2)}</span>
              </div>
            </div>
            <Button
              className="mt-6 w-full brutal-btn-yellow rounded-none"
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? (
                "Processing..."
              ) : (
                <>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Checkout
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
