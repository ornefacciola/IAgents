import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cog, TrendingUp, MessageSquare, Settings } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      icon: Cog,
      title: "IA Operativa",
      description: "Automatización de tareas empresariales",
      features: [
        "Gestión automatizada de datos",
        "Procesamiento de correos",
        "Generación de reportes",
        "Facturación inteligente",
      ],
    },
    {
      icon: TrendingUp,
      title: "IA Predictiva",
      description: "Análisis predictivo y toma de decisiones",
      features: ["Predicción de ventas", "Análisis de patrones", "Gestión de riesgos", "Optimización de recursos"],
    },
    {
      icon: MessageSquare,
      title: "IA Interactiva",
      description: "Soporte inteligente a usuarios",
      features: ["Chatbots conversacionales", "Atención 24/7", "Respuestas personalizadas", "Soporte multicanal"],
    },
    {
      icon: Settings,
      title: "Consultoría",
      description: "Implementación personalizada",
      features: [
        "Análisis de necesidades",
        "Entrenamiento de modelos",
        "Dashboards personalizados",
        "Soporte continuo",
      ],
    },
  ]

  return (
    <section id="productos" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Nuestros Productos y Servicios</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluciones de IA personalizadas que se adaptan a las necesidades específicas de cada cliente y sector
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
            >
              <CardHeader className="text-center">
                <product.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white">{product.title}</CardTitle>
                <CardDescription className="text-gray-300">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Más Información</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
