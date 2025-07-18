"use client"
import { ContactForm } from "./ContactForm"
import { Map } from "./Map"

export default function Contact() {
  return (
    <section className="w-full py-20 px-4 bg-gray-50" id="contacto">
      <div className="w-full mx-auto px-2">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#002e2f]">Contáctanos</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <ContactForm />
          </div>
          <div className="md:col-span-2">
            <Map />
          </div>
        </div>
      </div>
    </section>
  )
}
