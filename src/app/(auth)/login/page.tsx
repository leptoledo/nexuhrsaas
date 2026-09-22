'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Layers, Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

export const dynamic = 'force-dynamic';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const supabase = createClient();
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        // Se as chaves do Supabase forem placeholder, permitir navegação para demonstração
        if (authError.message.includes('placeholder') || authError.message.includes('fetch failed')) {
          router.push('/app');
          return;
        }
        setError(authError.message || 'Erro ao efetuar login. Verifique suas credenciais.');
      } else {
        router.push('/app');
      }
    } catch {
      // Fallback para ambiente de demonstração
      router.push('/app');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = () => {
    router.push('/app');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
        {/* Brand */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-nexu-coral to-rose-400 flex items-center justify-center text-white shadow-md">
              <Layers className="w-6 h-6" />
            </div>
            <span className="font-heading font-extrabold text-2xl tracking-tight text-nexu-dark">
              Nexu<span className="text-nexu-coral">HR</span>
            </span>
          </Link>
          <h2 className="mt-4 font-heading font-bold text-xl text-slate-900">
            Acesse o Painel da sua Empresa
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Entre com suas credenciais ou use o acesso de demonstração.
          </p>
        </div>

        {error && (
          <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1.5">E-mail Corporativo</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu.nome@empresa.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nexu-coral bg-slate-50 focus:bg-white text-xs"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block font-semibold text-slate-700">Senha</label>
              <Link href="/forgot-password" className="text-nexu-coral hover:underline font-medium">
                Esqueceu a senha?
              </Link>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nexu-coral bg-slate-50 focus:bg-white text-xs"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-nexu-coral hover:bg-nexu-coralDark text-white font-bold rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <span>{loading ? 'Autenticando...' : 'Entrar no NexuHR'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Demo Fast Login */}
        <div className="mt-5 pt-5 border-t border-slate-100">
          <button
            type="button"
            onClick={handleDemoLogin}
            className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
          >
            <span>Acessar Modo Demonstração (Admin)</span>
          </button>
        </div>

        <div className="mt-6 text-center text-xs text-slate-500">
          Ainda não tem conta?{' '}
          <Link href="/register" className="text-nexu-coral font-bold hover:underline">
            Criar conta de teste grátis
          </Link>
        </div>
      </div>
    </div>
  );
}
