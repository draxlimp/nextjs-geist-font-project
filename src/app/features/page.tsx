export default function Features() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Funcionalidades Completas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra todas as ferramentas que a RezendeHelp oferece para transformar 
            a gestão de recursos humanos da sua empresa
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Controle de Ponto */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded"></div>
            </div>
            <h2 className="text-2xl font-bold text-black mb-4">Controle de Ponto Digital</h2>
            <p className="text-gray-600 mb-6">
              Sistema completo de registro de entrada e saída com múltiplas opções de marcação.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Marcação via web, mobile ou biometria
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Relatórios de frequência em tempo real
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Controle de atrasos e faltas
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Integração com folha de pagamento
              </li>
            </ul>
          </div>

          {/* Horas Extras */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            </div>
            <h2 className="text-2xl font-bold text-black mb-4">Cálculo de Horas Extras</h2>
            <p className="text-gray-600 mb-6">
              Automatize o cálculo de horas extras com precisão e conformidade legal.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Cálculo automático conforme CLT
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Diferentes tipos de hora extra
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Relatórios detalhados por período
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Aprovação de horas extras
              </li>
            </ul>
          </div>

          {/* Planejamento de Férias */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg transform rotate-45"></div>
            </div>
            <h2 className="text-2xl font-bold text-black mb-4">Planejamento de Férias</h2>
            <p className="text-gray-600 mb-6">
              Gerencie períodos de férias e escalas com calendário integrado e notificações.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Calendário visual de férias
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Solicitação online de férias
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Controle de períodos aquisitivos
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Notificações automáticas
              </li>
            </ul>
          </div>

          {/* Gestão de Planilhas */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-sm"></div>
            </div>
            <h2 className="text-2xl font-bold text-black mb-4">Administração de Planilhas</h2>
            <p className="text-gray-600 mb-6">
              Organize e armazene dados dos funcionários com segurança e facilidade de acesso.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Cadastro completo de funcionários
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Controle de documentos
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Histórico de alterações
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Backup automático de dados
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Features */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-black text-center mb-8">
            Recursos Adicionais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-black mb-2">Relatórios Avançados</h3>
              <p className="text-gray-600">
                Gere relatórios personalizados com dados em tempo real
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-black mb-2">Integração API</h3>
              <p className="text-gray-600">
                Conecte com outros sistemas da sua empresa
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-black mb-2">Multi-empresa</h3>
              <p className="text-gray-600">
                Gerencie múltiplas empresas em uma única conta
              </p>
            </div>
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-4">
              Segurança e Conformidade
            </h2>
            <p className="text-xl text-gray-600">
              Seus dados protegidos com os mais altos padrões de segurança
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-black mb-2">LGPD Compliant</h3>
              <p className="text-sm text-gray-600">Totalmente adequado à LGPD</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h3 className="font-semibold text-black mb-2">Criptografia SSL</h3>
              <p className="text-sm text-gray-600">Dados protegidos em trânsito</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg"></div>
              </div>
              <h3 className="font-semibold text-black mb-2">Backup Automático</h3>
              <p className="text-sm text-gray-600">Seus dados sempre seguros</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-sm"></div>
              </div>
              <h3 className="font-semibold text-black mb-2">Auditoria Completa</h3>
              <p className="text-sm text-gray-600">Rastro de todas as ações</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-600 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para experimentar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Teste todas essas funcionalidades gratuitamente por 30 dias
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/login" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Começar Teste Grátis
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
