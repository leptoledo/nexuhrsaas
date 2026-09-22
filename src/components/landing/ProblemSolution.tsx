import React from 'react';
import { XCircle, CheckCircle, X, Check } from 'lucide-react';

export function ProblemSolution() {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-nexu-indigo bg-nexu-indigoLight px-3 py-1 rounded-full">
            Transformação Digital em Portugal
          </span>
          <h2 className="mt-4 font-heading font-extrabold text-3xl sm:text-4xl text-nexu-dark tracking-tight">
            Por que as empresas em Portugal estão a substituir métodos antigos pelo NexusLT?
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* The Old Way */}
          <div className="bg-red-50/50 border border-red-200 rounded-3xl p-8">
            <div className="flex items-center gap-3 text-red-600 font-heading font-bold text-xl mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <XCircle className="w-6 h-6" />
              </div>
              <span>O Método Antigo (Caos & Folhas de Cálculo)</span>
            </div>
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Dezenas de folhas de cálculo desatualizadas com versões em conflito.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Dificuldade no fecho mensal da picagem de ponto para o processamento salarial.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Aprovações perdidas em mensagens dispersas de WhatsApp e caixas de correio.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Risco iminente de coimas pesadas da ACT por falhas no registo de assiduidade.</span>
              </li>
            </ul>
          </div>

          {/* The NexusLT Way */}
          <div className="bg-emerald-50/50 border border-emerald-200 rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-3 text-emerald-700 font-heading font-bold text-xl mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <span>Com o NexusLT (Automação & Conformidade ACT)</span>
            </div>
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Base única de dados na cloud protegida e atualizada em tempo real.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Registo de assiduidade diário conforme o Art.º 202.º do Código do Trabalho.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Aprovações instantâneas de férias (22 dias úteis) com 1 clique no telemóvel.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Total tranquilidade jurídica perante a ACT com relatórios fiscais auditáveis.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
