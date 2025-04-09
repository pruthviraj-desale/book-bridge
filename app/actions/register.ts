"use server"

import { z } from "zod"

// Mock database of users
const users: Array<{
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  createdAt: Date
}> = []

const userSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
})

export async function registerUser(userData: z.infer<typeof userSchema>) {
  const validatedData = userSchema.parse(userData)

  const existingUser = users.find((user) => user.email === validatedData.email)
  if (existingUser) {
    throw new Error("A user with this email already exists")
  }

  const newUser = {
    id: Math.random().toString(36).substring(2, 15),
    ...validatedData,
    createdAt: new Date(),
  }

  users.push(newUser)

  return { success: true }
}
