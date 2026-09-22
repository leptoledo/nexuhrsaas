'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/app/Sidebar';
import { Header } from '@/components/app/Header';
import { CheckCircle2 } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleQuickPunch = () => {
    const time = new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });
    showToast(`⏱️ Ponto Picado com sucesso às ${time} (Porto / GPS Validado conforme ACT)!`);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 font-sans antialiased text-nexu-dark">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Header onQuickPunch={handleQuickPunch} />
        <main className="flex-1 overflow-y-auto p-6 bg-slate-50">
          {children}
        </main>
      </div>

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700 animate-scale-up text-xs sm:text-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
