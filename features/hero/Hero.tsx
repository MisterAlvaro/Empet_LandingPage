"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { motion } from "@/lib/motion-wrapper"
import Navbar from "./Navbar"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/images/banner_0.webp",
    },
    {
      image: "/images/banner_1.webp",
    },
    {
      image: "/images/banner_2.webp",
    },
    {
      image: "/images/banner_3.webp",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="w-full min-h-screen flex flex-col relative text-white">
      <Navbar />

      <div className="carousel-container flex-1 relative overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#002e2f",
            }}
          >
          </div>
        ))}

        {/* Flecha indicadora hacia abajo */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <ChevronRight className="rotate-90 w-8 h-8" />
        </div>
      </div>
    </section>
  )
}
