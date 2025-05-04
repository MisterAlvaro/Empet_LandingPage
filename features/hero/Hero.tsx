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
      image: "/images/banner_1.webp",
      title: "Empet",
      subtitle: "Impulsando el desarrollo energético de Cuba con excelencia y compromiso",
    },
    {
      image: "/images/banner_2.webp",
      title: "Innovación Energética",
      subtitle: "Tecnología de vanguardia para un futuro sostenible",
    },
    {
      image: "/images/banner_3.webp",
      title: "Compromiso Ambiental",
      subtitle: "Desarrollando soluciones que respetan nuestro entorno natural",
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
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
              <Button
                className="btn-primary bg-[#489e6e] hover:bg-[#3a7d58] text-white px-8 py-6 text-lg"
                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contáctanos <ChevronRight className="ml-2" />
              </Button>
            </div>
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
