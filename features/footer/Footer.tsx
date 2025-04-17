import { FooterSocial } from "./FooterSocial"

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 bg-[#002e2f] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Empet</h3>
            <p className="text-gray-300">
              Empresa Petrolera Cubana comprometida con el desarrollo energético sostenible del país.
            </p>
          </div>
          <FooterSocial />
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Empet. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
