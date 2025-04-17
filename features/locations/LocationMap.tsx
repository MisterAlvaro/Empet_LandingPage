"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { MapPin } from "lucide-react"
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation"
import { locationsData } from "./locations-data"
import LocationTooltip from "./LocationTooltip"

export default function LocationMap() {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useIntersectionAnimation({
    ref: sectionRef,
    targetSelector: ".map-marker",
    animationClass: "pulse",
    threshold: 0.1,
    delay: 200,
  })

  const toggleTooltip = (index: number) => {
    setActiveTooltip(activeTooltip === index ? null : index)
  }

  return (
    <section ref={sectionRef} className="w-full py-20 px-4 bg-white" id="localizaciones">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#002e2f]">Nuestras Localizaciones</h2>
        <div className="relative w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Mapa de Cuba"
            width={1200}
            height={400}
            className="w-full h-full object-cover"
          />
          {locationsData.map((location, index) => (
            <div
              key={location.id}
              className="map-marker absolute opacity-0 cursor-pointer"
              style={{ top: location.position.top, left: location.position.left }}
              onClick={() => toggleTooltip(index)}
            >
              <div className="relative">
                <MapPin className="w-8 h-8 text-[#c1303a]" />
                {activeTooltip === index && <LocationTooltip name={location.name} address={location.address} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
