export function IndexSection() {
  const sections = [
    { name: "Inicio", href: "#inicio" },
    { name: "Productos y Servicios", href: "#productos" },
    { name: "Demo", href: "#demo" },
    { name: "Sobre IAgents", href: "#empresa" },
    { name: "FODA", href: "#foda" },
    { name: "Equipo", href: "#equipo" },
    { name: "Contacto", href: "#contacto" },
  ]
  return (
    <nav className="w-full py-6 bg-slate-900/80 backdrop-blur-md sticky top-0 z-30 shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        {sections.map((section) => (
          <a
            key={section.href}
            href={section.href}
            className="text-blue-400 hover:text-white font-semibold px-4 py-2 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {section.name}
          </a>
        ))}
      </div>
    </nav>
  )
} 