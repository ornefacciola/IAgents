export default function CasoExito() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">Caso de Éxito: IAgents</h1>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl text-center">
        Descubrí cómo IAgents potencia negocios con inteligencia artificial. Mirá nuestro video promocional y conocé el impacto real de nuestras soluciones.
      </p>
      <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-lg mb-8">
        <video controls width="100%" poster="/poster.png" style={{ borderRadius: '1rem', background: '#222' }}>
          <source src="/IAgents Video.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>
      <a href="/" className="text-blue-400 hover:underline mt-4">Volver al inicio</a>
    </div>
  )
} 