'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

export function PricingTable() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('annual');

  return (
    <section id="precos" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-nexu-coral bg-nexu-coralLight px-3 py-1 rounded-full">
            Planos Transparentes em Euros (€)
          </span>
          <h2 className="mt-4 font-heading font-extrabold text-3xl sm:text-4xl text-nexu-dark tracking-tight">
            Investimento previsível que cresce com a sua empresa em Portugal
          </h2>
          <p className="mt-3 text-nexu-muted text-base sm:text-lg">
            Todos os planos incluem 14 dias de teste gratuito com acesso integral a todos os módulos e suporte local no Porto.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                billing === 'monthly'
                  ? 'bg-white text-nexu-dark shadow-sm'
                  : 'text-nexu-muted hover:text-nexu-dark'
              }`}
            >
              Faturação Mensal
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                billing === 'annual'
                  ? 'bg-white text-nexu-dark shadow-sm'
                  : 'text-nexu-muted hover:text-nexu-dark'
              }`}
            >
              <span>Faturação Anual</span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded-full font-extrabold">
                20% Poupança
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Plan 1: Starter */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Para Equipas Pequenas</div>
              <h3 className="mt-2 text-2xl font-bold font-heading text-nexu-dark">Starter</h3>
              <p className="mt-2 text-xs text-nexu-muted">Ideal para empresas até 20 colaboradores que pretendem abandonar as folhas de cálculo.</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold font-heading text-nexu-dark">
                  {billing === 'annual' ? '4 €' : '5 €'}
                </span>
                <span className="text-xs text-slate-500">/colaborador /mês</span>
              </div>

              <ul className="mt-8 space-y-3.5 text-xs text-slate-700">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Picagem de ponto com geovalidação (Conforme ACT)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Gestão de férias e mapa anual obrigatório</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Diretório da equipa, NIF e organograma</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Portal do Colaborador (Mobile & Desktop)</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href="/register?plan=starter"
                className="block text-center w-full py-3 rounded-xl border border-slate-300 hover:bg-slate-50 font-semibold text-xs text-nexu-dark transition-colors"
              >
                Iniciar Teste Gratuito
              </Link>
            </div>
          </div>

          {/* Plan 2: Growth (Featured) */}
          <div className="bg-gradient-to-b from-white to-rose-50/40 border-2 border-nexu-coral rounded-3xl p-8 flex flex-col justify-between shadow-xl relative scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-nexu-coral text-white text-[11px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
              Mais Escolhido
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-nexu-coral">Para PMEs em Expansão</div>
              <h3 className="mt-2 text-2xl font-bold font-heading text-nexu-dark">Profissional (Pro)</h3>
              <p className="mt-2 text-xs text-nexu-muted">Para empresas de 20 a 100 colaboradores que procuram automação completa de LT e IA.</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold font-heading text-nexu-dark">
                  {billing === 'annual' ? '7 €' : '8 €'}
                </span>
                <span className="text-xs text-slate-500">/colaborador /mês</span>
              </div>

              <ul className="mt-8 space-y-3.5 text-xs text-slate-700">
                <li className="flex items-center gap-2.5 font-semibold text-nexu-dark">
                  <Check className="w-4 h-4 text-nexu-coral" />
                  <span>Tudo o incluído no plano Starter, e ainda:</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Recrutamento & Seleção (ATS Kanban)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Distribuição segura de recibos de vencimento</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span><strong>NexusLT AI Copilot</strong> integrado</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Relatórios de assiduidade prontos para auditorias da ACT</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href="/register?plan=pro"
                className="block text-center w-full py-3.5 rounded-xl bg-nexu-coral hover:bg-nexu-coralDark text-white font-semibold text-xs transition-all shadow-lg hover:shadow-nexu-coral/30"
              >
                Experimentar Plano Pro Grátis
              </Link>
            </div>
          </div>

          {/* Plan 3: Enterprise */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Grandes Organizações</div>
              <h3 className="mt-2 text-2xl font-bold font-heading text-nexu-dark">Empresarial</h3>
              <p className="mt-2 text-xs text-nexu-muted">Para operações com mais de 100 colaboradores com múltiplos NIFs e requisitos personalizados.</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold font-heading text-nexu-dark">
                  {billing === 'annual' ? '11 €' : '13 €'}
                </span>
                <span className="text-xs text-slate-500">/colaborador /mês</span>
              </div>

              <ul className="mt-8 space-y-3.5 text-xs text-slate-700">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Todas as funcionalidades sem qualquer limite</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Gestor de Sucesso de Conta dedicado (Porto)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Integrações com software de faturação e ERPs</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>SLA contratual e conformidade RGPD reforçada</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href="/register?plan=enterprise"
                className="block text-center w-full py-3 rounded-xl border border-slate-300 hover:bg-slate-50 font-semibold text-xs text-nexu-dark transition-colors"
              >
                Falar com a Nossa Equipa no Porto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
