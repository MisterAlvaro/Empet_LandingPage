"use client"

import { useRef } from "react"
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { servicesData } from "./services-data"

export default function MainServices() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useIntersectionAnimation({
        ref: sectionRef,
        targetSelector: ".service-card",
        animationClass: "fade-in",
        threshold: 0.1,
        delay: 150,
    })

    return (
        <section ref={sectionRef} className="w-full py-20 px-4 bg-white" id="servicios">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#002e2f]">Servicios</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {servicesData.map((service, index) => (
                        <Card key={index} className="service-card overflow-hidden">
                            <div className="relative h-48 bg-gray-200">
                                <Image
                                    src={service.image}
                                    alt={service.name}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#002e2f] mb-1">{service.name}</h3>
                                <p className="text-gray-700 mb-4">{service.description}</p>
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <p className="text-[#489e6e] font-medium">Encargado: {service.manager.name}</p>
                                    <p className="text-sm text-gray-600">Teléfono: <a href={`tel:${service.manager.phone}`} className="hover:text-[#489e6e]">{service.manager.phone}</a></p>
                                    <p className="text-sm text-gray-600">Correo: <a href={`mailto:${service.manager.email}`} className="hover:text-[#489e6e]">{service.manager.email}</a></p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
} 