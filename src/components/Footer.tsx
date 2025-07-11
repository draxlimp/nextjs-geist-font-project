import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold">RezendeHelp</span>
            </div>
            <p className="text-gray-400 text-sm">
              Plataforma moderna de gestão de recursos humanos para empresas de todos os tamanhos.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link href="/features" className="text-gray-400 hover:text-white transition-colors text-sm">
                Funcionalidades
              </Link>
              <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">
                Preços
              </Link>
              <Link href="/support" className="text-gray-400 hover:text-white transition-colors text-sm">
                Suporte
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Serviços</h3>
            <nav className="flex flex-col space-y-2">
              <span className="text-gray-400 text-sm">Controle de Ponto</span>
              <span className="text-gray-400 text-sm">Cálculo de Horas Extras</span>
              <span className="text-gray-400 text-sm">Planejamento de Férias</span>
              <span className="text-gray-400 text-sm">Gestão de Planilhas</span>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">
                Email: contato@rezendehelp.com
              </p>
              <p className="text-gray-400 text-sm">
                Telefone: (11) 9999-9999
              </p>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                Formulário de Contato
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} RezendeHelp. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Política de Privacidade
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
