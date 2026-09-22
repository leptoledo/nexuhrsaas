'use client';

import React, { useState } from 'react';
import { AtsKanban } from '@/components/app/AtsKanban';
import { Candidate } from '@/lib/types/database.types';
import { INITIAL_CANDIDATES } from '@/lib/supabase/mock-data';
import { CheckCircle2 } from 'lucide-react';

export default function RecrutamentoPage() {
  const [candidates, setCandidates] = useState<Candidate[]>(INITIAL_CANDIDATES);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const handleAdvance = (id: string) => {
    setCandidates((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          if (c.stage === 'triagem') return { ...c, stage: 'entrevista' };
          if (c.stage === 'entrevista') return { ...c, stage: 'proposta' };
          if (c.stage === 'proposta') return { ...c, stage: 'contratado' };
        }
        return c;
      })
    );
    showToast('🎯 Candidato avançou de fase no pipeline!');
  };

  const handleOnboard = (candidate: Candidate) => {
    setCandidates((prev) => prev.filter((c) => c.id !== candidate.id));
    showToast(`🎉 ${candidate.full_name} foi admitido(a) e adicionado(a) aos Colaboradores!`);
  };

  const handleNewCandidate = () => {
    const name = prompt('Nome do Candidato:');
    if (!name) return;
    const role = prompt('Função pretendida:');
    if (!role) return;

    const newCand: Candidate = {
      id: `cand-${Date.now()}`,
      organization_id: 'org-vortex',
      full_name: name,
      email: `${name.toLowerCase().replace(' ', '.')}@email.pt`,
      role_applied: role,
      stage: 'triagem',
      fit_score: 92,
      tags: ['Novo', 'Triagem IA', 'Porto'],
    };

    setCandidates([newCand, ...candidates]);
    showToast(`Candidato ${name} adicionado ao funil de recrutamento!`);
  };

  return (
    <div className="space-y-6">
      <AtsKanban
        candidates={candidates}
        onAdvance={handleAdvance}
        onOnboard={handleOnboard}
        onNewCandidate={handleNewCandidate}
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
