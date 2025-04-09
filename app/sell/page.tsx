"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookPlus, Upload } from "lucide-react"

export default function SellPage() {
  const [images, setImages] = useState<string[]>([])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      setImages((prev) => [...prev, ...newImages])
    }
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Sell Your Books</h1>
          <p className="mt-2 text-muted-foreground">
            List your used books and give them a second life while earning some money
          </p>
        </div>

        <Tabs defaultValue="single" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="single">List a Single Book</TabsTrigger>
            <TabsTrigger value="bulk">Bulk Upload</TabsTrigger>
          </TabsList>
          <TabsContent value="single">
            <Card>
              <CardHeader>
                <CardTitle>Book Details</CardTitle>
                <CardDescription>Enter the details of the book you want to sell</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="title">Book Title</Label>
                      <Input id="title" placeholder="Enter the book title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="author">Author</Label>
                      <Input id="author" placeholder="Enter the author's name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="isbn">ISBN (Optional)</Label>
                      <Input id="isbn" placeholder="Enter ISBN if available" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fiction">Fiction</SelectItem>
                          <SelectItem value="non-fiction">Non-Fiction</SelectItem>
                          <SelectItem value="children">Children's Books</SelectItem>
                          <SelectItem value="textbooks">Textbooks</SelectItem>
                          <SelectItem value="self-help">Self-Help</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="condition">Condition</Label>
                      <Select>
                        <SelectTrigger id="condition">
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="like-new">Like New</SelectItem>
                          <SelectItem value="very-good">Very Good</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                          <SelectItem value="acceptable">Acceptable</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Your Price ($)</Label>
                      <Input id="price" type="number" placeholder="Enter your asking price" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe the book's condition, any highlights or notes, etc."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Book Images</Label>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                      {images.map((image, index) => (
                        <div key={index} className="relative aspect-square overflow-hidden rounded-md border">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Book image ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                      <label
                        htmlFor="image-upload"
                        className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-md border border-dashed text-muted-foreground hover:bg-muted/50"
                      >
                        <Upload className="mb-2 h-6 w-6" />
                        <span className="text-xs">Upload Image</span>
                        <input
                          id="image-upload"
                          type="file"
                          accept="image/*"
                          multiple
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                      </label>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Upload up to 4 images of your book. Include front cover, back cover, and any damage.
                    </p>
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <BookPlus className="mr-2 h-4 w-4" />
                  List Book for Sale
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="bulk">
            <Card>
              <CardHeader>
                <CardTitle>Bulk Upload</CardTitle>
                <CardDescription>Upload multiple books at once using our template</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 font-medium">How it works:</h3>
                  <ol className="ml-4 list-decimal space-y-2 text-sm text-muted-foreground">
                    <li>Download our Excel template below</li>
                    <li>Fill in the details for each book you want to sell</li>
                    <li>Upload the completed file</li>
                    <li>Review and confirm your listings</li>
                  </ol>
                </div>

                <div className="flex justify-center">
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    Download Template
                  </Button>
                </div>

                <div className="rounded-lg border border-dashed p-8">
                  <div className="flex flex-col items-center justify-center text-center">
                    <Upload className="mb-4 h-8 w-8 text-muted-foreground" />
                    <h3 className="mb-2 text-lg font-medium">Upload Your File</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Drag and drop your completed Excel file here, or click to browse
                    </p>
                    <label htmlFor="bulk-upload">
                      <Button variant="secondary" className="cursor-pointer">
                        Browse Files
                      </Button>
                      <input id="bulk-upload" type="file" accept=".xlsx,.xls,.csv" className="hidden" />
                    </label>
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700" disabled>
                  Upload and Review
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
