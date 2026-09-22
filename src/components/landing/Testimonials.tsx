import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-nexu-bgLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-nexu-coral bg-nexu-coralLight px-3 py-1 rounded-full">
            Testemunhos de Clientes
          </span>
          <h2 className="mt-4 font-heading font-extrabold text-3xl sm:text-4xl text-nexu-dark tracking-tight">
            O que dizem os líderes que transformaram a gestão LT das suas empresas
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
                &ldquo;Antes do NexusLT, eu passava 4 dias inteiros no final de cada mês a validar registos de assiduidade e a responder a pedidos de férias. Hoje faço tudo em 40 minutos com relatórios prontos para a ACT. Foi a melhor decisão para a nossa gestão LT.&rdquo;
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                RC
              </div>
              <div>
                <div className="font-bold text-sm text-nexu-dark">Rita Carvalho</div>
                <div className="text-xs text-nexu-muted">Diretora de Gestão LT na Douro Tech (Porto • 85 colaboradores)</div>
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
                &ldquo;A adesão da equipa foi de 100% no primeiro dia. Os colaboradores adoram a facilidade para picar o ponto no telemóvel e pedir férias. E a distribuição digital dos recibos de vencimento poupou-nos imenso tempo.&rdquo;
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-nexu-coral text-white flex items-center justify-center font-bold text-xs">
                GF
              </div>
              <div>
                <div className="font-bold text-sm text-nexu-dark">Gonçalo Figueiredo</div>
                <div className="text-xs text-nexu-muted">CEO na Porto Health (140 colaboradores)</div>
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
                &ldquo;O NexusLT AI Copilot é impressionante. Alerta proativamente sobre férias acumuladas e assegura o cumprimento do Código do Trabalho sem qualquer fricção.&rdquo;
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-nexu-indigo text-white flex items-center justify-center font-bold text-xs">
                ML
              </div>
              <div>
                <div className="font-bold text-sm text-nexu-dark">Mafalda Lourenço</div>
                <div className="text-xs text-nexu-muted">Diretora de Operações na Lusitânia Logistics (Matosinhos)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
