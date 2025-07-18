"use client"
import Hero from "@/features/hero/Hero"
import About from "@/features/about/About"
import History from "@/features/history/History"
import Values from "@/features/values/Values"
import Contact from "@/features/contact/Contact"
import Footer from "@/features/footer/Footer"
import MainServices from "@/features/services/MainServices"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <About />
      <Values />
      <History />
      <MainServices />
      <Contact />
      <Footer />
    </main>
  )
}
