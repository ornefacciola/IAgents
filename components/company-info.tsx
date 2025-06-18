import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Heart, Lightbulb } from "lucide-react"

export function CompanyInfo() {
  return (
    <section id="empresa" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Sobre IAgents</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conoce nuestra misión, visión y los valores que nos guían en la transformación digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20">
            <CardHeader>
              <Target className="h-12 w-12 text-blue-400 mb-4" />
              <CardTitle className="text-white text-2xl">Nuestra Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-lg">
                Empoderar a empresas y personas mediante agentes de IA inteligentes, automatizando tareas, optimizando
                procesos y mejorando la toma de decisiones para un futuro más eficiente e innovador.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20">
            <CardHeader>
              <Eye className="h-12 w-12 text-blue-400 mb-4" />
              <CardTitle className="text-white text-2xl">Nuestra Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-lg">
                Ser líderes en Latinoamérica en el desarrollo de agentes de IA adaptativos, redefiniendo la interacción
                entre empresas, usuarios y tecnología.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Objetivos */}
        <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20 mb-12">
          <CardHeader>
            <CardTitle className="text-white text-2xl text-center">Nuestros Objetivos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Automatizar procesos repetitivos en empresas",
                "Reducir costos operativos mediante IA",
                "Ofrecer soluciones personalizadas y escalables",
                "Mejorar la experiencia del cliente",
                "Expandir operaciones internacionalmente en 3 años",
                "Establecer alianzas con universidades y polos tecnológicos",
              ].map((objetivo, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300">{objetivo}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Valores */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { icon: Lightbulb, title: "Innovación", desc: "Buscamos soluciones disruptivas" },
            { icon: Target, title: "Eficiencia", desc: "Hacemos las cosas bien y rápido" },
            { icon: Eye, title: "Transparencia", desc: "Ética y claridad en procesos" },
            { icon: Heart, title: "Personalización", desc: "Adaptación única a cada necesidad" },
            { icon: Heart, title: "Compromiso", desc: "Con clientes y la sociedad" },
          ].map((valor, index) => (
            <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20 text-center">
              <CardContent className="pt-6">
                <valor.icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">{valor.title}</h3>
                <p className="text-gray-300 text-sm">{valor.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
