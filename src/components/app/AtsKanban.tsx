'use client';

import React from 'react';
import { Candidate, CandidateStage } from '@/lib/types/database.types';
import { ChevronRight, UserCheck, Plus } from 'lucide-react';

interface AtsKanbanProps {
  candidates: Candidate[];
  onAdvance: (id: string) => void;
  onOnboard: (candidate: Candidate) => void;
  onNewCandidate: () => void;
}

export function AtsKanban({
  candidates,
  onAdvance,
  onOnboard,
  onNewCandidate,
}: AtsKanbanProps) {
  const stages: { id: CandidateStage; label: string; bg: string }[] = [
    { id: 'triagem', label: '1. Triagem', bg: 'bg-slate-100' },
    { id: 'entrevista', label: '2. Entrevistas', bg: 'bg-slate-100' },
    { id: 'proposta', label: '3. Proposta Feita', bg: 'bg-slate-100' },
    { id: 'contratado', label: '4. Contratado 🎉', bg: 'bg-emerald-50/80' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading font-extrabold text-2xl text-slate-900">
            Recrutamento & Seleção (ATS Kanban)
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Pipeline ágil com triagem assistida por IA e contratação/admissão com 1 clique.
          </p>
        </div>
        <button
          onClick={onNewCandidate}
          className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Cadastrar Candidato</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
        {stages.map((st) => {
          const items = candidates.filter((c) => c.stage === st.id);
          return (
            <div key={st.id} className={`${st.bg} p-4 rounded-2xl border border-slate-200`}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-700">
                  {st.label}
                </span>
                <span className="text-xs bg-white text-slate-700 font-bold px-2 py-0.5 rounded-full border border-slate-200 shadow-sm">
                  {items.length}
                </span>
              </div>

              <div className="space-y-3">
                {items.map((cand) => (
                  <div
                    key={cand.id}
                    className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm text-xs hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800">{cand.full_name}</span>
                      <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.5 rounded border border-emerald-200">
                        {cand.fit_score}% Fit
                      </span>
                    </div>
                    <div className="text-slate-500 text-[11px] mt-1">{cand.role_applied}</div>

                    <div className="mt-2.5 flex flex-wrap gap-1">
                      {cand.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-100 text-slate-600 text-[9px] px-1.5 py-0.5 rounded font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                      {cand.stage !== 'contratado' ? (
                        <button
                          onClick={() => onAdvance(cand.id)}
                          className="text-nexu-indigo hover:text-indigo-800 font-bold flex items-center gap-1 transition-colors"
                        >
                          <span>Avançar Etapa</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <button
                          onClick={() => onOnboard(cand)}
                          className="text-emerald-700 hover:text-emerald-900 font-bold flex items-center gap-1 transition-colors"
                        >
                          <UserCheck className="w-3.5 h-3.5" />
                          <span>Efetivar Admissão</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
