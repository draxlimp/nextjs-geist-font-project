'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock data for demonstration
  const mockData = {
    empresa: 'Empresa Demo',
    funcionarios: 25,
    presentes: 22,
    ausentes: 3,
    horasExtras: 45.5,
    funcionariosList: [
      { id: 1, nome: 'João Silva', cargo: 'Desenvolvedor', status: 'Presente', entrada: '08:00', saida: '-' },
      { id: 2, nome: 'Maria Santos', cargo: 'Designer', status: 'Presente', entrada: '08:30', saida: '-' },
      { id: 3, nome: 'Pedro Costa', cargo: 'Gerente', status: 'Ausente', entrada: '-', saida: '-' },
      { id: 4, nome: 'Ana Oliveira', cargo: 'Analista', status: 'Presente', entrada: '09:00', saida: '-' },
    ]
  }

  const handleLogout = () => {
    // In a real application, you would handle logout here
    window.location.href = '/login'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <span className="text-xl font-bold text-black">RezendeHelp</span>
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">{mockData.empresa}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Bem-vindo, Admin</span>
              <button
                onClick={handleLogout}
                className="text-sm text-red-600 hover:text-red-700"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Navigation */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2 border-b-2 font-medium ${
                activeTab === 'overview'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              Visão Geral
            </button>
            <button
              onClick={() => setActiveTab('employees')}
              className={`pb-2 border-b-2 font-medium ${
                activeTab === 'employees'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              Funcionários
            </button>
            <button
              onClick={() => setActiveTab('timesheet')}
              className={`pb-2 border-b-2 font-medium ${
                activeTab === 'timesheet'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              Controle de Ponto
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`pb-2 border-b-2 font-medium ${
                activeTab === 'reports'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              Relatórios
            </button>
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Funcionários</p>
                    <p className="text-3xl font-bold text-black">{mockData.funcionarios}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Presentes Hoje</p>
                    <p className="text-3xl font-bold text-green-600">{mockData.presentes}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Ausentes Hoje</p>
                    <p className="text-3xl font-bold text-red-600">{mockData.ausentes}</p>
                  </div>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Horas Extras (Mês)</p>
                    <p className="text-3xl font-bold text-orange-600">{mockData.horasExtras}h</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Ações Rápidas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg mx-auto mb-2"></div>
                    <p className="font-medium">Novo Funcionário</p>
                  </div>
                </button>
                <button className="bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg mx-auto mb-2"></div>
                    <p className="font-medium">Marcar Ponto</p>
                  </div>
                </button>
                <button className="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700 transition-colors">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg mx-auto mb-2"></div>
                    <p className="font-medium">Gerar Relatório</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Atividade Recente</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">João Silva marcou entrada às 08:00</span>
                  <span className="text-xs text-gray-500 ml-auto">Há 2 horas</span>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Novo funcionário cadastrado: Ana Oliveira</span>
                  <span className="text-xs text-gray-500 ml-auto">Há 3 horas</span>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Relatório mensal gerado</span>
                  <span className="text-xs text-gray-500 ml-auto">Ontem</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Employees Tab */}
        {activeTab === 'employees' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-black">Funcionários</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Novo Funcionário
              </button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Nome</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Cargo</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Entrada</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Saída</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.funcionariosList.map((funcionario) => (
                    <tr key={funcionario.id} className="border-t border-gray-100">
                      <td className="py-3 px-4 text-gray-900">{funcionario.nome}</td>
                      <td className="py-3 px-4 text-gray-600">{funcionario.cargo}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          funcionario.status === 'Presente' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {funcionario.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-600">{funcionario.entrada}</td>
                      <td className="py-3 px-4 text-gray-600">{funcionario.saida}</td>
                      <td className="py-3 px-4">
                        <button className="text-blue-600 hover:text-blue-700 text-sm">
                          Editar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Timesheet Tab */}
        {activeTab === 'timesheet' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-black">Controle de Ponto</h2>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Marcar Ponto</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Selecionar Funcionário
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                    <option>Selecione um funcionário</option>
                    {mockData.funcionariosList.map((funcionario) => (
                      <option key={funcionario.id} value={funcionario.id}>
                        {funcionario.nome}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Marcação
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                    <option>Entrada</option>
                    <option>Saída</option>
                    <option>Saída para Almoço</option>
                    <option>Retorno do Almoço</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Marcar Ponto
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Marcações de Hoje</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">João Silva</p>
                    <p className="text-sm text-gray-600">Entrada: 08:00</p>
                  </div>
                  <span className="text-sm text-green-600 font-medium">Presente</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Maria Santos</p>
                    <p className="text-sm text-gray-600">Entrada: 08:30</p>
                  </div>
                  <span className="text-sm text-green-600 font-medium">Presente</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-black">Relatórios</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-4">Frequência</h3>
                <p className="text-gray-600 mb-4">Relatório de presença e faltas dos funcionários</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Gerar Relatório
                </button>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-4">Horas Extras</h3>
                <p className="text-gray-600 mb-4">Relatório detalhado de horas extras trabalhadas</p>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Gerar Relatório
                </button>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-black mb-4">Férias</h3>
                <p className="text-gray-600 mb-4">Controle de períodos de férias e saldos</p>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Gerar Relatório
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
