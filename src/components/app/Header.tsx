'use client';

import React, { useState, useEffect } from 'react';
import { Search, Bell } from 'lucide-react';

export function Header({ onQuickPunch }: { onQuickPunch?: () => void }) {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      setTimeStr(new Date().toLocaleTimeString('pt-PT'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shrink-0 z-10">
      {/* Search Input */}
      <div className="flex items-center gap-3 w-72 sm:w-96">
        <div className="relative w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Pesquisar colaboradores, relatórios ACT, vagas..."
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-nexu-coral bg-slate-50 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Quick Clock Widget & Notifications */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-mono font-bold text-slate-700">{timeStr || '12:00:00'}</span>
          <button
            onClick={onQuickPunch}
            className="ml-2 bg-nexu-coral hover:bg-nexu-coralDark text-white px-2.5 py-1 rounded-lg font-bold text-[11px] transition-colors shadow-sm"
          >
            Picar Ponto
          </button>
        </div>

        {/* Notifications */}
        <button
          className="relative p-2 rounded-xl hover:bg-slate-100 text-slate-600 transition-colors"
          title="Notificações"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-nexu-coral rounded-full" />
        </button>
      </div>
    </header>
  );
}
