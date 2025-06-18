import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IAgents',
  description: 'IAgents - Tu negocio potenciado por IA',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
