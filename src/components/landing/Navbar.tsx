'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layers, ArrowRight, LayoutDashboard, Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-nexu-dark via-slate-800 to-nexu-dark text-white py-2 px-4 text-xs md:text-sm font-medium text-center flex items-center justify-center gap-2 border-b border-slate-700">
        <span className="bg-nexu-coral text-white text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Porto 🇵🇹</span>
        <span>Conheça o <strong>NexusLT AI Copilot</strong>: poupe até 70% do tempo nas rotinas de Gestão LT e ACT.</span>
        <a href="#modulos" className="underline hover:text-nexu-coralLight transition-colors font-semibold hidden sm:inline">
          Ver como funciona &rarr;
        </a>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-nexu-border transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-nexu-coral to-rose-400 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-2xl tracking-tight text-nexu-dark">
                Nexus<span className="text-nexu-coral">LT</span>
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 -mt-1">
                Porto • Portugal
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-nexu-muted">
            <a href="#modulos" className="hover:text-nexu-coral transition-colors">Módulos LT</a>
            <a href="#beneficios" className="hover:text-nexu-coral transition-colors">Benefícios</a>
            <a href="#calculadora" className="hover:text-nexu-coral transition-colors">Calculadora ROI (€)</a>
            <a href="#depoimentos" className="hover:text-nexu-coral transition-colors">Clientes</a>
            <a href="#precos" className="hover:text-nexu-coral transition-colors">Preços</a>
            <a href="#faq" className="hover:text-nexu-coral transition-colors">Perguntas Frequentes</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/app"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-nexu-dark hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <LayoutDashboard className="w-4 h-4 text-nexu-indigo" />
              <span>Aceder ao Painel SaaS</span>
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-nexu-coral hover:bg-nexu-coralDark transition-all shadow-md hover:shadow-lg hover:shadow-nexu-coral/30"
            >
              <span>Experimentar 14 Dias Grátis</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/app"
              className="p-2 text-nexu-dark hover:bg-slate-100 rounded-lg text-xs font-semibold flex items-center gap-1"
            >
              <LayoutDashboard className="w-4 h-4 text-nexu-indigo" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-nexu-dark rounded-lg"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
            <a
              href="#modulos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-700 hover:text-nexu-coral"
            >
              Módulos LT
            </a>
            <a
              href="#beneficios"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-700 hover:text-nexu-coral"
            >
              Benefícios
            </a>
            <a
              href="#calculadora"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-700 hover:text-nexu-coral"
            >
              Calculadora ROI (€)
            </a>
            <a
              href="#precos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-700 hover:text-nexu-coral"
            >
              Preços
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-700 hover:text-nexu-coral"
            >
              Perguntas Frequentes
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/app"
                className="w-full text-center py-2.5 rounded-xl text-sm font-semibold border border-slate-200 text-slate-800"
              >
                Aceder ao Painel SaaS
              </Link>
              <Link
                href="/register"
                className="w-full text-center py-2.5 rounded-xl text-sm font-semibold bg-nexu-coral text-white"
              >
                Criar Conta Gratuita
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
