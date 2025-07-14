import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Empet - Empresa Petrolera Cubana",
  description: "Empresa Petrolera Cubana comprometida con el desarrollo energético sostenible del país",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <div className="fixed top-1/2 right-4 z-50 flex flex-col space-y-4 transform -translate-y-1/2">
            <a href="https://www.facebook.com/empresademantenimientodelpetroleo.empet" target="_blank" rel="noopener noreferrer" className="bg-white shadow-lg rounded-full p-2 hover:bg-[#1877f3] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#1877f3] hover:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75A4.5 4.5 0 0 0 12.75 2.25h-1.5A4.5 4.5 0 0 0 6.75 6.75v2.25H4.5a.75.75 0 0 0-.75.75v2.25c0 .414.336.75.75.75h2.25v6.75c0 .414.336.75.75.75h2.25a.75.75 0 0 0 .75-.75v-6.75h2.25a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-2.25V6.75a1.5 1.5 0 0 1 1.5-1.5h1.5a.75.75 0 0 0 .75-.75V6.75z" />
              </svg>
            </a>
            <a href="https://x.com/empetcupet" target="_blank" rel="noopener noreferrer" className="bg-white shadow-lg rounded-full p-2 transition-colors group hover:bg-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#1da1f2] group-hover:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.53 6.47a.75.75 0 0 0-1.06 0l-3.47 3.47-3.47-3.47a.75.75 0 0 0-1.06 1.06l3.47 3.47-3.47 3.47a.75.75 0 1 0 1.06 1.06l3.47-3.47 3.47 3.47a.75.75 0 0 0 1.06-1.06l-3.47-3.47 3.47-3.47a.75.75 0 0 0 0-1.06z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/empetcupet/" target="_blank" rel="noopener noreferrer" className="bg-white shadow-lg rounded-full p-2 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#e1306c] hover:text-white">
                <rect width="20" height="20" x="2" y="2" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17" cy="7" r="1.5" />
              </svg>
            </a>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
