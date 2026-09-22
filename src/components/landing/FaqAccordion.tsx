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
      'Terá acesso imediato e irrestrito a todos os módulos da plataforma durante 14 dias. Não solicitamos cartão de crédito no registo. Findo o período, poderá escolher o plano ideal para continuar.',
  },
  {
    question: 'O registo de assiduidade cumpre as exigências da ACT e do Código do Trabalho?',
    answer:
      'Sim, sem exceções! O NexusLT cumpre rigorosamente as exigências do Artigo 202.º do Código do Trabalho (Lei n.º 7/2009), permitindo o registo diário de entradas, intervalos e saídas, com relatórios fiscais prontos para qualquer inspeção da ACT.',
  },
  {
    question: 'Como funciona a gestão do Mapa Anual de Férias?',
    answer:
      'O sistema controla automaticamente o saldo legal mínimo de 22 dias úteis de férias por colaborador e compila o Mapa de Férias da organização em formato homologado, facilitando o cumprimento da afixação obrigatória até 15 de abril.',
  },
  {
    question: 'Onde está sediada a NexusLT e como é feito o suporte?',
    answer:
      'A NexusLT está sediada na cidade do Porto, Portugal. A nossa equipa de apoio ao cliente e consultoria LT opera a partir de Portugal, garantindo suporte ágil, no mesmo fuso horário e com profundo conhecimento da legislação laboral nacional.',
  },
  {
    question: 'Como a IA (NexusLT AI Copilot) protege os dados dos colaboradores?',
    answer:
      'A segurança e a privacidade estão no centro da nossa arquitetura. Operamos em estrita conformidade com o RGPD (Regulamento Geral sobre a Proteção de Dados), com servidores europeus, encriptação de ponta a ponta e sem partilha de dados confidenciais com terceiros.',
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
            Dúvidas Frequentes
          </span>
          <h2 className="mt-4 font-heading font-extrabold text-3xl sm:text-4xl text-nexu-dark tracking-tight">
            Perguntas Frequentes sobre o NexusLT
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
