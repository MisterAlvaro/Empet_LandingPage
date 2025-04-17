"use client"

import { useRef } from "react"
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation"
import AboutCard from "./AboutCard"

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useIntersectionAnimation({
    ref: sectionRef,
    targetSelector: ".about-card",
    animationClass: "slide-in-right",
    threshold: 0.1,
    delay: 200,
  })

  const aboutItems = [
    {
      title: "Misión",
      content:
        "Proveer soluciones energéticas de alta calidad que impulsen el desarrollo económico Cuba, operando con excelencia técnica y responsabilidad ambiental.",
    },
    {
      title: "Visión",
      content:
        "Ser la empresa líder en el sector energético cubano, reconocida por su innovación, eficiencia y compromiso con desarrollo sostenible del país.",
    },
    {
      title: "Política de Calidad",
      content:
        "Nos comprometemos a mantener los más altos estándares de calidad en nuestras operaciones, cumpliendo con las normativas nacionales e internacionales del sector.",
    },
  ]

  return (
    <section ref={sectionRef} className="w-full py-20 px-4 bg-white" id="nosotros">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#002e2f]">Nosotros</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => (
            <AboutCard key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </section>
  )
}
