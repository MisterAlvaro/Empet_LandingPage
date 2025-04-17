import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function FooterSocial() {
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ]

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Síguenos</h3>
      <div className="flex space-x-4">
        {socialLinks.map((social, index) => {
          const Icon = social.icon
          return (
            <Link key={index} href={social.href} className="social-icon">
              <Icon className="w-6 h-6 text-gray-300 hover:text-white" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
