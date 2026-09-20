'use client';

import React, { useState } from 'react';
import { VacationRequest, Employee, VacationType } from '@/lib/types/database.types';
import { Palmtree, Check, X, Plus } from 'lucide-react';

interface VacationManagerProps {
  vacations: VacationRequest[];
  employees: Employee[];
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  onCreate: (req: Partial<VacationRequest>) => void;
}

export function VacationManager({
  vacations,
  employees,
  onApprove,
  onReject,
  onCreate,
}: VacationManagerProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEmpId, setSelectedEmpId] = useState(employees[0]?.id || '');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [vacType, setVacType] = useState<VacationType>('regular_vacation');
  const [reason, setReason] = useState('');

  const pendingList = vacations.filter((v) => v.status === 'pending');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emp = employees.find((e) => e.id === selectedEmpId);
    onCreate({
      employee_id: selectedEmpId,
      employee_name: emp?.full_name || 'Colaborador',
      employee_role: emp?.role_title || '',
      start_date: startDate,
      end_date: endDate,
      days_count: 10,
      vacation_type: vacType,
      status: 'pending',
      reason,
    });
    setModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header with CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading font-extrabold text-2xl text-slate-900">
            Gestão de Férias & Ausências
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Aprovações rápidas para gestores, saldos automatizados e calendário para evitar sobreposição de ausências.
          </p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-all shadow-md flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Nova Solicitação</span>
        </button>
      </div>

      {/* Pending Queue */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
        <h3 className="font-heading font-bold text-base text-slate-900 mb-4 flex items-center gap-2">
          <Palmtree className="w-4 h-4 text-amber-500" />
          <span>Solicitações Aguardando Aprovação do Gestor</span>
        </h3>

        {pendingList.length === 0 ? (
          <div className="p-8 text-center text-slate-400 text-xs">
            <Check className="w-8 h-8 mx-auto text-emerald-500 mb-2" />
            Todas as solicitações de férias foram respondidas! Nenhuma pendência na fila.
          </div>
        ) : (
          <div className="space-y-3">
            {pendingList.map((v) => (
              <div
                key={v.id}
                className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center">
                    {(v.employee_name || 'CO')
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900">
                      {v.employee_name}{' '}
                      <span className="text-xs text-slate-500 font-normal">
                        ({v.employee_role})
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 mt-0.5">
                      <strong>Período:</strong> {v.start_date} até {v.end_date} ({v.days_count} dias) •{' '}
                      <span className="text-amber-700 font-semibold">{v.vacation_type}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onApprove(v.id)}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Aprovar</span>
                  </button>
                  <button
                    onClick={() => onReject(v.id)}
                    className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs rounded-xl transition-colors"
                  >
                    Recusar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-scale-up">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-heading font-bold text-xl text-slate-900 mb-1">
              Solicitar Férias ou Ausência
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Envie o pedido para validação imediata do seu gestor.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Colaborador</label>
                <select
                  value={selectedEmpId}
                  onChange={(e) => setSelectedEmpId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                >
                  {employees.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.full_name} ({e.role_title}) - Saldo: {e.vacation_balance_days} dias
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Início</label>
                  <input
                    type="date"
                    required
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Fim</label>
                  <input
                    type="date"
                    required
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Tipo de Ausência</label>
                <select
                  value={vacType}
                  onChange={(e) => setVacType(e.target.value as VacationType)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                >
                  <option value="regular_vacation">Férias Regulares</option>
                  <option value="day_off">Folga / Day-off</option>
                  <option value="sick_leave">Atestado Médico</option>
                  <option value="family_leave">Licença Familiar</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-xs transition-all shadow-md mt-4"
              >
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
