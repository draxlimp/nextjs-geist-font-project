import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RezendeHelp - Gestão de Recursos Humanos',
  description: 'Plataforma moderna de gestão de recursos humanos para empresas. Controle de ponto, cálculo de horas extras, planejamento de férias e muito mais.',
  keywords: 'RH, recursos humanos, controle de ponto, horas extras, gestão empresarial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-white text-black min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
