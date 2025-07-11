import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para ajudar! Entre em contato conosco para tirar dúvidas, 
            solicitar demonstrações ou obter suporte técnico.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">Telefone</h3>
            <p className="text-gray-600 mb-4">
              Fale diretamente com nossa equipe de suporte
            </p>
            <p className="text-lg font-semibold text-blue-600">(11) 9999-9999</p>
            <p className="text-sm text-gray-500 mt-2">
              Segunda a Sexta: 8h às 18h<br />
              Sábado: 8h às 12h
            </p>
          </div>

          <div className="text-center bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">Email</h3>
            <p className="text-gray-600 mb-4">
              Envie sua dúvida por email
            </p>
            <p className="text-lg font-semibold text-blue-600">contato@rezendehelp.com</p>
            <p className="text-sm text-gray-500 mt-2">
              Resposta em até 24 horas
            </p>
          </div>

          <div className="text-center bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">Chat Online</h3>
            <p className="text-gray-600 mb-4">
              Converse com nosso assistente de IA
            </p>
            <a href="/support" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Iniciar Chat
            </a>
            <p className="text-sm text-gray-500 mt-2">
              Disponível 24/7
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-4">
              Envie sua Mensagem
            </h2>
            <p className="text-lg text-gray-600">
              Preencha o formulário abaixo e nossa equipe entrará em contato
            </p>
          </div>
          <ContactForm />
        </div>

        {/* Office Information */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-4">
              Nosso Escritório
            </h2>
            <p className="text-lg text-gray-600">
              Visite-nos pessoalmente ou agende uma demonstração
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Endereço</h3>
                    <p className="text-gray-600">
                      Rua das Empresas, 123<br />
                      Sala 456 - Centro<br />
                      São Paulo - SP<br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Horário de Funcionamento</h3>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">Como Chegar</h3>
                    <p className="text-gray-600">
                      Próximo ao metrô Sé<br />
                      Estacionamento disponível<br />
                      Acesso para pessoas com deficiência
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-black mb-4">Agende uma Visita</h3>
              <p className="text-gray-600 mb-6">
                Quer conhecer melhor a RezendeHelp? Agende uma demonstração presencial 
                e veja como podemos ajudar sua empresa.
              </p>
              <div className="space-y-4">
                <a href="tel:+5511999999999" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Ligar Agora
                </a>
                <a href="mailto:contato@rezendehelp.com" className="block w-full border-2 border-blue-600 text-blue-600 text-center py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                  Enviar Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Support Options */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black mb-8">
            Outras Formas de Obter Ajuda
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Central de Ajuda</h3>
              <p className="text-gray-600 text-sm mb-4">
                Acesse nossa base de conhecimento
              </p>
              <a href="/support" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Acessar →
              </a>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Documentação</h3>
              <p className="text-gray-600 text-sm mb-4">
                Guias técnicos e manuais
              </p>
              <a href="/support" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Ver Docs →
              </a>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded-lg"></div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Treinamentos</h3>
              <p className="text-gray-600 text-sm mb-4">
                Cursos e webinars gratuitos
              </p>
              <a href="/support" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Inscrever-se →
              </a>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Comunidade</h3>
              <p className="text-gray-600 text-sm mb-4">
                Fórum de usuários
              </p>
              <a href="/support" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Participar →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
