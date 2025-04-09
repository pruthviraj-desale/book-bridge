"use client"

import { useEffect, useState, type ReactNode } from "react"

interface ImpactCounterProps {
  icon: ReactNode
  count: number
  label: string
}

export function ImpactCounter({ icon, count, label }: ImpactCounterProps) {
  const [currentCount, setCurrentCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 50
    const stepValue = count / steps
    const stepTime = duration / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep += 1
      setCurrentCount(Math.min(Math.round(stepValue * currentStep), count))

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [count])

  return (
    <div className="flex flex-col items-center space-y-2 brutal-card p-6">
      <div className="rounded-full bg-neon-yellow p-4 border-2 border-black">{icon}</div>
      <div className="text-4xl font-bold text-black font-display">{currentCount.toLocaleString()}</div>
      <div className="text-lg font-medium">{label}</div>
    </div>
  )
}
