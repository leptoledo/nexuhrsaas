import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export function CtaBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-nexu-dark via-slate-900 to-nexu-dark text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
          Pronto para transformar o RH da sua empresa hoje mesmo?
        </h2>
        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
          Junte-se a centenas de empresas que economizam tempo, reduzem custos e encantam seus colaboradores com o NexuHR.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/register"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-nexu-coral hover:bg-nexu-coralDark text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-nexu-coral/40 transition-all flex items-center justify-center gap-2"
          >
            <span>Criar Conta de Teste Grátis</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/app"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm sm:text-base border border-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5 text-nexu-indigo fill-nexu-indigo" />
            <span>Explorar Aplicação Demo</span>
          </Link>
        </div>
        <p className="mt-4 text-xs text-slate-400">
          Sem cartão de crédito • 14 dias de teste • Setup em minutos
        </p>
      </div>
    </section>
  );
}
