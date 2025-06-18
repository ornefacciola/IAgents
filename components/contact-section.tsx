"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.")
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Contáctanos</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Listo para potenciar tu negocio con IA? Hablemos sobre cómo podemos ayudarte
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-6">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Información de Contacto</CardTitle>
                <CardDescription className="text-gray-300">
                  Múltiples formas de ponerte en contacto con nosotros
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">contacto@iagents.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">+54 11 1234-5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">Buenos Aires, Argentina</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">¿Por qué elegirnos?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Soluciones personalizadas para tu industria",
                    "Implementación rápida y soporte continuo",
                    "Tecnología de vanguardia en IA",
                    "Equipo experto en Latinoamérica",
                    "ROI comprobado en nuestros clientes",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Formulario de contacto */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Solicitar Información</CardTitle>
              <CardDescription className="text-gray-300">
                Completa el formulario y nos pondremos en contacto contigo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Nombre completo"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="company"
                    placeholder="Empresa"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Cuéntanos sobre tu proyecto o necesidades..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Enviar Mensaje
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
