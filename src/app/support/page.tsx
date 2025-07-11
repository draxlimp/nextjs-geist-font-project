import ChatAI from '@/components/ChatAI'

export default function Support() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Suporte e Ajuda
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas com nosso assistente de IA especializado em recursos humanos 
            ou encontre respostas nas perguntas frequentes
          </p>
        </div>

        {/* AI Chat Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-4">
              Chat com Assistente de IA
            </h2>
            <p className="text-lg text-gray-600">
              Converse com nosso assistente especializado em RH para obter ajuda instantânea
            </p>
          </div>
          <ChatAI />
        </div>

        {/* Quick Help Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black text-center mb-8">
            Ajuda Rápida
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Primeiros Passos</h3>
              <p className="text-gray-600 mb-4">
                Aprenda como configurar sua conta e começar a usar a RezendeHelp
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Configuração inicial da empresa</li>
                <li>• Cadastro de funcionários</li>
                <li>• Configuração de horários</li>
                <li>• Primeiro registro de ponto</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Controle de Ponto</h3>
              <p className="text-gray-600 mb-4">
                Dúvidas sobre marcação de ponto e relatórios de frequência
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Como marcar ponto</li>
                <li>• Correção de marcações</li>
                <li>• Relatórios de frequência</li>
                <li>• Justificativas de ausência</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded-lg transform rotate-45"></div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Horas Extras</h3>
              <p className="text-gray-600 mb-4">
                Entenda como funciona o cálculo e aprovação de horas extras
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Tipos de hora extra</li>
                <li>• Aprovação de horas</li>
                <li>• Relatórios de horas extras</li>
                <li>• Configurações de cálculo</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Férias</h3>
              <p className="text-gray-600 mb-4">
                Planejamento e gestão de períodos de férias dos funcionários
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Solicitação de férias</li>
                <li>• Calendário de férias</li>
                <li>• Períodos aquisitivos</li>
                <li>• Aprovação de solicitações</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Relatórios</h3>
              <p className="text-gray-600 mb-4">
                Como gerar e interpretar relatórios do sistema
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Relatórios de frequência</li>
                <li>• Relatórios de horas extras</li>
                <li>• Exportação de dados</li>
                <li>• Filtros e personalizações</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Integrações</h3>
              <p className="text-gray-600 mb-4">
                Conecte a RezendeHelp com outros sistemas da sua empresa
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• API de integração</li>
                <li>• Folha de pagamento</li>
                <li>• Sistemas de ERP</li>
                <li>• Exportação de dados</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black text-center mb-8">
            Perguntas Frequentes
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-3">
                Como faço para cadastrar um novo funcionário?
              </h3>
              <p className="text-gray-600">
                Acesse o menu "Funcionários" no dashboard, clique em "Novo Funcionário" e preencha 
                as informações obrigatórias como nome, CPF, cargo e horário de trabalho. O sistema 
                gerará automaticamente um código de acesso para o funcionário.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-3">
                O funcionário esqueceu de marcar o ponto. Como corrigir?
              </h3>
              <p className="text-gray-600">
                No dashboard, vá em "Controle de Ponto" → "Correções", selecione o funcionário e a data, 
                e adicione a marcação em falta. É possível adicionar uma justificativa para a correção. 
                Todas as correções ficam registradas no histórico.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-3">
                Como configurar diferentes tipos de hora extra?
              </h3>
              <p className="text-gray-600">
                Acesse "Configurações" → "Horas Extras" e defina os percentuais para cada tipo: 
                50% para horas extras normais, 100% para domingos e feriados. O sistema calculará 
                automaticamente baseado nos horários configurados para cada funcionário.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-3">
                É possível exportar os dados para outros sistemas?
              </h3>
              <p className="text-gray-600">
                Sim, oferecemos exportação em diversos formatos (Excel, CSV, PDF) e também uma API 
                REST para integração direta com sistemas de folha de pagamento e ERPs. 
                Consulte nossa documentação técnica ou entre em contato para mais detalhes.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-3">
                Como funciona o backup dos dados?
              </h3>
              <p className="text-gray-600">
                Realizamos backup automático diário de todos os dados em servidores seguros. 
                Os dados são criptografados e armazenados em múltiplas localizações. Você também 
                pode fazer backup manual a qualquer momento através do menu "Configurações".
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-3">
                Posso usar em dispositivos móveis?
              </h3>
              <p className="text-gray-600">
                Sim, a RezendeHelp é totalmente responsiva e funciona perfeitamente em smartphones 
                e tablets. Os funcionários podem marcar ponto pelo celular e gestores podem 
                acompanhar relatórios em qualquer dispositivo.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Ainda precisa de ajuda?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Nossa equipe de suporte está pronta para ajudar você
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Chat Online</h3>
              <p className="text-gray-600 mb-4">
                Converse com nosso assistente de IA 24/7
              </p>
              <p className="text-sm text-blue-600 font-medium">Disponível agora</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Email</h3>
              <p className="text-gray-600 mb-4">
                Envie sua dúvida por email
              </p>
              <p className="text-sm text-blue-600 font-medium">suporte@rezendehelp.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Telefone</h3>
              <p className="text-gray-600 mb-4">
                Fale diretamente com nossa equipe
              </p>
              <p className="text-sm text-blue-600 font-medium">(11) 9999-9999</p>
            </div>
          </div>
          <div className="mt-8">
            <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Formulário de Contato
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
