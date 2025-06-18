"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MessageSquare, Users, TrendingUp, Activity, Send, Bot, User } from "lucide-react"

export function DashboardDemo() {
  const [chatMessage, setChatMessage] = useState("")
  const [chatHistory, setChatHistory] = useState([
    { type: "bot", message: "¡Hola! Soy tu agente de IA. ¿En qué puedo ayudarte hoy?" },
    { type: "user", message: "Necesito un reporte de ventas del último mes" },
    {
      type: "bot",
      message:
        "Perfecto, he generado el reporte de ventas. Las ventas aumentaron un 23% comparado con el mes anterior.",
    },
  ])

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setChatHistory([
        ...chatHistory,
        { type: "user", message: chatMessage },
        { type: "bot", message: "Procesando tu solicitud... He completado la tarea automáticamente." },
      ])
      setChatMessage("")
    }
  }

  return (
    <section id="demo" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Resultados</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explora cómo nuestros agentes de IA pueden transformar tu negocio
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* KPIs */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">Tareas Automatizadas</CardTitle>
                <Activity className="h-4 w-4 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">1,247</div>
                <p className="text-xs text-green-400">+23% desde el mes pasado</p>
                <Progress value={75} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">Ahorro de Costos</CardTitle>
                <TrendingUp className="h-4 w-4 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">$45,231</div>
                <p className="text-xs text-green-400">+12% desde el mes pasado</p>
                <Progress value={85} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">Consultas Resueltas</CardTitle>
                <MessageSquare className="h-4 w-4 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">892</div>
                <p className="text-xs text-green-400">+8% desde el mes pasado</p>
                <Progress value={92} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">Usuarios Activos</CardTitle>
                <Users className="h-4 w-4 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">156</div>
                <p className="text-xs text-green-400">+5% desde el mes pasado</p>
                <Progress value={68} className="mt-2" />
              </CardContent>
            </Card>
          </div>

          {/* Chat Demo */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Bot className="h-5 w-5 mr-2 text-blue-400" />
                Agente IA - Demo
              </CardTitle>
              <CardDescription className="text-gray-300">Interactúa con nuestro agente inteligente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 h-64 overflow-y-auto mb-4">
                {chatHistory.map((chat, index) => (
                  <div key={index} className={`flex ${chat.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`flex items-start space-x-2 max-w-[80%] ${chat.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                    >
                      <div className={`p-2 rounded-full ${chat.type === "user" ? "bg-blue-600" : "bg-slate-700"}`}>
                        {chat.type === "user" ? (
                          <User className="h-4 w-4 text-white" />
                        ) : (
                          <Bot className="h-4 w-4 text-blue-400" />
                        )}
                      </div>
                      <div
                        className={`p-3 rounded-lg ${chat.type === "user" ? "bg-blue-600 text-white" : "bg-slate-700 text-gray-200"}`}
                      >
                        <p className="text-sm">{chat.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex space-x-2">
                <Input
                  placeholder="Escribe tu mensaje..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="bg-slate-700 border-slate-600 text-white"
                />
                <Button onClick={handleSendMessage} size="icon" className="bg-blue-600 hover:bg-blue-700">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Agents */}
        <Card className="mt-6 bg-slate-800/50 backdrop-blur-sm border-blue-500/20">
          <CardHeader>
            <CardTitle className="text-white">Agentes Activos</CardTitle>
            <CardDescription className="text-gray-300">
              Estado actual de los agentes de IA en funcionamiento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center space-x-3">
                <Badge className="bg-green-600">Activo</Badge>
                <span className="text-white">Agente de Ventas</span>
              </div>
              <div className="flex items-center space-x-3">
                <Badge className="bg-green-600">Activo</Badge>
                <span className="text-white">Agente de Soporte</span>
              </div>
              <div className="flex items-center space-x-3">
                <Badge className="bg-blue-600">Procesando</Badge>
                <span className="text-white">Agente de Análisis</span>
              </div>
              <div className="flex items-center space-x-3">
                <Badge className="bg-yellow-600">Standby</Badge>
                <span className="text-white">Agente de Reportes</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
