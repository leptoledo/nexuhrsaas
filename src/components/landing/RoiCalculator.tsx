'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function RoiCalculator() {
  const [employeeCount, setEmployeeCount] = useState<number>(50);

  // Média: 0.9 horas poupadas por colaborador/mês em tarefas burocráticas, custo médio de 16 €/hora em Portugal
  const hoursSaved = Math.round(employeeCount * 0.9);
  const moneySaved = Math.round(hoursSaved * 16 * 12);

  return (
    <section id="calculadora" className="py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-nexu-coral bg-nexu-coral/20 px-3 py-1 rounded-full">
            Calculadora de Impacto
          </span>
          <h2 className="mt-4 font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Calcule quanto tempo e dinheiro a sua empresa irá poupar
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Ajuste a barra abaixo com o número de colaboradores para calcular o retorno sobre o investimento imediato.
          </p>
        </div>

        <div className="mt-12 bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Slider */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="empSlider" className="text-sm sm:text-base font-semibold text-slate-200">
                Número de Colaboradores:
              </label>
              <span className="text-2xl font-bold font-heading text-nexu-coral">
                {employeeCount}
              </span>
            </div>
            <input
              id="empSlider"
              type="range"
              min={5}
              max={300}
              step={5}
              value={employeeCount}
              onChange={(e) => setEmployeeCount(Number(e.target.value))}
              className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-nexu-coral"
            />
            <div className="flex justify-between text-xs text-slate-400">
              <span>5 colaboradores</span>
              <span>150</span>
              <span>300+ colaboradores</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700">
              <div className="text-xs text-slate-400 font-medium">Horas Poupadas / Mês</div>
              <div className="mt-2 text-3xl font-extrabold font-heading text-white">{hoursSaved}h</div>
              <div className="mt-1 text-xs text-emerald-400">Tempo libertado para Gestão LT estratégica</div>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700">
              <div className="text-xs text-slate-400 font-medium">Poupança Estimada / Ano</div>
              <div className="mt-2 text-3xl font-extrabold font-heading text-emerald-400">
                {moneySaved.toLocaleString('pt-PT')} €
              </div>
              <div className="mt-1 text-xs text-slate-400">Redução de custos operacionais diretos</div>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700">
              <div className="text-xs text-slate-400 font-medium">Velocidade de Processos</div>
              <div className="mt-2 text-3xl font-extrabold font-heading text-nexu-coral">5x</div>
              <div className="mt-1 text-xs text-slate-400">Mais rápido do que folhas de cálculo</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/register"
              className="inline-block px-8 py-3.5 rounded-xl bg-nexu-coral hover:bg-nexu-coralDark text-white font-semibold text-sm transition-all shadow-lg hover:shadow-nexu-coral/30"
            >
              Quero Poupar Agora na Minha Empresa &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
