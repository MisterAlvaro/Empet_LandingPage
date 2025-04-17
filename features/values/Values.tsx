"use client"

import { useRef } from "react"
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation"
import { valuesData } from "./values-data"
import ValueCard from "./ValueCard"

export default function Values() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useIntersectionAnimation({
    ref: sectionRef,
    targetSelector: ".value-card",
    animationClass: "fade-in",
    threshold: 0.1,
    delay: 200,
  })

  return (
    <section ref={sectionRef} className="w-full py-20 px-4 bg-gray-50" id="valores">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#002e2f]">Nuestros Valores</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {valuesData.map((value, index) => (
            <ValueCard key={index} icon={value.icon} title={value.title} description={value.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
