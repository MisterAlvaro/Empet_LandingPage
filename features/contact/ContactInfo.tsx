import Link from "next/link"
import { MapIcon, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function ContactInfo() {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6 text-[#489e6e]">Información de Contacto</h3>
      <div className="space-y-4">
        <div className="flex items-start">
          <MapIcon className="w-5 h-5 mr-3 text-[#489e6e] mt-1" />
          <p>Calle 23 #105 entre O y P, Vedado, La Habana, Cuba</p>
        </div>
        <div className="flex items-center">
          <Phone className="w-5 h-5 mr-3 text-[#489e6e]" />
          <p>+53 7 555-1234</p>
        </div>
        <div className="flex items-center">
          <Mail className="w-5 h-5 mr-3 text-[#489e6e]" />
          <p>info@empet.cu</p>
        </div>
      </div>
      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
        <div className="flex space-x-4">
          <Link href="#" className="social-icon">
            <Facebook className="w-6 h-6 text-[#002e2f]" />
          </Link>
          <Link href="#" className="social-icon">
            <Twitter className="w-6 h-6 text-[#002e2f]" />
          </Link>
          <Link href="#" className="social-icon">
            <Instagram className="w-6 h-6 text-[#002e2f]" />
          </Link>
          <Link href="#" className="social-icon">
            <Linkedin className="w-6 h-6 text-[#002e2f]" />
          </Link>
        </div>
      </div>
    </div>
  )
}
