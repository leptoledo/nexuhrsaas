'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layers, Mail, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

export const dynamic = 'force-dynamic';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const supabase = createClient();
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/app`,
      });

      if (resetError) {
        if (resetError.message.includes('placeholder')) {
          setSubmitted(true);
          return;
        }
        setError(resetError.message);
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
        <div className="text-center mb-6">
          <Link href="/" className="inline-flex items-center gap-2.5">
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
            Recuperação de Palavra-passe
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Indique o seu e-mail para receber as instruções de redefinição.
          </p>
        </div>

        {error && (
          <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {submitted ? (
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <p className="text-xs text-slate-600">
              Enviámos uma ligação de redefinição para <strong>{email}</strong>. Verifique a sua caixa de entrada e pasta de spam.
            </p>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-xs font-bold text-nexu-coral hover:underline pt-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao início de sessão</span>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleReset} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1.5">E-mail Registado</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="o.seu.nome@empresa.pt"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nexu-coral bg-slate-50 focus:bg-white text-xs"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-nexu-coral hover:bg-nexu-coralDark text-white font-bold rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <span>{loading ? 'A enviar...' : 'Enviar Ligação de Redefinição'}</span>
            </button>

            <div className="text-center pt-2">
              <Link
                href="/login"
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Voltar ao Início de Sessão</span>
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
