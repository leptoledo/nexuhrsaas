'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layers, ArrowRight, LayoutDashboard, Menu, X, Sparkles } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-slate-950 text-slate-200 py-2 px-4 text-xs font-medium text-center flex items-center justify-center gap-2 border-b border-slate-800 relative z-50">
        <span className="bg-nexu-coral text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
          Porto 🇵🇹
        </span>
        <span className="truncate">
          <strong>NexusLT AI Copilot</strong>: Simplifique a gestão LT e cumpra a legislação da ACT sem esforço.
        </span>
        <a
          href="#modulos"
          className="text-nexu-coralLight hover:text-white underline font-semibold hidden md:inline shrink-0 ml-1 transition-colors"
        >
          Saber mais &rarr;
        </a>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo (Never Shrinks) */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group py-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-nexu-coral to-rose-400 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-heading font-extrabold text-2xl tracking-tight text-nexu-dark">
                  Nexus<span className="text-nexu-coral">LT</span>
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                  PT
                </span>
              </div>
              <span className="text-[10px] font-semibold text-slate-400 tracking-wide mt-1">
                Porto • Portugal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Visible on Large Screens 1024px+) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-600 whitespace-nowrap">
            <a href="#modulos" className="hover:text-nexu-coral transition-colors py-1">
              Módulos
            </a>
            <a href="#beneficios" className="hover:text-nexu-coral transition-colors py-1">
              Benefícios
            </a>
            <a href="#calculadora" className="hover:text-nexu-coral transition-colors py-1">
              Calculadora ROI
            </a>
            <a href="#depoimentos" className="hover:text-nexu-coral transition-colors py-1">
              Clientes
            </a>
            <a href="#precos" className="hover:text-nexu-coral transition-colors py-1">
              Preços
            </a>
            <a href="#faq" className="hover:text-nexu-coral transition-colors py-1">
              FAQ
            </a>
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 xl:gap-3 shrink-0 whitespace-nowrap">
            <Link
              href="/app"
              className="inline-flex items-center gap-2 px-3.5 xl:px-4 py-2.5 rounded-xl text-xs xl:text-sm font-semibold text-slate-700 hover:text-nexu-coral hover:bg-slate-50 transition-colors border border-slate-200 shadow-xs"
            >
              <LayoutDashboard className="w-4 h-4 text-nexu-indigo shrink-0" />
              <span>Painel SaaS</span>
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-xl text-xs xl:text-sm font-bold text-white bg-nexu-coral hover:bg-nexu-coralDark transition-all shadow-md hover:shadow-lg hover:shadow-nexu-coral/30"
            >
              <span>Testar 14 Dias Grátis</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>

          {/* Mobile / Tablet Menu Button (Visible below 1024px) */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/app"
              className="sm:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg text-xs font-semibold flex items-center gap-1 border border-slate-200"
              title="Aceder ao Painel"
            >
              <LayoutDashboard className="w-4 h-4 text-nexu-indigo" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-nexu-dark hover:bg-slate-100 rounded-xl transition-colors border border-slate-200"
              aria-label="Menu principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Smooth Layout */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 animate-scale-up shadow-xl">
            <div className="flex flex-col space-y-1 font-semibold text-sm text-slate-700">
              <a
                href="#modulos"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl hover:bg-slate-50 hover:text-nexu-coral transition-colors"
              >
                Módulos LT
              </a>
              <a
                href="#beneficios"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl hover:bg-slate-50 hover:text-nexu-coral transition-colors"
              >
                Benefícios & Vantagens
              </a>
              <a
                href="#calculadora"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl hover:bg-slate-50 hover:text-nexu-coral transition-colors"
              >
                Calculadora de Poupança ROI (€)
              </a>
              <a
                href="#depoimentos"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl hover:bg-slate-50 hover:text-nexu-coral transition-colors"
              >
                Testemunhos de Clientes
              </a>
              <a
                href="#precos"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl hover:bg-slate-50 hover:text-nexu-coral transition-colors"
              >
                Tabela de Preços (€)
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl hover:bg-slate-50 hover:text-nexu-coral transition-colors"
              >
                Perguntas Frequentes (FAQ)
              </a>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <Link
                href="/app"
                className="w-full text-center py-2.5 rounded-xl text-sm font-semibold border border-slate-200 text-slate-800 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
              >
                <LayoutDashboard className="w-4 h-4 text-nexu-indigo" />
                <span>Aceder ao Painel SaaS</span>
              </Link>
              <Link
                href="/register"
                className="w-full text-center py-3 rounded-xl text-sm font-bold bg-nexu-coral hover:bg-nexu-coralDark text-white shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Criar Conta de Teste Gratuita</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
