'use client';

import React, { useState } from 'react';
import { Building2, CreditCard, Key, CheckCircle2, Save } from 'lucide-react';

export default function ConfiguracoesPage() {
  const [orgName, setOrgName] = useState('Vortex Tech Soluções Lda.');
  const [nipc, setNipc] = useState('509876543');
  const [city, setCity] = useState('Porto, Portugal');
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'growth' | 'enterprise'>('growth');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Configurações guardadas com sucesso na base de dados!');
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="font-heading font-extrabold text-2xl text-slate-900">
          Configurações da Organização & Plano SaaS
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Efetue a gestão dos dados cadastrais da empresa em Portugal, faturação em Euros, chaves de API e segurança.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Dados da Empresa */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 text-xs">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 font-bold text-sm text-slate-800">
            <Building2 className="w-4 h-4 text-nexu-coral" />
            <span>Dados da Entidade Patronal (Portugal)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Denominação Social</label>
              <input
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nexu-coral text-xs"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">NIPC / NIF da Empresa</label>
              <input
                type="text"
                value={nipc}
                onChange={(e) => setNipc(e.target.value)}
                maxLength={9}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nexu-coral text-xs font-mono"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Sede / Concelho</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nexu-coral text-xs"
              />
            </div>
          </div>
        </div>

        {/* Plano & Assinatura */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 text-xs">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 font-bold text-sm text-slate-800">
            <CreditCard className="w-4 h-4 text-nexu-indigo" />
            <span>Plano de Subscrição NexusLT (€)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              onClick={() => setSelectedPlan('starter')}
              className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                selectedPlan === 'starter'
                  ? 'border-nexu-coral bg-rose-50/30 shadow-md'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="font-bold text-sm text-slate-900">Starter</div>
              <div className="text-xs text-slate-500 mt-0.5">4 € / colab / mês</div>
              <div className="text-[11px] text-slate-600 mt-2">Até 20 colaboradores, assiduidade e mapa de férias ACT</div>
            </div>

            <div
              onClick={() => setSelectedPlan('growth')}
              className={`p-4 rounded-2xl border-2 cursor-pointer transition-all relative ${
                selectedPlan === 'growth'
                  ? 'border-nexu-coral bg-rose-50/30 shadow-md'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <span className="absolute -top-2.5 right-3 bg-nexu-coral text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                ATIVO
              </span>
              <div className="font-bold text-sm text-slate-900">Profissional (Pro)</div>
              <div className="text-xs text-slate-500 mt-0.5">7 € / colab / mês</div>
              <div className="text-[11px] text-slate-600 mt-2">Ilimitado com IA Copilot, ATS e recibos de vencimento</div>
            </div>

            <div
              onClick={() => setSelectedPlan('enterprise')}
              className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                selectedPlan === 'enterprise'
                  ? 'border-nexu-coral bg-rose-50/30 shadow-md'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="font-bold text-sm text-slate-900">Empresarial</div>
              <div className="text-xs text-slate-500 mt-0.5">11 € / colab / mês</div>
              <div className="text-[11px] text-slate-600 mt-2">Múltiplos NIFs, SLA 99.9%, gestor dedicado no Porto</div>
            </div>
          </div>
        </div>

        {/* Integrações & Chaves de API */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 text-xs">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 font-bold text-sm text-slate-800">
            <Key className="w-4 h-4 text-amber-500" />
            <span>Chaves de API & Webhooks</span>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">API Key da Organização (Bearer Token)</label>
            <div className="flex items-center gap-2">
              <input
                type="password"
                readOnly
                value="nx_live_98a72bc891f044e182390aefd8"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 font-mono text-slate-600 text-xs"
              />
              <button
                type="button"
                onClick={() => showToast('Chave de API copiada para a área de transferência!')}
                className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs whitespace-nowrap"
              >
                Copiar
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-nexu-coral hover:bg-nexu-coralDark text-white font-bold rounded-xl text-xs transition-all shadow-md flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>Guardar Alterações</span>
          </button>
        </div>
      </form>

      {/* Toast */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-xs animate-scale-up">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMsg}</span>
        </div>
      )}
    </div>
  );
}
