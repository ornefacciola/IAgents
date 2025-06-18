import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Headphones, Users, Palette, BarChart3 } from "lucide-react"

export function TeamSection() {
  const positions = [
    {
      icon: Code,
      title: "Desarrollador/a de IA",
      requirements: "Experiencia en Python, Machine Learning, NLP",
      count: 4,
      color: "bg-blue-600",
    },
    {
      icon: Headphones,
      title: "Especialista en Soporte",
      requirements: "Conocimiento técnico básico, orientación al cliente",
      count: 2,
      color: "bg-green-600",
    },
    {
      icon: Users,
      title: "Ejecutivo/a Comercial",
      requirements: "Experiencia en ventas B2B, habilidades de comunicación",
      count: 2,
      color: "bg-purple-600",
    },
    {
      icon: Palette,
      title: "Diseñador/a UX/UI",
      requirements: "Conocimiento en herramientas de diseño, experiencia en productos digitales",
      count: 1,
      color: "bg-pink-600",
    },
    {
      icon: BarChart3,
      title: "Analista BI",
      requirements: "Manejo de Power BI / Tableau, análisis de datos",
      count: 1,
      color: "bg-orange-600",
    },
  ]

  return (
    <section id="equipo" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Desarrollá tu futuro en IAgents</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conoce los puestos de trabajo y requisitos para formar parte de nuestro equipo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((position, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <position.icon className="h-12 w-12 text-blue-400" />
                  <Badge className={`${position.color} text-white`}>
                    {position.count} {position.count === 1 ? "puesto" : "puestos"}
                  </Badge>
                </div>
                <CardTitle className="text-white text-xl">{position.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base">{position.requirements}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
