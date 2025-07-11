import Link from 'next/link'

export default function Pricing() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Planos e Preços
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para sua empresa. Todos os planos incluem suporte técnico 
            e atualizações gratuitas.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg">
            <div className="flex">
              <button className="px-6 py-2 rounded-md bg-white text-black font-semibold shadow-sm">
                Mensal
              </button>
              <button className="px-6 py-2 rounded-md text-gray-600 font-semibold">
                Anual
                <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                  -20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Plano Básico */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-black mb-2">Básico</h3>
              <p className="text-gray-600 mb-6">
                Ideal para pequenas empresas até 25 funcionários
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-black">R$ 49</span>
                <span className="text-gray-600">/mês</span>
              </div>
              <Link href="/login" className="block w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Começar Teste Grátis
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Até 25 funcionários</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Controle de ponto básico</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Relatórios essenciais</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Suporte por email</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">1 empresa</span>
              </div>
            </div>
          </div>

          {/* Plano Profissional - Destacado */}
          <div className="bg-white rounded-lg border-2 border-blue-600 p-8 hover:shadow-lg transition-shadow relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Mais Popular
              </span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-black mb-2">Profissional</h3>
              <p className="text-gray-600 mb-6">
                Perfeito para médias empresas até 100 funcionários
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-black">R$ 99</span>
                <span className="text-gray-600">/mês</span>
              </div>
              <Link href="/login" className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Começar Teste Grátis
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Até 100 funcionários</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Todas as funcionalidades</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Relatórios avançados</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Suporte prioritário</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Até 3 empresas</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Integração API</span>
              </div>
            </div>
          </div>

          {/* Plano Enterprise */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-black mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">
                Solução completa para grandes empresas
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-black">Personalizado</span>
              </div>
              <Link href="/contact" className="block w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Falar com Vendas
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Funcionários ilimitados</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Customizações exclusivas</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Suporte dedicado</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Empresas ilimitadas</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">Integrações avançadas</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-700">SLA garantido</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-black text-center mb-8">
            Comparação Detalhada
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-black">Funcionalidades</th>
                  <th className="text-center py-4 px-4 font-semibold text-black">Básico</th>
                  <th className="text-center py-4 px-4 font-semibold text-black">Profissional</th>
                  <th className="text-center py-4 px-4 font-semibold text-black">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Controle de Ponto</td>
                  <td className="text-center py-3 px-4">
                    <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                  </td>
                  <td className="text-center py-3 px-4">
                    <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                  </td>
                  <td className="text-center py-3 px-4">
                    <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Cálculo de Horas Extras</td>
                  <td className="text-center py-3 px-4">
                    <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                  </td>
                  <td className="text-center py-3 px-4">
                    <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                  </td>
                  <td className="text-center py-3 px-4">
                    <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Planejamento de Férias</td>
                  <td className="text-center py-3 px-4">
                    <span className="text-gray-400">Básico</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                  </td>
                  <td className="text-center py-3 px-4">
                    <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Relatórios Avançados</td>
                  <td className="text-center py-3 px-4">
                    <span className="text-gray-400">—</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                  </td>
                  <td className="text-center py-3 px-4">
                    <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Integração API</td>
                  <td className="text-center py-3 px-4">
                    <span className="text-gray-400">—</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                  </td>
                  <td className="text-center py-3 px-4">
                    <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Suporte Dedicado</td>
                  <td className="text-center py-3 px-4">
                    <span className="text-gray-400">—</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className="text-gray-400">—</span>
                  </td>
                  <td className="text-center py-3 px-4">
                    <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black text-center mb-8">
            Perguntas Frequentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-3">
                Posso cancelar a qualquer momento?
              </h3>
              <p className="text-gray-600">
                Sim, você pode cancelar sua assinatura a qualquer momento sem taxas de cancelamento. 
                Seus dados ficam disponíveis por 30 dias após o cancelamento.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-3">
                Como funciona o teste grátis?
              </h3>
              <p className="text-gray-600">
                O teste grátis dura 30 dias e inclui todas as funcionalidades do plano escolhido. 
                Não é necessário cartão de crédito para começar.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-3">
                Posso mudar de plano depois?
              </h3>
              <p className="text-gray-600">
                Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. 
                As alterações são aplicadas no próximo ciclo de cobrança.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-3">
                Os dados são seguros?
              </h3>
              <p className="text-gray-600">
                Sim, utilizamos criptografia SSL e backup automático. Somos totalmente 
                adequados à LGPD e seguimos as melhores práticas de segurança.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-600 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Teste gratuitamente por 30 dias. Sem compromisso, sem cartão de crédito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Começar Teste Grátis
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Falar com Vendas
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
