import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Gestão de RH
            <span className="text-blue-600"> Simplificada</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Controle de ponto, cálculo de horas extras, planejamento de férias e gestão completa 
            de recursos humanos em uma única plataforma moderna e intuitiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/features" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Saiba Mais
            </Link>
            <Link href="/login" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              Teste Grátis
            </Link>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Principais Funcionalidades
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tudo que sua empresa precisa para gerenciar recursos humanos de forma eficiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Controle de Ponto</h3>
              <p className="text-gray-600">
                Registre entrada e saída dos funcionários com precisão e facilidade
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Horas Extras</h3>
              <p className="text-gray-600">
                Cálculo automático de horas extras com relatórios detalhados
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg transform rotate-45"></div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Planejamento de Férias</h3>
              <p className="text-gray-600">
                Gerencie períodos de férias e escalas com calendário integrado
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-sm"></div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Gestão de Planilhas</h3>
              <p className="text-gray-600">
                Organize e armazene dados dos funcionários com segurança
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Por que escolher a RezendeHelp?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Interface Intuitiva</h3>
                    <p className="text-gray-600">
                      Design moderno e fácil de usar, sem necessidade de treinamento complexo
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Segurança Garantida</h3>
                    <p className="text-gray-600">
                      Seus dados protegidos com criptografia e backup automático
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Suporte 24/7</h3>
                    <p className="text-gray-600">
                      Chat com IA e suporte humano disponível quando você precisar
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-4">Comece Hoje Mesmo</h3>
              <p className="text-gray-600 mb-6">
                Teste gratuitamente por 30 dias. Sem compromisso, sem cartão de crédito.
              </p>
              <Link href="/login" className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Iniciar Teste Grátis
              </Link>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Configuração em menos de 5 minutos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para revolucionar seu RH?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de empresas que já confiam na RezendeHelp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Entre em Contato
            </Link>
            <Link href="/pricing" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Ver Preços
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
