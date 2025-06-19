import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Target, Users, Brain } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="inicio" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                  <Brain className="w-16 h-16 text-white" />
                </div>
                {/* Círculos decorativos */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400 rounded-full animate-ping"></div>
                <div className="absolute top-4 -left-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>

                {/* Texto IAgents debajo */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    IAgents
                  </span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Tu negocio,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                potenciado por IA
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Automatizamos tareas, optimizamos procesos y mejoramos la toma de decisiones con agentes de inteligencia
              artificial adaptativos y personalizados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contacto">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  Comenzar Ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/caso-exito" passHref legacyBehavior>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white w-full"
                >
                  Ver caso de éxito
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-blue-500/20">
              <Zap className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
              <p className="text-gray-300">Disponibilidad continua</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-blue-500/20">
              <Target className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">90%</h3>
              <p className="text-gray-300">Reducción de costos</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-blue-500/20">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">500+</h3>
              <p className="text-gray-300">Empresas confiaron</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
