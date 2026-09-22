'use client';

import React, { useState } from 'react';
import { TimeTracker } from '@/components/app/TimeTracker';
import { PunchType } from '@/lib/types/database.types';
import { Download, CheckCircle2 } from 'lucide-react';

interface PunchRecord {
  date: string;
  entry1: string;
  breakStart: string;
  breakEnd: string;
  exit2: string;
  totalHours: string;
  balance: string;
  balanceColor: string;
}

export default function PontoPage() {
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const handlePunch = (type: PunchType, label: string) => {
    const time = new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });
    showToast(`⏱️ ${label} picado com sucesso às ${time}! Registo geovalidado no Porto conforme a ACT.`);
  };

  const timesheet: PunchRecord[] = [
    {
      date: 'Seg, 15 Set',
      entry1: '09:00',
      breakStart: '12:30',
      breakEnd: '13:30',
      exit2: '18:00',
      totalHours: '08h 00m',
      balance: '0h 00m',
      balanceColor: 'text-slate-400',
    },
    {
      date: 'Ter, 16 Set',
      entry1: '08:45',
      breakStart: '12:30',
      breakEnd: '13:30',
      exit2: '18:45',
      totalHours: '09h 00m',
      balance: '+1h Suplementar',
      balanceColor: 'text-nexu-coral font-bold',
    },
    {
      date: 'Qua, 17 Set',
      entry1: '09:00',
      breakStart: '12:30',
      breakEnd: '13:30',
      exit2: '18:00',
      totalHours: '08h 00m',
      balance: '0h 00m',
      balanceColor: 'text-slate-400',
    },
    {
      date: 'Qui, 18 Set',
      entry1: '08:50',
      breakStart: '12:30',
      breakEnd: '13:30',
      exit2: '18:10',
      totalHours: '08h 20m',
      balance: '+0h 20m',
      balanceColor: 'text-emerald-600 font-bold',
    },
    {
      date: 'Sex, 19 Set',
      entry1: '09:05',
      breakStart: '12:30',
      breakEnd: '13:30',
      exit2: '18:05',
      totalHours: '08h 00m',
      balance: '0h 00m',
      balanceColor: 'text-slate-400',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading font-extrabold text-2xl text-slate-900">
          Registo de Assiduidade & Tempos de Trabalho
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Registo diário com geolocalização e cálculo automático segundo o Artigo 202.º do Código do Trabalho (Lei n.º 7/2009) e normas da ACT.
        </p>
      </div>

      {/* Live Interactive Punch Component */}
      <TimeTracker onPunch={handlePunch} />

      {/* Timesheet Table */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading font-bold text-base text-slate-900">
            Extrato de Assiduidade Individual (Setembro/2026)
          </h3>
          <button
            onClick={() => showToast('📥 Extrato de assiduidade exportado em formato homologado pela ACT!')}
            className="px-3.5 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Exportar Relatório ACT</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] tracking-wider border-y border-slate-200">
              <tr>
                <th className="py-3 px-4">Data</th>
                <th className="py-3 px-4">Entrada 1</th>
                <th className="py-3 px-4">Pausa Almoço</th>
                <th className="py-3 px-4">Regresso Almoço</th>
                <th className="py-3 px-4">Saída 2</th>
                <th className="py-3 px-4">Total Trabalhado</th>
                <th className="py-3 px-4">Saldo / Banco Horas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {timesheet.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-800">{row.date}</td>
                  <td className="py-3 px-4 text-slate-600">{row.entry1}</td>
                  <td className="py-3 px-4 text-slate-600">{row.breakStart}</td>
                  <td className="py-3 px-4 text-slate-600">{row.breakEnd}</td>
                  <td className="py-3 px-4 text-slate-600">{row.exit2}</td>
                  <td className="py-3 px-4 font-bold text-emerald-600">{row.totalHours}</td>
                  <td className={`py-3 px-4 ${row.balanceColor}`}>{row.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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
