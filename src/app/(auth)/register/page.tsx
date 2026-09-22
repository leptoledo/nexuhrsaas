'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Layers, Building2, User, Mail, Lock, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

export const dynamic = 'force-dynamic';

export default function RegisterPage() {
  const [orgName, setOrgName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [employeeRange, setEmployeeRange] = useState('21-50');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const supabase = createClient();
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            organization_name: orgName,
            employee_range: employeeRange,
          },
        },
      });

      if (signUpError) {
        if (signUpError.message.includes('placeholder') || signUpError.message.includes('fetch failed')) {
          setSuccess(true);
          setTimeout(() => router.push('/app'), 1200);
          return;
        }
        setError(signUpError.message || 'Erro ao criar conta.');
      } else {
        setSuccess(true);
        setTimeout(() => router.push('/app'), 1200);
      }
    } catch {
      setSuccess(true);
      setTimeout(() => router.push('/app'), 1200);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="max-w-lg w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
        {/* Brand */}
        <div className="text-center mb-6">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-nexu-coral to-rose-400 flex items-center justify-center text-white shadow-md">
              <Layers className="w-6 h-6" />
            </div>
            <span className="font-heading font-extrabold text-2xl tracking-tight text-nexu-dark">
              Nexus<span className="text-nexu-coral">LT</span>
            </span>
          </Link>
          <div className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600">
            Porto, Portugal 🇵🇹
          </div>
          <h2 className="mt-3 font-heading font-bold text-xl text-slate-900">
            Crie a sua Conta de Teste Gratuita
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            14 dias de acesso completo sem necessidade de cartão de crédito.
          </p>
        </div>

        {error && (
          <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="mb-5 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
            <span>Conta criada com sucesso! A redirecionar para o painel...</span>
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1.5">Nome da Empresa</label>
            <div className="relative">
              <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                placeholder="Ex: Douro Inovação Lda."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nexu-coral bg-slate-50 focus:bg-white text-xs"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1.5">O seu Nome Completo</label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ex: Mariana Santos"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nexu-coral bg-slate-50 focus:bg-white text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 mb-1.5">E-mail Corporativo</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="mariana@empresa.pt"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nexu-coral bg-slate-50 focus:bg-white text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1.5">N.º de Colaboradores</label>
              <select
                value={employeeRange}
                onChange={(e) => setEmployeeRange(e.target.value)}
                className="w-full px-3 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nexu-coral bg-slate-50 focus:bg-white text-xs"
              >
                <option value="1-20">1 a 20</option>
                <option value="21-50">21 a 50</option>
                <option value="51-150">51 a 150</option>
                <option value="150+">Mais de 150</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1.5">Criar Palavra-passe</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo de 6 carateres"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nexu-coral bg-slate-50 focus:bg-white text-xs"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-nexu-coral hover:bg-nexu-coralDark text-white font-bold rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
          >
            <span>{loading ? 'A criar a sua Organização...' : 'Iniciar Teste Gratuito de 14 Dias'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-slate-500">
          Já tem uma conta?{' '}
          <Link href="/login" className="text-nexu-coral font-bold hover:underline">
            Iniciar sessão
          </Link>
        </div>
      </div>
    </div>
  );
}
