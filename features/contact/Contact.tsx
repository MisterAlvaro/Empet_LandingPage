"use client"
import { ContactForm } from "./ContactForm"
import { ContactInfo } from "./ContactInfo"

export default function Contact() {
  return (
    <section className="w-full py-20 px-4 bg-gray-50" id="contacto">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#002e2f]">Contáctanos</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
