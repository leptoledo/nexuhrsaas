import { NextResponse } from 'next/server';
import { INITIAL_EMPLOYEES, INITIAL_TIME_RECORDS } from '@/lib/supabase/mock-data';

export const dynamic = 'force-dynamic';

export async function GET() {
  const exportData = {
    organization: 'Vortex Tech Soluções Lda.',
    sede: 'Porto, Portugal',
    generated_at: new Date().toISOString(),
    standard: 'Código do Trabalho (Lei n.º 7/2009 - Artigo 202.º / Inspeção ACT)',
    currency: 'EUR (€)',
    employees_count: INITIAL_EMPLOYEES.length,
    records: INITIAL_TIME_RECORDS,
  };

  return NextResponse.json(exportData, {
    headers: {
      'Content-Disposition': 'attachment; filename="extrato_assiduidade_act.json"',
    },
  });
}
