'use client';

import React, { useState } from 'react';
import { DocumentList } from '@/components/app/DocumentList';
import { DocumentItem } from '@/lib/types/database.types';
import { INITIAL_DOCUMENTS } from '@/lib/supabase/mock-data';
import { CheckCircle2 } from 'lucide-react';

export default function DocumentosPage() {
  const [documents] = useState<DocumentItem[]>(INITIAL_DOCUMENTS);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const handleRequestSignature = () => {
    showToast('📄 Novo pedido de assinatura digital enviado por e-mail!');
  };

  const handleDownload = (doc: DocumentItem) => {
    showToast(`A descarregar "${doc.title}" com carimbo temporal criptográfico...`);
  };

  return (
    <div className="space-y-6">
      <DocumentList
        documents={documents}
        onRequestSignature={handleRequestSignature}
        onDownload={handleDownload}
      />

      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-xs animate-scale-up">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMsg}</span>
        </div>
      )}
    </div>
  );
}
