'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

export function PricingTable() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="precos" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-nexu-coral bg-nexu-coralLight px-3 py-1 rounded-full">
            Planos Transparentes
          </span>
          <h2 className="mt-4 font-heading font-extrabold text-3xl sm:text-4xl text-nexu-dark tracking-tight">
            Investimento previsível que cresce com a sua empresa
          </h2>
          <p className="mt-3 text-nexu-muted text-base sm:text-lg">
            Todos os planos incluem 14 dias de teste grátis com acesso completo a todos os módulos.
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
              Mensal
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                billing === 'annual'
                  ? 'bg-white text-nexu-dark shadow-sm'
                  : 'text-nexu-muted hover:text-nexu-dark'
              }`}
            >
              <span>Anual</span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded-full font-extrabold">
                20% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Plan 1: Starter */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Para Equipes em Início</div>
              <h3 className="mt-2 text-2xl font-bold font-heading text-nexu-dark">Starter</h3>
              <p className="mt-2 text-xs text-nexu-muted">Ideal para empresas de até 20 colaboradores que buscam sair do Excel.</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold font-heading text-nexu-dark">
                  {billing === 'annual' ? 'R$ 11' : 'R$ 14'}
                </span>
                <span className="text-xs text-slate-500">/colaborador /mês</span>
              </div>

              <ul className="mt-8 space-y-3.5 text-xs text-slate-700">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Ponto digital via Web & Mobile (GPS)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Gestão de férias e ausências</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Diretório de colaboradores e organograma</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Portal do Colaborador (Autosserviço)</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href="/register?plan=starter"
                className="block text-center w-full py-3 rounded-xl border border-slate-300 hover:bg-slate-50 font-semibold text-xs text-nexu-dark transition-colors"
              >
                Começar Teste Grátis
              </Link>
            </div>
          </div>

          {/* Plan 2: Growth (Featured) */}
          <div className="bg-gradient-to-b from-white to-rose-50/40 border-2 border-nexu-coral rounded-3xl p-8 flex flex-col justify-between shadow-xl relative scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-nexu-coral text-white text-[11px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
              Mais Popular
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-nexu-coral">Para Empresas em Crescimento</div>
              <h3 className="mt-2 text-2xl font-bold font-heading text-nexu-dark">Growth & Pro</h3>
              <p className="mt-2 text-xs text-nexu-muted">Para times de 20 a 150 colaboradores que querem automação completa e IA.</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold font-heading text-nexu-dark">
                  {billing === 'annual' ? 'R$ 19' : 'R$ 24'}
                </span>
                <span className="text-xs text-slate-500">/colaborador /mês</span>
              </div>

              <ul className="mt-8 space-y-3.5 text-xs text-slate-700">
                <li className="flex items-center gap-2.5 font-semibold text-nexu-dark">
                  <Check className="w-4 h-4 text-nexu-coral" />
                  <span>Tudo do plano Starter, mais:</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Recrutamento & Seleção (ATS Kanban)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Assinatura digital ilimitada de documentos</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span><strong>Nexu AI Copilot</strong> integrado</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Suporte prioritário via WhatsApp & Chat</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href="/register?plan=growth"
                className="block text-center w-full py-3.5 rounded-xl bg-nexu-coral hover:bg-nexu-coralDark text-white font-semibold text-xs transition-all shadow-lg hover:shadow-nexu-coral/30"
              >
                Experimentar Plano Growth Grátis
              </Link>
            </div>
          </div>

          {/* Plan 3: Enterprise */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Grandes Operações</div>
              <h3 className="mt-2 text-2xl font-bold font-heading text-nexu-dark">Enterprise</h3>
              <p className="mt-2 text-xs text-nexu-muted">Para operações com mais de 150 colaboradores com requisitos customizados.</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold font-heading text-nexu-dark">Personalizado</span>
              </div>

              <ul className="mt-8 space-y-3.5 text-xs text-slate-700">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Todas as funcionalidades sem limites</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Gerente de Sucesso de Conta dedicado (CSM)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Integrações via API customizada & SSO / SAML</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>SLA de atendimento de 99.9% garantido</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href="/register?plan=enterprise"
                className="block text-center w-full py-3 rounded-xl border border-slate-300 hover:bg-slate-50 font-semibold text-xs text-nexu-dark transition-colors"
              >
                Falar com Consultor Enterprise
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
