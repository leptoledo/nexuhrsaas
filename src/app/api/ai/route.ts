import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: 'O prompt é obrigatório' }, { status: 400 });
    }

    const lower = prompt.toLowerCase();
    let responseText = '';

    if (lower.includes('férias') || lower.includes('ausência') || lower.includes('baixa')) {
      responseText =
        'Identifiquei 2 pedidos pendentes de férias no painel. Mariana Santos acumula 22 dias de saldo e Lucas Gomes tem 18 dias disponíveis, em conformidade com o Art.º 238.º do Código do Trabalho.';
    } else if (lower.includes('vaga') || lower.includes('recrutamento') || lower.includes('programador')) {
      responseText =
        'Descrição gerada: Engenheiro de Software React/Next.js Sénior (Contrato Sem Termo, Híbrido no Porto). Principais responsabilidades: desenvolvimento de interfaces escaláveis, arquitetura multi-inquilino e testes automatizados.';
    } else if (lower.includes('código do trabalho') || lower.includes('act') || lower.includes('banco de horas') || lower.includes('legislação')) {
      responseText =
        'De acordo com o Art.º 202.º e Art.º 208.º do Código do Trabalho, o registo diário de assiduidade é obrigatório para fiscalização da ACT, e o banco de horas individual pode ser acordado até um máximo de 150 horas anuais.';
    } else {
      responseText =
        'A sua organização Vortex Tech conta com 8 colaboradores ativos no Porto e 94.2% de assiduidade semanal registada no sistema NexusLT.';
    }

    return NextResponse.json({ response: responseText });
  } catch {
    return NextResponse.json({ error: 'Erro interno ao processar IA' }, { status: 500 });
  }
}
