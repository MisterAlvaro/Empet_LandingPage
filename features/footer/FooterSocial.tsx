import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import XIcon from "@mui/icons-material/X" // Usar un icono SVG personalizado si no tienes el de Material Design

export function FooterSocial() {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Síguenos</h3>
      <div className="flex space-x-4">
        <Link href="https://www.facebook.com/empresademantenimientodelpetroleo.empet" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Facebook className="w-6 h-6 text-gray-300 hover:text-white" />
        </Link>
        <Link href="https://x.com/empetcupet" target="_blank" rel="noopener noreferrer" className="social-icon">
          {/* Si tienes el icono de X, úsalo aquí. Si no, puedes usar un SVG inline o el icono de Twitter temporalmente. */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-300 hover:text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.53 6.47a.75.75 0 0 0-1.06 0l-3.47 3.47-3.47-3.47a.75.75 0 0 0-1.06 1.06l3.47 3.47-3.47 3.47a.75.75 0 1 0 1.06 1.06l3.47-3.47 3.47 3.47a.75.75 0 0 0 1.06-1.06l-3.47-3.47 3.47-3.47a.75.75 0 0 0 0-1.06z" />
          </svg>
        </Link>
        <Link href="https://www.instagram.com/empetcupet/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Instagram className="w-6 h-6 text-gray-300 hover:text-white" />
        </Link>
      </div>
    </div>
  )
}
