'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  CheckCircle,
  Palmtree,
  Briefcase,
  Clock,
  UserPlus,
  ArrowRight,
  TrendingUp,
  Bot,
} from 'lucide-react';
import { MetricCard } from '@/components/app/MetricCard';
import { AttendanceChart } from '@/components/app/AttendanceChart';
import { INITIAL_EMPLOYEES, INITIAL_VACATIONS } from '@/lib/supabase/mock-data';

export default function DashboardPage() {
  const [employees] = useState(INITIAL_EMPLOYEES);
  const [vacations] = useState(INITIAL_VACATIONS);

  const pendingVacations = vacations.filter((v) => v.status === 'pending').length;

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 to-slate-800 p-6 rounded-3xl text-white shadow-lg">
        <div>
          <h1 className="font-heading font-extrabold text-2xl">Olá, Mariana! 👋</h1>
          <p className="text-xs text-slate-300 mt-1">
            Aqui está o resumo operacional do RH da <strong>Vortex Tech</strong> hoje, 20 de Setembro de 2026.
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <Link
            href="/app/ponto"
            className="px-4 py-2.5 rounded-xl bg-nexu-coral hover:bg-nexu-coralDark text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Espelho de Ponto</span>
          </Link>
          <Link
            href="/app/colaboradores"
            className="px-4 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold transition-all flex items-center gap-1.5"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Novo Colaborador</span>
          </Link>
        </div>
      </div>

      {/* KPI Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <MetricCard
          title="Total de Colaboradores"
          value={employees.length}
          icon={Users}
          iconBgColor="bg-indigo-50"
          iconColor="text-nexu-indigo"
          trendText="+2 admissões"
          subtitle="este mês"
        />
        <MetricCard
          title="Presentes Hoje"
          value="7 / 8"
          icon={CheckCircle}
          iconBgColor="bg-emerald-50"
          iconColor="text-emerald-600"
          trendText="87.5% assiduidade"
          subtitle="hoje"
        />
        <MetricCard
          title="Férias & Ausências"
          value={`${pendingVacations} Pendentes`}
          icon={Palmtree}
          iconBgColor="bg-amber-50"
          iconColor="text-amber-600"
          trendText="Ação necessária"
          trendPositive={false}
          subtitle="aprovação"
        />
        <MetricCard
          title="Vagas Abertas"
          value="3 Vagas"
          icon={Briefcase}
          iconBgColor="bg-rose-50"
          iconColor="text-nexu-coral"
          trendText="5 candidatos"
          subtitle="no funil ATS"
        />
      </div>

      {/* Charts & AI Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Attendance Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-heading font-bold text-base text-slate-900">
                Assiduidade Semanal (%)
              </h3>
              <p className="text-xs text-slate-500">Frequência média registrada nos últimos 7 dias</p>
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Média 94.2%</span>
            </span>
          </div>
          <AttendanceChart />
        </div>

        {/* AI Insight Card */}
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-6 rounded-3xl text-white shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-indigo-300 font-semibold mb-3">
              <span className="flex items-center gap-1.5">
                <Bot className="w-4 h-4 text-nexu-coral" />
                Nexu AI Insights
              </span>
              <span className="bg-indigo-500/30 text-indigo-200 text-[10px] px-2 py-0.5 rounded">
                ATIVO
              </span>
            </div>
            <h4 className="font-heading font-bold text-lg text-white">Análise Preditiva de DP</h4>
            <p className="mt-2 text-xs text-slate-300 leading-relaxed">
              &ldquo;Detectei que <strong>Mariana Santos</strong> acumula 22 dias de férias com prazo limite próximo em Novembro. Recomendo alinhar agendamento.&rdquo;
            </p>
          </div>

          <div className="mt-6 space-y-2">
            <Link
              href="/app/ai-copilot"
              className="w-full py-2.5 bg-nexu-coral hover:bg-nexu-coralDark text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow"
            >
              <span>Conversar com a IA</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Activity Feed Table */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading font-bold text-base text-slate-900">
            Atividades e Batidas de Ponto Recentes
          </h3>
          <span className="text-xs text-slate-400">Atualizado em tempo real</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] tracking-wider border-y border-slate-200">
              <tr>
                <th className="py-3 px-4">Colaborador</th>
                <th className="py-3 px-4">Ação / Evento</th>
                <th className="py-3 px-4">Horário / Data</th>
                <th className="py-3 px-4">Método</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-800">Lucas Gomes</td>
                <td className="py-3 px-4 text-slate-600">Registro de Ponto (Entrada)</td>
                <td className="py-3 px-4 text-slate-500">08:58</td>
                <td className="py-3 px-4 text-slate-500">App Mobile (GPS)</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    Confirmado
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-800">Mariana Santos</td>
                <td className="py-3 px-4 text-slate-600">Solicitação de Férias (10 dias)</td>
                <td className="py-3 px-4 text-slate-500">09:15</td>
                <td className="py-3 px-4 text-slate-500">Portal Web</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                    Pendente RH
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4 font-semibold text-slate-800">Ana Ferreira</td>
                <td className="py-3 px-4 text-slate-600">Registro de Ponto (Entrada)</td>
                <td className="py-3 px-4 text-slate-500">09:02</td>
                <td className="py-3 px-4 text-slate-500">Reconhecimento Facial</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    Confirmado
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
