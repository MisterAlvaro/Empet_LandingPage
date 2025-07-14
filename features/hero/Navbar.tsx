"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Valores", href: "#valores" },
    { name: "Historia", href: "#historia" },
    { name: "Servicios", href: "#directivos" },
    { name: "Contacto", href: "#contacto" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`w-full px-4 py-4 fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#002e2f]/90 backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="#" className="text-white text-2xl font-bold">
            <Image
              src={`/logo/logo.png`}
              alt="Logo Empet"
              width={70}
              height={70}
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(link.href)}
              className="text-white hover:text-[#489e6e] transition-colors text-sm"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#002e2f] shadow-md py-4 animate-fade-in">
          <div className="flex flex-col space-y-4 px-4">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.href)}
                className="text-white hover:text-[#489e6e] transition-colors text-left py-2"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

