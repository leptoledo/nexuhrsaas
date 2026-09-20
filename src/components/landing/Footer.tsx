import React from 'react';
import Link from 'next/link';
import { Layers, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-14 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-nexu-coral flex items-center justify-center text-white font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white">
                Nexu<span className="text-nexu-coral">HR</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              A plataforma tudo-em-um de RH inteligente que conecta pessoas, automatiza o departamento pessoal e impulsiona o crescimento de equipes modernas.
            </p>
            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:text-white hover:bg-nexu-coral transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:text-white hover:bg-nexu-coral transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:text-white hover:bg-nexu-coral transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:text-white hover:bg-nexu-coral transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Módulos */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase text-[11px] tracking-wider">Módulos</div>
            <ul className="space-y-2">
              <li>
                <Link href="#modulos" className="hover:text-white transition-colors">
                  Controle de Ponto
                </Link>
              </li>
              <li>
                <Link href="#modulos" className="hover:text-white transition-colors">
                  Férias & Ausências
                </Link>
              </li>
              <li>
                <Link href="#modulos" className="hover:text-white transition-colors">
                  Recrutamento ATS
                </Link>
              </li>
              <li>
                <Link href="#modulos" className="hover:text-white transition-colors">
                  Assinatura Digital
                </Link>
              </li>
              <li>
                <Link href="#modulos" className="hover:text-white transition-colors">
                  Nexu AI Copilot
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Empresa */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase text-[11px] tracking-wider">Empresa</div>
            <ul className="space-y-2">
              <li>
                <Link href="#beneficios" className="hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#depoimentos" className="hover:text-white transition-colors">
                  Clientes & Cases
                </Link>
              </li>
              <li>
                <Link href="#precos" className="hover:text-white transition-colors">
                  Planos & Preços
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-white transition-colors">
                  Criar Conta
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Login no Sistema
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Conformidade */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase text-[11px] tracking-wider">Conformidade</div>
            <ul className="space-y-2">
              <li>
                <span className="text-slate-400">Privacidade & LGPD</span>
              </li>
              <li>
                <span className="text-slate-400">Termos de Serviço</span>
              </li>
              <li>
                <span className="text-slate-400">Portaria 671 MTE</span>
              </li>
              <li>
                <span className="text-slate-400">Segurança de Dados</span>
              </li>
              <li>
                <span className="text-slate-400">Multi-tenant Supabase</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-slate-500 gap-4">
          <div>© {new Date().getFullYear()} NexuHR Inc. Todos os direitos reservados.</div>
          <div className="flex items-center gap-4">
            <span>Desenvolvido para escalar como SaaS corporativo moderno.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
