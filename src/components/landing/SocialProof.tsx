import React from 'react';
import { Triangle, Hexagon, Circle, Box, Cpu, Globe } from 'lucide-react';

export function SocialProof() {
  return (
    <section className="py-10 border-y border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Empresas em Portugal que confiam na tecnologia NexusLT para gerir as suas equipas
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center opacity-70 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center justify-center gap-1.5 font-heading font-bold text-slate-800 text-lg">
            <Triangle className="w-5 h-5 text-nexu-coral" /> DOURO Tech
          </div>
          <div className="flex items-center justify-center gap-1.5 font-heading font-bold text-slate-800 text-lg">
            <Hexagon className="w-5 h-5 text-nexu-indigo" /> PORTO Health
          </div>
          <div className="flex items-center justify-center gap-1.5 font-heading font-bold text-slate-800 text-lg">
            <Circle className="w-5 h-5 text-emerald-500" /> LUSITÂNIA Log
          </div>
          <div className="flex items-center justify-center gap-1.5 font-heading font-bold text-slate-800 text-lg">
            <Box className="w-5 h-5 text-amber-500" /> MINHO Retail
          </div>
          <div className="flex items-center justify-center gap-1.5 font-heading font-bold text-slate-800 text-lg">
            <Cpu className="w-5 h-5 text-purple-600" /> ATLÂNTICO SaaS
          </div>
          <div className="flex items-center justify-center gap-1.5 font-heading font-bold text-slate-800 text-lg">
            <Globe className="w-5 h-5 text-blue-500" /> IBERIA Global
          </div>
        </div>
      </div>
    </section>
  );
}
