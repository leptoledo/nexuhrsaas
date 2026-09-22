'use client';

import React from 'react';
import { AiCopilotChat } from '@/components/app/AiCopilotChat';

export default function AiCopilotPage() {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="font-heading font-extrabold text-2xl text-slate-900">
            NexusLT AI Copilot
          </h2>
          <span className="text-[10px] bg-nexu-indigo text-white font-bold px-2 py-0.5 rounded-full">
            Inteligência Artificial Nativa
          </span>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Assistente inteligente treinado para analisar dados da organização, esclarecer dúvidas sobre o Código do Trabalho / ACT e redigir perfis de função.
        </p>
      </div>

      <AiCopilotChat />
    </div>
  );
}
