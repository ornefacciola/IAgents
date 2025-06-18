import { Mail, Phone, MapPin, Brain } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-blue-500/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold text-white">IAgents</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Potenciamos tu negocio con agentes de inteligencia artificial adaptativos. Automatización, análisis
              predictivo y soporte inteligente en una sola plataforma.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">contacto@iagents.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">+54 11 1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Productos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  IA Operativa
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  IA Predictiva
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  IA Interactiva
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Consultoría
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <a href="#empresa" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#equipo" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Carreras
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 IAgents. Todos los derechos reservados. Tu negocio, potenciado por IA.
          </p>
        </div>
      </div>
    </footer>
  )
}
