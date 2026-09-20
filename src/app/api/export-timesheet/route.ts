import { NextResponse } from 'next/server';
import { INITIAL_EMPLOYEES, INITIAL_TIME_RECORDS } from '@/lib/supabase/mock-data';

export const dynamic = 'force-dynamic';

export async function GET() {
  const exportData = {
    organization: 'Vortex Tech Soluções',
    generated_at: new Date().toISOString(),
    standard: 'Portaria 671 MTE (REP-P)',
    employees_count: INITIAL_EMPLOYEES.length,
    records: INITIAL_TIME_RECORDS,
  };

  return NextResponse.json(exportData, {
    headers: {
      'Content-Disposition': 'attachment; filename="espelho_ponto_fiscal.json"',
    },
  });
}
