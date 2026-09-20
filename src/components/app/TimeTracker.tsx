'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, LogIn, Coffee, RotateCcw, LogOut, CheckCircle2 } from 'lucide-react';
import { PunchType } from '@/lib/types/database.types';

interface TimeTrackerProps {
  onPunch: (type: PunchType, label: string) => void;
}

export function TimeTracker({ onPunch }: TimeTrackerProps) {
  const [timeStr, setTimeStr] = useState<string>('');
  const [dateStr, setDateStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('pt-BR'));
      setDateStr(
        now.toLocaleDateString('pt-BR', {
          weekday: 'long',
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <div className="text-xs font-semibold text-nexu-coral uppercase tracking-widest">
          Ponto Digital Portaria 671 MTE
        </div>
        <div className="text-4xl sm:text-5xl font-mono font-extrabold text-white mt-1">
          {timeStr || '12:00:00'}
        </div>
        <div className="text-xs text-slate-300 capitalize mt-1">
          {dateStr || 'Segunda-feira, 20 de Setembro de 2026'}
        </div>
        <div className="text-xs text-slate-400 mt-2 flex items-center justify-center md:justify-start gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          <span>Localização: São Paulo, Brasil (GPS Validado)</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 w-full md:w-auto">
        <button
          onClick={() => onPunch('entry', '1. Entrada')}
          className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs transition-colors shadow flex items-center justify-center gap-2"
        >
          <LogIn className="w-4 h-4" />
          <span>1. Entrada</span>
        </button>

        <button
          onClick={() => onPunch('break_start', '2. Almoço')}
          className="px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 font-bold text-xs transition-colors shadow flex items-center justify-center gap-2"
        >
          <Coffee className="w-4 h-4" />
          <span>2. Almoço</span>
        </button>

        <button
          onClick={() => onPunch('break_end', '3. Retorno')}
          className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs transition-colors shadow flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>3. Retorno</span>
        </button>

        <button
          onClick={() => onPunch('exit', '4. Saída')}
          className="px-5 py-3 rounded-xl bg-nexu-coral hover:bg-nexu-coralDark font-bold text-xs transition-colors shadow flex items-center justify-center gap-2"
        >
          <LogOut className="w-4 h-4" />
          <span>4. Saída</span>
        </button>
      </div>
    </div>
  );
}
