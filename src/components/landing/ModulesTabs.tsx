'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Clock,
  Palmtree,
  Users,
  Briefcase,
  FileCheck,
  Bot,
  Check,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

type TabType = 'ponto' | 'ferias' | 'pessoas' | 'recrutamento' | 'documentos' | 'ia';

export function ModulesTabs() {
  const [activeTab, setActiveTab] = useState<TabType>('ponto');

  return (
    <section id="modulos" className="py-20 md:py-32 bg-nexu-bgLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-nexu-coral bg-nexu-coralLight px-3 py-1 rounded-full">
            Tudo num Só Lugar
          </span>
          <h2 className="mt-4 font-heading font-extrabold text-3xl sm:text-4xl text-nexu-dark tracking-tight">
            Todos os módulos que a sua gestão LT precisa para operar com excelência
          </h2>
          <p className="mt-4 text-nexu-muted text-base sm:text-lg">
            Diga adeus a ferramentas dispersas e folhas de cálculo desatualizadas. O NexusLT integra todas as fases da gestão de pessoas em conformidade com as leis portuguesas.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            onClick={() => setActiveTab('ponto')}
            className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 border ${
              activeTab === 'ponto'
                ? 'bg-nexu-coral text-white border-nexu-coral shadow-lg shadow-nexu-coral/30'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
            }`}
          >
            <Clock className={`w-4 h-4 ${activeTab === 'ponto' ? 'text-white' : 'text-nexu-coral'}`} />
            <span>Assiduidade & Ponto</span>
          </button>

          <button
            onClick={() => setActiveTab('ferias')}
            className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 border ${
              activeTab === 'ferias'
                ? 'bg-nexu-coral text-white border-nexu-coral shadow-lg shadow-nexu-coral/30'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
            }`}
          >
            <Palmtree className={`w-4 h-4 ${activeTab === 'ferias' ? 'text-white' : 'text-amber-500'}`} />
            <span>Férias & Ausências</span>
          </button>

          <button
            onClick={() => setActiveTab('pessoas')}
            className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 border ${
              activeTab === 'pessoas'
                ? 'bg-nexu-coral text-white border-nexu-coral shadow-lg shadow-nexu-coral/30'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
            }`}
          >
            <Users className={`w-4 h-4 ${activeTab === 'pessoas' ? 'text-white' : 'text-nexu-indigo'}`} />
            <span>Diretório & Equipa</span>
          </button>

          <button
            onClick={() => setActiveTab('recrutamento')}
            className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 border ${
              activeTab === 'recrutamento'
                ? 'bg-nexu-coral text-white border-nexu-coral shadow-lg shadow-nexu-coral/30'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
            }`}
          >
            <Briefcase className={`w-4 h-4 ${activeTab === 'recrutamento' ? 'text-white' : 'text-emerald-500'}`} />
            <span>Recrutamento (ATS)</span>
          </button>

          <button
            onClick={() => setActiveTab('documentos')}
            className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 border ${
              activeTab === 'documentos'
                ? 'bg-nexu-coral text-white border-nexu-coral shadow-lg shadow-nexu-coral/30'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
            }`}
          >
            <FileCheck className={`w-4 h-4 ${activeTab === 'documentos' ? 'text-white' : 'text-purple-500'}`} />
            <span>Documentos & Vencimentos</span>
          </button>

          <button
            onClick={() => setActiveTab('ia')}
            className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 border ${
              activeTab === 'ia'
                ? 'bg-nexu-coral text-white border-nexu-coral shadow-lg shadow-nexu-coral/30'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
            }`}
          >
            <Bot className={`w-4 h-4 ${activeTab === 'ia' ? 'text-white' : 'text-rose-500'}`} />
            <span>NexusLT AI Copilot</span>
          </button>
        </div>

        {/* Tab Content Panels */}
        <div className="mt-8 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10">
          
          {/* TAB 1: PONTO */}
          {activeTab === 'ponto' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center animate-scale-up">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-nexu-coralLight text-nexu-coral flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-nexu-dark">
                  Registo de Assiduidade Digital Conforme o Código do Trabalho
                </h3>
                <p className="mt-4 text-nexu-muted leading-relaxed">
                  Permita que os colaboradores piquem o ponto via web ou telemóvel com geovalidação. O sistema calcula automaticamente horas de trabalho, horas suplementares e banco de horas segundo as exigências da ACT (Art.º 202.º).
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-nexu-emerald" />
                    <span>Conformidade estrita com as fiscalizações da ACT em Portugal</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-nexu-emerald" />
                    <span>Geovalidação de picagem para equipas híbridas e no terreno</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-nexu-emerald" />
                    <span>Exportação instantânea do extrato para processamento salarial</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    href="/app/ponto"
                    className="inline-flex items-center gap-2 text-sm font-bold text-nexu-coral hover:text-nexu-coralDark"
                  >
                    <span>Experimentar no Painel SaaS</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl text-white shadow-inner font-mono text-xs">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-slate-400">Extrato de Assiduidade - Setembro/2026 (Porto)</span>
                  <span className="text-emerald-400 font-bold">Conforme ACT</span>
                </div>
                <div className="mt-4 space-y-3 font-sans">
                  <div className="flex items-center justify-between bg-slate-800/80 p-3 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">Segunda-feira, 15 Set</div>
                      <div className="text-xs text-slate-400">Entrada: 09:00 • Almoço: 12:30-13:30 • Saída: 18:00</div>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-[11px] font-bold">
                      8h 00m
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-800/80 p-3 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">Terça-feira, 16 Set</div>
                      <div className="text-xs text-slate-400">Entrada: 08:45 • Almoço: 12:30-13:30 • Saída: 18:45</div>
                    </div>
                    <span className="bg-nexu-coral/20 text-nexu-coral px-2 py-1 rounded text-[11px] font-bold">
                      +1h Suplementar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FÉRIAS */}
          {activeTab === 'ferias' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center animate-scale-up">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6">
                  <Palmtree className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-nexu-dark">
                  Gestão de Férias e Ausências Sem Complicações
                </h3>
                <p className="mt-4 text-nexu-muted leading-relaxed">
                  O colaborador consulta o saldo em tempo real (mínimo de 22 dias úteis) e agenda as férias diretamente pelo telemóvel. O gestor aprova em 1 clique com visão integrada do mapa anual da equipa.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-nexu-emerald" />
                    <span>Elaboração automática do Mapa de Férias para cumprimento do prazo de 15 de abril</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-nexu-emerald" />
                    <span>Calendário visual com bloqueio de sobreposições em funções críticas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-nexu-emerald" />
                    <span>Registo de baixas médicas do SNS e faltas justificadas</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    href="/app/ferias"
                    className="inline-flex items-center gap-2 text-sm font-bold text-nexu-coral hover:text-nexu-coralDark"
                  >
                    <span>Testar Aprovação de Férias no App</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-bold text-slate-800 text-sm">Pedido Recente de Férias</div>
                  <span className="text-xs bg-amber-200 text-amber-900 font-bold px-2 py-0.5 rounded-full">Pendente</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">MS</div>
                    <div>
                      <div className="font-bold text-sm text-slate-800">Mariana Santos</div>
                      <div className="text-xs text-slate-500">Design Lead • Saldo disponível: 22 dias úteis</div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs bg-slate-50 p-2.5 rounded-lg text-slate-700">
                    <strong>Período:</strong> 15 a 25 de Setembro (9 dias úteis)
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Link
                      href="/app/ferias"
                      className="flex-1 text-center bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 rounded-lg transition-colors"
                    >
                      Aprovar no Painel
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PESSOAS */}
          {activeTab === 'pessoas' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center animate-scale-up">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-nexu-indigo flex items-center justify-center mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-nexu-dark">
                  Diretório Centralizado & Ficha de Colaborador Completa
                </h3>
                <p className="mt-4 text-nexu-muted leading-relaxed">
                  Reúna num perfil unificado dados contratuais, NIF, NISS, vencimentos base, subsídios de alimentação, histórico de funções e contactos de emergência.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-nexu-emerald" />
                    <span>Organograma dinâmico por departamentos e equipas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-nexu-emerald" />
                    <span>Conformidade com o RGPD e permissões rigorosas de acesso</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-nexu-emerald" />
                    <span>Portal de autoatendimento para atualização de dados pessoais</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
                <div className="text-xs font-bold text-slate-500 uppercase mb-3">Colaboradores no Porto</div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-xl border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-nexu-coral text-white text-xs font-bold flex items-center justify-center">LG</div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">Lucas Gomes</div>
                        <div className="text-[11px] text-slate-500">Engenheiro Sénior • NIF: 245678910</div>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">Ativo</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-nexu-indigo text-white text-xs font-bold flex items-center justify-center">AF</div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">Ana Ferreira</div>
                        <div className="text-[11px] text-slate-500">Product Manager • NIF: 267890123</div>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">Ativo</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: RECRUTAMENTO ATS */}
          {activeTab === 'recrutamento' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center animate-scale-up">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-nexu-dark">
                  Recrutamento Ágil & Pipeline Kanban (ATS)
                </h3>
                <p className="mt-4 text-nexu-muted leading-relaxed">
                  Publique ofertas de emprego e organize os candidatos num quadro Kanban intuitivo. Avalie perfis com triagem assistida por IA e integre novos colaboradores com 1 clique.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-nexu-emerald" />
                    <span>Índice de compatibilidade de cada candidato com a vaga</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-nexu-emerald" />
                    <span>Transição imediata de candidato aprovado para colaborador ativo</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200">
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="bg-white p-2.5 rounded-lg shadow-sm border border-slate-200">
                    <div className="font-bold text-slate-700 pb-1 border-b border-slate-100 mb-2">Triagem (2)</div>
                    <div className="bg-slate-50 p-2 rounded border border-slate-200 text-[11px]">
                      <div className="font-semibold">Diogo Ramos</div>
                      <div className="text-slate-500 text-[10px]">React / Next.js</div>
                    </div>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg shadow-sm border border-slate-200">
                    <div className="font-bold text-slate-700 pb-1 border-b border-slate-100 mb-2">Entrevista (1)</div>
                    <div className="bg-indigo-50 p-2 rounded border border-indigo-200 text-[11px]">
                      <div className="font-semibold text-nexu-indigo">Gabriel Torres</div>
                      <div className="text-slate-500 text-[10px]">95% Compatibilidade</div>
                    </div>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg shadow-sm border border-slate-200">
                    <div className="font-bold text-slate-700 pb-1 border-b border-slate-100 mb-2">Contratado (1)</div>
                    <div className="bg-emerald-50 p-2 rounded border border-emerald-200 text-[11px]">
                      <div className="font-semibold text-emerald-800">Vasco Meireles</div>
                      <div className="text-slate-500 text-[10px]">Admitido</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: DOCUMENTOS */}
          {activeTab === 'documentos' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center animate-scale-up">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-nexu-dark">
                  Recibos de Vencimento & Assinatura Digital Certificada
                </h3>
                <p className="mt-4 text-nexu-muted leading-relaxed">
                  Elimine o papel e as impressões. Distribua recibos de vencimento em lote com notificação confidencial e recolha assinaturas de contratos de trabalho em conformidade com o regulamento europeu eIDAS.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-nexu-emerald" />
                    <span>Envio seguro de recibos de vencimento para toda a empresa num clique</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-nexu-emerald" />
                    <span>Pista de auditoria completa com carimbo temporal e endereço IP</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-xs">
                <div className="font-bold text-slate-800 mb-3">Documentos Recentes</div>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                    <span className="font-medium text-slate-700">Contrato_Trabalho_SemTermo_Lucas.pdf</span>
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold text-[10px]">Assinado</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                    <span className="font-medium text-slate-700">Acordo_Confidencialidade_Ana.pdf</span>
                    <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold text-[10px]">Pendente</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: IA */}
          {activeTab === 'ia' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center animate-scale-up">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-nexu-coral flex items-center justify-center mb-6">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-nexu-dark">
                  NexusLT AI Copilot: IA Dedicada à Gestão LT em Portugal
                </h3>
                <p className="mt-4 text-nexu-muted leading-relaxed">
                  O primeiro assistente de inteligência artificial treinado no Código do Trabalho português, boas práticas de retenção de talento e rotinas de gestão salarial.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-nexu-emerald" />
                    <span>Criação imediata de perfis de função e guiões de entrevista estruturada</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-nexu-emerald" />
                    <span>Respostas rápidas a dúvidas sobre banco de horas, faltas e ACT</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-indigo-950 p-6 rounded-2xl text-white shadow-xl">
                <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-nexu-coral">
                  <Sparkles className="w-4 h-4" />
                  <span>Demonstração em Tempo Real</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="bg-slate-800/90 p-3 rounded-xl text-slate-200 border border-slate-700">
                    <strong>Utilizador:</strong> &ldquo;Quais colaboradores têm dias de férias por gozar antes do final do ano civil?&rdquo;
                  </div>
                  <div className="bg-nexu-indigo/30 p-3 rounded-xl text-indigo-100 border border-indigo-500/30">
                    <strong>NexusLT AI:</strong> &ldquo;Localizei 2 colaboradores: Mariana Santos (22 dias úteis) e Lucas Gomes (18 dias úteis). Deseja gerar o mapa de agendamento automático?&rdquo;
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
