import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, TrendingUp, AlertTriangle, Zap } from "lucide-react"

export function FodaSection() {
  const foda = [
    {
      icon: ShieldCheck,
      title: "Fortalezas",
      color: "text-green-400",
      items: [
        "Automatización avanzada de tareas",
        "Disponibilidad 24/7",
        "Reducción de costos operativos",
        "Personalización adaptada al cliente",
        "Soluciones escalables",
        "Misión clara y visión estratégica",
        "Alta adaptabilidad tecnológica",
      ],
    },
    {
      icon: TrendingUp,
      title: "Oportunidades",
      color: "text-blue-400",
      items: [
        "Crecimiento sostenido del mercado de IA",
        "Alta demanda de eficiencia operativa",
        "Transformación digital post-pandemia",
        "Interés creciente por la personalización",
        "Mayor educación sobre IA",
        "Apoyo de políticas de digitalización",
        "Sectores de nicho aún no explorados",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Debilidades",
      color: "text-yellow-400",
      items: [
        "Dependencia tecnológica constante",
        "Curva de aprendizaje para el usuario",
        "Desconfianza en la IA",
        "Costos iniciales elevados para PyMEs",
        "Limitada presencia en el mercado",
        "Requiere personal altamente calificado",
      ],
    },
    {
      icon: Zap,
      title: "Amenazas",
      color: "text-red-400",
      items: [
        "Competencia consolidada e innovadora",
        "Nuevas regulaciones sobre privacidad",
        "Resistencia al cambio en algunos sectores",
        "Riesgos de ciberseguridad",
        "Obsolescencia tecnológica acelerada",
        "Saturación del mercado en sectores específicos",
      ],
    },
  ]

  return (
    <section id="foda" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Análisis FODA</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Identificamos nuestras fortalezas, oportunidades, debilidades y amenazas para potenciar el crecimiento de IAgents.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {foda.map((item, idx) => (
            <Card key={idx} className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20">
              <CardHeader className="flex flex-col items-center">
                <item.icon className={`h-10 w-10 mb-2 ${item.color}`} />
                <CardTitle className="text-white text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {item.items.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 