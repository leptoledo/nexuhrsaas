import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-nexu-bgLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-nexu-coral bg-nexu-coralLight px-3 py-1 rounded-full">
            Histórias de Sucesso
          </span>
          <h2 className="mt-4 font-heading font-extrabold text-3xl sm:text-4xl text-nexu-dark tracking-tight">
            O que dizem os líderes que transformaram seus times
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex text-amber-400 gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed italic">
                &ldquo;Antes do NexuHR, eu passava 4 dias inteiros no final de cada mês fechando cartões de ponto e respondendo dúvidas de férias. Hoje eu faço tudo em 40 minutos. Foi a melhor decisão para o nosso RH.&rdquo;
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                RC
              </div>
              <div>
                <div className="font-bold text-sm text-nexu-dark">Roberta Cavalcanti</div>
                <div className="text-xs text-nexu-muted">Head de Pessoas na Vortex Tech (85 colaboradores)</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex text-amber-400 gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed italic">
                &ldquo;A adesão do time foi de 100% no primeiro dia. Os colaboradores adoram a praticidade para bater ponto e pedir folgas. E a assinatura digital de contratos nos poupou milhares de impressões.&rdquo;
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-nexu-coral text-white flex items-center justify-center font-bold text-xs">
                GF
              </div>
              <div>
                <div className="font-bold text-sm text-nexu-dark">Gustavo Freitas</div>
                <div className="text-xs text-nexu-muted">CEO na Nova Health (140 colaboradores)</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex text-amber-400 gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed italic">
                &ldquo;O Nexu AI Copilot é impressionante. Ele me avisa proativamente sobre férias acumuladas e prepara resumos gerenciais perfeitos para as reuniões de diretoria.&rdquo;
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-nexu-indigo text-white flex items-center justify-center font-bold text-xs">
                ML
              </div>
              <div>
                <div className="font-bold text-sm text-nexu-dark">Mariana Lacerda</div>
                <div className="text-xs text-nexu-muted">Diretora de Operações na Lunar Logistics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
