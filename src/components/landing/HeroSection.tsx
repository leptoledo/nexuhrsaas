'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Lock,
  ExternalLink,
  TrendingUp,
  Calendar,
  Bot,
  Clock,
  FileSignature,
} from 'lucide-react';

export function HeroSection() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleStartTrial = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      router.push(`/register?email=${encodeURIComponent(email)}`);
    } else {
      router.push('/register');
    }
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-nexu-coral/15 to-nexu-indigo/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nexu-coralLight border border-nexu-coral/20 text-nexu-coral text-xs md:text-sm font-semibold mb-6 animate-pulse-subtle">
          <Sparkles className="w-4 h-4" />
          <span>A Plataforma de RH All-in-One nº 1 para Empresas em Crescimento</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-nexu-dark tracking-tight max-w-4xl mx-auto leading-[1.15]">
          RH sem atritos, <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-nexu-coral via-rose-500 to-nexu-indigo bg-clip-text text-transparent">
            pessoas em primeiro lugar.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-nexu-muted max-w-2xl mx-auto leading-relaxed">
          Centralize ponto digital com GPS, férias, admissões, documentos e recrutamento em uma única plataforma intuitiva com IA que economiza até <strong>70% das tarefas manuais de DP</strong>.
        </p>

        {/* CTA Box */}
        <form onSubmit={handleStartTrial} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <div className="w-full relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu e-mail corporativo..."
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-nexu-coral text-sm shadow-sm bg-white"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto shrink-0 px-6 py-3.5 rounded-xl bg-nexu-coral hover:bg-nexu-coralDark text-white font-semibold text-sm shadow-lg hover:shadow-nexu-coral/30 transition-all flex items-center justify-center gap-2"
          >
            <span>Começar Agora</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Trust Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-nexu-muted font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-nexu-emerald" />
            <span>14 dias grátis sem cartão</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-nexu-indigo" />
            <span>100% Conforme Portaria 671 MTE & LGPD</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-nexu-amber" />
            <span>Setup em 15 minutos</span>
          </div>
        </div>

        {/* Interactive App Hero Preview Mockup */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          <div className="rounded-2xl border border-slate-200/80 bg-white shadow-2xl p-2 sm:p-4 transition-transform duration-500 hover:scale-[1.01]">
            {/* Window Header Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 mb-3 bg-slate-50 rounded-xl">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="text-xs text-slate-400 font-mono bg-white px-3 py-0.5 rounded-md border border-slate-200 flex items-center gap-1">
                <Lock className="w-3 h-3 text-slate-400" />
                app.nexuhr.com/dashboard
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/app"
                  className="text-xs bg-nexu-coral text-white font-semibold px-2.5 py-1 rounded-lg hover:bg-nexu-coralDark transition-colors flex items-center gap-1 shadow-sm"
                >
                  <span>Abrir App Completo</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Mockup Grid Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-left p-2">
              {/* Stat Card 1 */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Presença em Tempo Real</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <div className="mt-2 text-2xl font-bold font-heading">48 / 52</div>
                <div className="mt-1 text-xs text-emerald-400 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>92.3% de assiduidade hoje</span>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-700 flex items-center justify-between text-xs">
                  <span className="text-slate-400">4 em Férias/Folga</span>
                  <Link href="/app/ponto" className="text-nexu-coral font-medium hover:underline">
                    Ver detalhes &rarr;
                  </Link>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                <div className="flex items-center justify-between text-xs text-nexu-muted">
                  <span>Férias & Ausências Pendentes</span>
                  <Calendar className="w-4 h-4 text-nexu-coral" />
                </div>
                <div className="mt-2 text-2xl font-bold font-heading text-nexu-dark">2 Solicitações</div>
                <div className="mt-1 text-xs text-nexu-muted">Mariana Santos e Lucas Gomes</div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded-full">
                    Aguardando RH
                  </span>
                  <span className="text-xs text-nexu-muted">Aprovação em 1 clique</span>
                </div>
              </div>

              {/* Stat Card 3 (AI Assistant) */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 p-4 rounded-xl">
                <div className="flex items-center justify-between text-xs text-nexu-indigo font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Bot className="w-4 h-4 text-nexu-indigo" />
                    Nexu AI Copilot
                  </span>
                  <span className="text-[10px] bg-nexu-indigo text-white px-1.5 py-0.5 rounded font-bold">
                    ONLINE
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-700 leading-relaxed italic">
                  &ldquo;Identifiquei que 3 colaboradores possuem banco de horas positivo para compensar este mês.&rdquo;
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <Link
                    href="/app/ai-copilot"
                    className="text-xs bg-nexu-indigo text-white px-2.5 py-1 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Conversar com IA
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Feature Badges */}
          <div className="absolute -bottom-6 -left-4 hidden md:flex items-center gap-3 bg-white p-3 rounded-2xl shadow-xl border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-left text-xs">
              <div className="font-bold text-nexu-dark">Ponto Registrado via GPS</div>
              <div className="text-nexu-muted">08:58 - Lucas Gomes (Presencial)</div>
            </div>
          </div>

          <div className="absolute -top-6 -right-4 hidden md:flex items-center gap-3 bg-white p-3 rounded-2xl shadow-xl border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-nexu-coral flex items-center justify-center">
              <FileSignature className="w-5 h-5" />
            </div>
            <div className="text-left text-xs">
              <div className="font-bold text-nexu-dark">Contrato Assinado Digitalmente</div>
              <div className="text-nexu-muted">Validade jurídica com 1 clique</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
