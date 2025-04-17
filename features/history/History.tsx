"use client"

import { useRef } from "react"
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { historyData } from "./history-data"

export default function History() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useIntersectionAnimation({
    ref: sectionRef,
    targetSelector: ".history-item",
    animationClass: "fade-in",
    threshold: 0.1,
    delay: 200,
  })

  return (
    <section ref={sectionRef} className="w-full py-20 px-4 bg-gray-50" id="historia">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#002e2f]">Reseña Histórica</h2>

        <div className="relative">
          {/* Línea vertical de la cronología */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#489e6e] transform -translate-x-1/2"></div>

          {historyData.map((item, index) => (
            <div
              key={index}
              className={`history-item opacity-0 mb-16 md:mb-0 md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              <div className="md:w-1/2 p-4">
                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#489e6e] text-white font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-[#002e2f]">{item.title}</h3>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                  {item.achievements && (
                    <ul className="mt-4 list-disc list-inside text-gray-700">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </Card>
              </div>

              <div className="hidden md:flex md:w-1/2 p-4 items-center justify-center">
                <div className="relative">
                  {/* Punto en la línea de tiempo */}
                  <div className="absolute left-0 top-1/2 w-6 h-6 bg-[#c1303a] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>

                  {/* Imagen */}
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=${item.year}`}
                      alt={item.title}
                      width={500}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
