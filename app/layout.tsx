import type React from "react"
import type { Metadata } from "next"
import { Inter, Rubik } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/context/cart-context"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" })

export const metadata: Metadata = {
  title: "BookShare - Affordable Books for Everyone",
  description:
    "Buy and sell second-hand books at up to 90% off. Make an impact by donating books to NGOs and orphanages.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${rubik.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CartProvider>
            <div className="flex min-h-screen flex-col bg-[#FFFAF0]">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'