import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt é obrigatório' }, { status: 400 });
    }

    const lower = prompt.toLowerCase();
    let responseText = '';

    if (lower.includes('férias') || lower.includes('ausência')) {
      responseText =
        'Identifiquei 2 solicitações pendentes de férias no painel. Mariana Santos acumula 22 dias de saldo e Lucas Gomes tem 18 dias disponíveis.';
    } else if (lower.includes('vaga') || lower.includes('desenvolvedor')) {
      responseText =
        'Descrição gerada: Desenvolvedor React/Next.js Senior (CLT, Remoto). Principais responsabilidades: desenvolvimento de interfaces escaláveis, arquitetura multi-tenant e testes automatizados.';
    } else if (lower.includes('clt') || lower.includes('banco de horas')) {
      responseText =
        'Conforme o Art. 59, § 5º da CLT, o banco de horas individual pode ser pactuado por acordo individual escrito com compensação máxima em até 6 meses.';
    } else {
      responseText =
        'Sua organização Vortex Tech conta com 8 colaboradores ativos e 94.2% de assiduidade semanal registrada no sistema.';
    }

    return NextResponse.json({ response: responseText });
  } catch {
    return NextResponse.json({ error: 'Erro interno ao processar IA' }, { status: 500 });
  }
}
