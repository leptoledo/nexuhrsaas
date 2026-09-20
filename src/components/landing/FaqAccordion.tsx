'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: 'Como funciona o período de teste gratuito de 14 dias?',
    answer:
      'Você tem acesso imediato e irrestrito a todos os módulos da plataforma durante 14 dias. Não solicitamos cartão de crédito no cadastro. Após o período, você pode escolher o plano ideal para continuar.',
  },
  {
    question: 'O ponto eletrônico está de acordo com as leis do trabalho e Portaria 671 MTE?',
    answer:
      'Sim! O NexuHR cumpre rigorosamente as exigências da Portaria 671 do Ministério do Trabalho e Emprego (REP-P e REP-A), emitindo comprovantes assinados digitalmente com validade jurídica comprovada.',
  },
  {
    question: 'Como é feita a migração dos dados das nossas planilhas antigas?',
    answer:
      'Oferecemos um importador automático via planilha Excel / CSV. Em menos de 10 minutos, toda a base de colaboradores, cargos e departamentos é importada para o banco de dados sem perda de histórico.',
  },
  {
    question: 'Como a IA (Nexu AI Copilot) protege os dados confidenciais dos funcionários?',
    answer:
      'Nossos modelos de IA são isolados e não utilizam os dados privados da sua organização para treinamento de terceiros. Operamos com criptografia de ponta a ponta e isolamento estrito via RLS (Row Level Security) no Supabase.',
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-nexu-bgLight">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-nexu-coral bg-nexu-coralLight px-3 py-1 rounded-full">
            Dúvidas Comuns
          </span>
          <h2 className="mt-4 font-heading font-extrabold text-3xl sm:text-4xl text-nexu-dark tracking-tight">
            Perguntas Frequentes sobre o NexuHR
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between font-semibold text-sm sm:text-base text-nexu-dark hover:text-nexu-coral transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-nexu-coral' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-xs sm:text-sm text-nexu-muted leading-relaxed animate-scale-up">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
