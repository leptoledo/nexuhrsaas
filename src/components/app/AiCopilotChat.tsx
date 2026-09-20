'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
}

export function AiCopilotChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      text: 'Olá, Mariana! Sou o **Nexu AI Copilot**, seu assistente de Inteligência Artificial para Departamento Pessoal e Gestão de Pessoas. Como posso ajudar sua equipe hoje?',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    setTimeout(() => {
      let aiReply = '';
      const lower = text.toLowerCase();

      if (lower.includes('férias') || lower.includes('ausência') || lower.includes('vencer')) {
        aiReply = `📊 **Análise de Férias & Ausências:**
• Identifiquei **2 solicitações pendentes** no painel de aprovação (Mariana Santos e Lucas Gomes).
• Mariana Santos possui **22 dias acumulados** com período concessivo próximo ao prazo legal em Novembro.
• Recomendo priorizar a aprovação das férias regulares de 10 dias em Setembro.`;
      } else if (lower.includes('vaga') || lower.includes('desenvolvedor') || lower.includes('descrição')) {
        aiReply = `📝 **Descrição de Vaga Gerada:**
**Cargo:** Desenvolvedor React / Next.js Senior
**Modalidade:** Híbrido / Remoto • CLT
**Requisitos:**
- Domínio de React 18/19, Next.js (App Router) e TypeScript.
- Experiência com Tailwind CSS, Supabase / PostgreSQL e deploy na Vercel.
- Foco em acessibilidade e arquitetura multi-tenant escalável.`;
      } else if (lower.includes('clt') || lower.includes('banco de horas') || lower.includes('horas extras')) {
        aiReply = `⚖️ **Diretriz Trabalhista (CLT & Portaria 671 MTE):**
• **Banco de Horas Individual:** Válido por acordo individual escrito com compensação em até **6 meses** (Art. 59, § 5º da CLT).
• **Limite Legal:** Máximo de 2 horas suplementares por jornada diária.
• Os registros eletrônicos no NexuHR utilizam assinatura digital e carimbo de tempo inviolável em total conformidade com a legislação.`;
      } else {
        aiReply = `Entendido! Sua organização **Vortex Tech** conta atualmente com **8 colaboradores ativos**, assiduidade média de **94.2%** e **3 vagas no funil de recrutamento**. Se precisar de relatórios de turnover, cartas de admissão ou minutas contratuais, é só solicitar!`;
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiReply,
      };

      setMessages((prev) => [...prev, aiMsg]);
      setLoading(false);
    }, 600);
  };

  const quickPrompts = [
    '🌴 Resumo de férias dos colaboradores',
    '📝 Gerar descrição de vaga para Desenvolvedor Senior',
    '⚖️ Regras da CLT sobre banco de horas',
    '💡 Dicas para engajamento e redução de turnover',
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl flex flex-col h-[580px] overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-nexu-indigo to-purple-600 text-white flex items-center justify-center shadow">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="font-heading font-bold text-sm text-white flex items-center gap-2">
              <span>Nexu AI Copilot</span>
              <span className="bg-nexu-indigo text-[9px] font-extrabold px-1.5 py-0.5 rounded">
                PRO ACTIVE
              </span>
            </div>
            <div className="text-[11px] text-slate-400">
              Treinado em DP, Legislação Trabalhista Brasileira e Métricas de RH
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 text-xs">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-start gap-3 ${
              m.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {m.sender === 'ai' && (
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-nexu-indigo to-purple-600 text-white flex items-center justify-center shrink-0 shadow">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`p-4 rounded-2xl max-w-xl leading-relaxed whitespace-pre-line ${
                m.sender === 'user'
                  ? 'bg-nexu-coral text-white rounded-tr-none shadow-sm'
                  : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200'
              }`}
            >
              {m.text}
            </div>

            {m.sender === 'user' && (
              <div className="w-8 h-8 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                MS
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-nexu-indigo text-white flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 animate-pulse" />
            </div>
            <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-slate-500 italic text-xs">
              Nexu AI está consultando a base de dados da empresa...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts */}
      <div className="p-3 bg-slate-50 border-t border-slate-200 flex flex-wrap gap-2 text-[11px]">
        {quickPrompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(p)}
            className="bg-white hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg text-slate-700 font-medium transition-colors"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-4 bg-white border-t border-slate-200 flex items-center gap-3"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Pergunte qualquer coisa sobre DP, métricas ou legislação..."
          className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nexu-indigo text-xs"
        />
        <button
          type="submit"
          className="px-5 py-3 rounded-xl bg-nexu-indigo hover:bg-indigo-700 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-md"
        >
          <span>Enviar</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
