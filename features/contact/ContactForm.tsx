"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      // Reset form
      if (formRef.current) formRef.current.reset()
    }, 2000)
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="form-group">
        <Input type="text" placeholder="Nombre" required className="animated-input" />
      </div>
      <div className="form-group">
        <Input type="email" placeholder="Correo electrónico" required className="animated-input" />
      </div>
      <div className="form-group">
        <Input type="text" placeholder="Asunto" required className="animated-input" />
      </div>
      <div className="form-group">
        <Textarea placeholder="Mensaje" rows={4} required className="animated-input" />
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
    </form>
  )
}
