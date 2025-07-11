import { NextRequest, NextResponse } from 'next/server'
import { callOpenRouterAPI, ChatMessage } from '@/lib/openRouter'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { messages } = body

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Mensagens são obrigatórias e devem ser um array' },
        { status: 400 }
      )
    }

    // Validate message format
    for (const message of messages) {
      if (!message.role || !message.content) {
        return NextResponse.json(
          { error: 'Cada mensagem deve ter role e content' },
          { status: 400 }
        )
      }
      if (!['system', 'user', 'assistant'].includes(message.role)) {
        return NextResponse.json(
          { error: 'Role deve ser system, user ou assistant' },
          { status: 400 }
        )
      }
    }

    // Call OpenRouter API
    const aiResponse = await callOpenRouterAPI(messages as ChatMessage[])

    return NextResponse.json({
      content: aiResponse,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Erro na API de chat:', error)
    
    let errorMessage = 'Erro interno do servidor'
    let statusCode = 500

    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        errorMessage = 'Erro de configuração da API'
        statusCode = 500
      } else if (error.message.includes('Erro na API')) {
        errorMessage = 'Serviço de IA temporariamente indisponível'
        statusCode = 503
      } else if (error.message.includes('Erro de conexão')) {
        errorMessage = 'Erro de conexão com o serviço de IA'
        statusCode = 503
      } else {
        errorMessage = error.message
      }
    }

    return NextResponse.json(
      { 
        error: errorMessage,
        timestamp: new Date().toISOString()
      },
      { status: statusCode }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { 
      message: 'Chat API está funcionando',
      status: 'online',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  )
}
