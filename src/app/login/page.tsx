'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nome: '',
    empresa: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Email e senha são obrigatórios')
      setLoading(false)
      return
    }

    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        setError('Senhas não coincidem')
        setLoading(false)
        return
      }
      if (!formData.nome || !formData.empresa) {
        setError('Nome e empresa são obrigatórios para cadastro')
        setLoading(false)
        return
      }
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In a real application, you would handle authentication here
      console.log('Form data:', formData)
      
      // Redirect to dashboard (simulated)
      window.location.href = '/dashboard'
    } catch (err) {
      setError('Erro ao processar solicitação. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold text-black">RezendeHelp</span>
            </Link>
            <h1 className="text-3xl font-bold text-black mb-2">
              {isLogin ? 'Fazer Login' : 'Criar Conta'}
            </h1>
            <p className="text-gray-600">
              {isLogin 
                ? 'Acesse sua conta para gerenciar seu RH' 
                : 'Crie sua conta e comece o teste grátis'
              }
            </p>
          </div>

          {/* Login/Register Form */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome (only for register) */}
              {!isLogin && (
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-black mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                    required={!isLogin}
                  />
                </div>
              )}

              {/* Empresa (only for register) */}
              {!isLogin && (
                <div>
                  <label htmlFor="empresa" className="block text-sm font-semibold text-black mb-2">
                    Nome da Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nome da sua empresa"
                    required={!isLogin}
                  />
                </div>
              )}

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-black mb-2">
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Sua senha"
                  required
                />
              </div>

              {/* Confirm Password (only for register) */}
              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-semibold text-black mb-2">
                    Confirmar Senha
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Confirme sua senha"
                    required={!isLogin}
                  />
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading 
                  ? 'Processando...' 
                  : isLogin 
                    ? 'Entrar' 
                    : 'Criar Conta'
                }
              </button>

              {/* Forgot Password (only for login) */}
              {isLogin && (
                <div className="text-center">
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                    Esqueceu sua senha?
                  </a>
                </div>
              )}
            </form>

            {/* Toggle Login/Register */}
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}
                <button
                  onClick={() => {
                    setIsLogin(!isLogin)
                    setError(null)
                    setFormData({
                      email: '',
                      password: '',
                      confirmPassword: '',
                      nome: '',
                      empresa: ''
                    })
                  }}
                  className="ml-1 text-blue-600 hover:text-blue-700 font-medium"
                >
                  {isLogin ? 'Criar conta' : 'Fazer login'}
                </button>
              </p>
            </div>
          </div>

          {/* Benefits for Register */}
          {!isLogin && (
            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-4">
                Ao criar sua conta, você terá:
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  30 dias de teste grátis
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  Acesso a todas as funcionalidades
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  Suporte técnico incluído
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  Sem compromisso de permanência
                </li>
              </ul>
            </div>
          )}

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-800">
              ← Voltar para o site
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
