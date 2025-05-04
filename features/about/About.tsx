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
        "Prestar servicios especializados a la industria petrolera en la construcción, mantenimiento y reparación de capacidades de almacenamiento de hidrocarburos y sus derivados. Nos destacamos por el uso de tecnología de avanzada, nuestro compromiso con la vida y el medioambiente, y la alta profesionalidad de nuestro personal.",
    },
    {
      title: "Visión",
      content:
        "Ser una empresa de excelencia en la construcción, mantenimiento y reparación de capacidades de almacenamiento de hidrocarburos y sus derivados, reconocida por nuestra calidad y profesionalismo en el sector petrolero.",
    },
    {
      title: "Política de Calidad",
      content:
        "Nos comprometemos a satisfacer los requerimientos y expectativas de nuestros clientes mediante servicios especializados de alta calidad. Contamos con un sistema de gestión basado en la norma NC ISO 9001:2015 y un equipo competente en constante capacitación, motivado y comprometido con valores éticos. Garantizamos la disponibilidad de recursos y la mejora continua de nuestros procesos.",
    },
    {
      title: "Valores Fundamentales",
      content:
        "Nos distinguimos por nuestra fidelidad a los principios, honestidad en nuestro actuar, profesionalidad en nuestros servicios, creatividad en la búsqueda de soluciones y espíritu de colaboración. Estos valores guían nuestro comportamiento y definen nuestra cultura organizacional.",
    }
  ]

  return (
    <section ref={sectionRef} className="w-full py-20 px-4 bg-white" id="nosotros">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#002e2f]">Nosotros</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {aboutItems.map((item, index) => (
            <AboutCard key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </section>
  )
}
