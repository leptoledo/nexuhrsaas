'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send } from 'lucide-react';

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
      text: 'Olá, Mariana! Sou o **NexusLT AI Copilot**, o seu assistente de Inteligência Artificial para Gestão LT e Colaboradores em Portugal. Como posso apoiar a sua equipa hoje?',
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

      if (lower.includes('férias') || lower.includes('ausência') || lower.includes('mapa')) {
        aiReply = `📊 **Análise de Férias & Ausências (Código do Trabalho):**
• Identifiquei **2 pedidos pendentes** de aprovação (Mariana Santos e Lucas Gomes).
• Mariana Santos possui **22 dias úteis de saldo** no mapa anual.
• Recomendo aprovar o pedido de 9 dias úteis para Setembro, assegurando a afixação obrigatória prevista no Art.º 241.º da Lei n.º 7/2009.`;
      } else if (lower.includes('vaga') || lower.includes('engenheiro') || lower.includes('descrição') || lower.includes('função')) {
        aiReply = `📝 **Perfil de Função Gerado:**
**Função:** Engenheiro de Software React / Next.js Sénior
**Regime:** Híbrido (Porto, Portugal) • Contrato Sem Termo
**Competências Requeridas:**
- Domínio de React, Next.js (App Router) e TypeScript.
- Experiência em bases de dados relacionais (PostgreSQL/Supabase) e deploy em cloud.
- Sensibilidade para segurança de dados (RGPD) e arquitetura de software escalável.`;
      } else if (lower.includes('código do trabalho') || lower.includes('act') || lower.includes('banco de horas') || lower.includes('horas')) {
        aiReply = `⚖️ **Enquadramento Laboral (Código do Trabalho & ACT):**
• **Registo de Assiduidade:** Obrigatório por lei para todos os trabalhadores (Art.º 202.º), devendo estar acessível para fiscalização da ACT.
• **Banco de Horas Individual:** Pode ser acordado por escrito, com acréscimo até **2 horas diárias** e um limite máximo de **150 horas anuais** (Art.º 208.º-B).
• O NexusLT mantém todos os registos de picagem geovalidados com carimbo de tempo inviolável.`;
      } else {
        aiReply = `Compreendido! A sua organização **Vortex Tech Lda. (Porto)** conta atualmente com **8 colaboradores ativos**, assiduidade semanal média de **94.2%** e **3 ofertas de trabalho no pipeline**. Se necessitar de minutas contratuais ou mapas de férias, estou à disposição!`;
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
    '🌴 Resumo do mapa de férias da equipa',
    '📝 Gerar perfil de função para Engenheiro Sénior no Porto',
    '⚖️ Regras do Código do Trabalho sobre banco de horas e ACT',
    '💡 Sugestões para retenção de talento e satisfação da equipa',
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
              <span>NexusLT AI Copilot</span>
              <span className="bg-nexu-indigo text-[9px] font-extrabold px-1.5 py-0.5 rounded">
                PRO ACTIVE
              </span>
            </div>
            <div className="text-[11px] text-slate-400">
              Treinado no Código do Trabalho Português, Normas da ACT e Métricas de Gestão LT
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
              O NexusLT AI está a consultar a base de dados da organização...
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
          placeholder="Pergunte qualquer questão sobre o Código do Trabalho, ACT ou métricas da equipa..."
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
