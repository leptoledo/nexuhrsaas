'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Layers,
  LayoutDashboard,
  Users,
  Clock,
  Palmtree,
  Briefcase,
  FileCheck,
  Bot,
  Settings,
  ArrowLeft,
  LogOut,
} from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
    } catch {
      // ignore
    }
    router.push('/login');
  };

  const navLinks = [
    { href: '/app', label: 'Dashboard Geral', icon: LayoutDashboard },
    { href: '/app/colaboradores', label: 'Colaboradores', icon: Users, badge: '8' },
    { href: '/app/ponto', label: 'Assiduidade & Ponto', icon: Clock },
    { href: '/app/ferias', label: 'Férias & Ausências', icon: Palmtree, badge: '2', badgeColor: 'bg-amber-500/20 text-amber-300' },
    { href: '/app/recrutamento', label: 'Recrutamento (ATS)', icon: Briefcase, badge: '5', badgeColor: 'bg-emerald-500/20 text-emerald-300' },
    { href: '/app/documentos', label: 'Documentos & Vencimentos', icon: FileCheck },
    { href: '/app/configuracoes', label: 'Configurações', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col justify-between shrink-0 border-r border-slate-800 select-none z-20 h-screen sticky top-0">
      <div>
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-nexu-coral to-rose-400 flex items-center justify-center text-white shadow">
              <Layers className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                Nexus<span className="text-nexu-coral">LT</span>
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 -mt-1">
                Porto • PT 🇵🇹
              </span>
            </div>
          </Link>
          <span className="text-[10px] bg-slate-800 text-slate-400 font-mono px-2 py-0.5 rounded border border-slate-700">
            v2.4
          </span>
        </div>

        {/* Nav Links */}
        <nav className="mt-5 px-3 space-y-1">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-nexu-coral text-white shadow-md shadow-nexu-coral/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      item.badgeColor || 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}

          {/* AI Copilot Highlight Tab */}
          <div className="pt-3 mt-3 border-t border-slate-800/80">
            <div className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Inteligência Artificial
            </div>
            <Link
              href="/app/ai-copilot"
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
                pathname === '/app/ai-copilot'
                  ? 'bg-nexu-indigo text-white border-indigo-400 shadow-md shadow-indigo-500/30'
                  : 'bg-gradient-to-r from-nexu-indigo/20 to-purple-500/10 text-indigo-300 hover:text-white border-indigo-500/20'
              }`}
            >
              <Bot className="w-4 h-4 text-indigo-400 animate-pulse" />
              <span>NexusLT AI Copilot</span>
              <span className="ml-auto text-[9px] bg-nexu-indigo text-white font-bold px-1.5 py-0.5 rounded">
                PRO
              </span>
            </Link>
          </div>
        </nav>
      </div>

      {/* User Card & Logout */}
      <div className="p-3 border-t border-slate-800">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 w-full py-2 mb-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar ao Site</span>
        </Link>

        <div className="flex items-center justify-between p-2 rounded-xl bg-slate-800/60">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-8 h-8 rounded-full bg-nexu-coral text-white font-bold text-xs flex items-center justify-center shrink-0">
              MS
            </div>
            <div className="text-xs overflow-hidden">
              <div className="font-bold text-white truncate">Mariana Santos</div>
              <div className="text-[11px] text-slate-400 truncate">Vortex Tech Porto (Admin)</div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            title="Terminar sessão"
            className="p-1.5 text-slate-400 hover:text-red-400 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
