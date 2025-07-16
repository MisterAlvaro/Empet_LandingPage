"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { servicesData } from "@/features/services/services-data"

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const formRef = useRef<HTMLFormElement>(null)
  const [sentTo, setSentTo] = useState<string | null>(null)

  useEffect(() => {
    function updateSelectedServiceFromHash() {
      if (typeof window !== "undefined") {
        const hash = window.location.hash
        const match = hash.match(/servicio=([^&]+)/)
        if (match && match[1]) {
          setSelectedService(decodeURIComponent(match[1]))
        }
      }
    }
    updateSelectedServiceFromHash()
    window.addEventListener("hashchange", updateSelectedServiceFromHash)
    return () => window.removeEventListener("hashchange", updateSelectedServiceFromHash)
  }, [])

  const getServiceEmail = (serviceName: string) => {
    const service = servicesData.find(s => s.name === serviceName)
    return service?.manager.email || null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const form = formRef.current
    const formData = new FormData(form!)
    const nombre = formData.get('nombre') as string
    const email = formData.get('email') as string
    const servicio = selectedService
    const mensaje = formData.get('mensaje') as string
    const destinatario = getServiceEmail(servicio)

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, email, servicio, mensaje, destinatario }),
    })

    setIsLoading(false)
    if (res.ok) {
      if (formRef.current) formRef.current.reset()
      setSelectedService("")
      setSentTo(destinatario)
    } else {
      alert('Error enviando el correo')
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="form-group">
        <Input name="nombre" type="text" placeholder="Nombre" required className="animated-input" />
      </div>
      <div className="form-group">
        <Input name="email" type="email" placeholder="Correo electrónico" required className="animated-input" />
      </div>
      <div className="form-group">
        <select
          required
          className="animated-input w-full h-10 rounded-md border border-stone-200 bg-white px-3 py-2 text-base text-stone-900 focus-visible:outline-none md:text-sm"
          value={selectedService}
          onChange={e => setSelectedService(e.target.value)}
        >
          <option value="">Selecciona un servicio</option>
          <option value="Reparación de tanques de almacenamiento de combustible e instalaciones asociadas">Reparación de tanques</option>
          <option value="Fabricación de piezas">Fabricación de piezas</option>
          <option value="Inspección y ensayo">Inspección y ensayo</option>
          <option value="Logística">Logística</option>
        </select>
      </div>
      <div className="form-group">
        <Textarea name="mensaje" placeholder="Mensaje" rows={4} required className="animated-input" />
      </div>
      <Button type="submit" className="w-full bg-[#c1303a] hover:bg-[#a12832] text-white" disabled={isLoading}>
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="spinner mr-2"></div>
            Enviando...
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <Send className="mr-2 h-4 w-4" /> Enviar
          </div>
        )}
      </Button>
      {sentTo && (
        <div className="mt-4 text-center text-green-600 text-sm">
          El formulario se enviaría a: <b>{sentTo}</b>
        </div>
      )}
    </form>
  )
}
