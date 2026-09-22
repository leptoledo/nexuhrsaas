'use client';

import React, { useState } from 'react';
import { VacationManager } from '@/components/app/VacationManager';
import { VacationRequest } from '@/lib/types/database.types';
import { INITIAL_EMPLOYEES, INITIAL_VACATIONS } from '@/lib/supabase/mock-data';
import { CheckCircle2 } from 'lucide-react';

export default function FeriasPage() {
  const [vacations, setVacations] = useState<VacationRequest[]>(INITIAL_VACATIONS);
  const [employees] = useState(INITIAL_EMPLOYEES);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const handleApprove = (id: string) => {
    setVacations(
      vacations.map((v) => (v.id === id ? { ...v, status: 'approved' } : v))
    );
    showToast('✅ Férias aprovadas e registadas no Mapa Anual!');
  };

  const handleReject = (id: string) => {
    setVacations(
      vacations.map((v) => (v.id === id ? { ...v, status: 'rejected' } : v))
    );
    showToast('Pedido de férias recusado.');
  };

  const handleCreate = (req: Partial<VacationRequest>) => {
    const newVac: VacationRequest = {
      id: `vac-${Date.now()}`,
      organization_id: 'org-vortex',
      employee_id: req.employee_id || 'emp-1',
      employee_name: req.employee_name || 'Colaborador',
      employee_role: req.employee_role || '',
      start_date: req.start_date || '2026-10-01',
      end_date: req.end_date || '2026-10-10',
      days_count: req.days_count || 9,
      vacation_type: req.vacation_type || 'regular_vacation',
      status: 'pending',
      reason: req.reason || '',
    };
    setVacations([newVac, ...vacations]);
    showToast('Pedido de férias enviado à direção!');
  };

  return (
    <div className="space-y-6">
      <VacationManager
        vacations={vacations}
        employees={employees}
        onApprove={handleApprove}
        onReject={handleReject}
        onCreate={handleCreate}
      />

      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-xs animate-scale-up">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMsg}</span>
        </div>
      )}
    </div>
  );
}
