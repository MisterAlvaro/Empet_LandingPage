"use client"

import { useRef } from "react"
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { contactsData } from "./contacts-data"

export default function MainContacts() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useIntersectionAnimation({
    ref: sectionRef,
    targetSelector: ".contact-card",
    animationClass: "fade-in",
    threshold: 0.1,
    delay: 150,
  })

  return (
    <section ref={sectionRef} className="w-full py-20 px-4 bg-white" id="directivos">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#002e2f]">Principales Contactos</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactsData.map((contact, index) => (
            <Card key={index} className="contact-card overflow-hidden">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={`/placeholder.svg?height=300&width=400&text=${contact.name}`}
                  alt={contact.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#002e2f] mb-1">{contact.name}</h3>
                <p className="text-[#489e6e] font-medium mb-4">{contact.position}</p>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[#489e6e] mr-3" />
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-gray-700 hover:text-[#489e6e] transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-[#489e6e] mr-3" />
                    <a href={`tel:${contact.phone}`} className="text-gray-700 hover:text-[#489e6e] transition-colors">
                      {contact.phone}
                    </a>
                  </div>

                  {contact.linkedin && (
                    <div className="flex items-center">
                      <Linkedin className="w-5 h-5 text-[#489e6e] mr-3" />
                      <Link
                        href={contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#489e6e] transition-colors"
                      >
                        Perfil de LinkedIn
                      </Link>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">{contact.department}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
