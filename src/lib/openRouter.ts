export interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export async function callOpenRouterAPI(messages: ChatMessage[]): Promise<string> {
  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://rezendehelp.com',
        'X-Title': 'RezendeHelp Support Chat'
      },
      body: JSON.stringify({
        model: "openai/gpt-4o",
        messages: messages,
        temperature: 0.7,
        max_tokens: 1000,
        stream: false
      })
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('OpenRouter API Error:', errorData)
      throw new Error(`Erro na API: ${response.status} - ${response.statusText}`)
    }

    const data = await response.json()
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error('Resposta inválida da API')
    }

    return data.choices[0].message.content || 'Desculpe, não consegui gerar uma resposta.'
  } catch (error) {
    console.error('Erro ao chamar OpenRouter API:', error)
    if (error instanceof Error) {
      throw new Error(`Erro de conexão: ${error.message}`)
    }
    throw new Error('Erro desconhecido ao conectar com a IA')
  }
}
