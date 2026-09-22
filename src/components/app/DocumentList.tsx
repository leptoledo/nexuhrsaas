'use client';

import React from 'react';
import { DocumentItem } from '@/lib/types/database.types';
import { FileText, Send, Download } from 'lucide-react';

interface DocumentListProps {
  documents: DocumentItem[];
  onRequestSignature: () => void;
  onDownload: (doc: DocumentItem) => void;
}

export function DocumentList({
  documents,
  onRequestSignature,
  onDownload,
}: DocumentListProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading font-extrabold text-2xl text-slate-900">
            Documentos & Recibos de Vencimento
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Recibos de vencimento, contratos de trabalho e adendas com assinatura digital certificada (Regulamento eIDAS).
          </p>
        </div>
        <button
          onClick={onRequestSignature}
          className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-md flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>Solicitar Assinatura Digital</span>
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4">Nome do Documento</th>
                <th className="py-3.5 px-4">Destinatário</th>
                <th className="py-3.5 px-4">Data de Envio</th>
                <th className="py-3.5 px-4">Estado</th>
                <th className="py-3.5 px-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {documents.map((doc) => (
                <tr key={doc.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-800 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>{doc.title}</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">
                    {doc.employee_name || 'Geral'}
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">
                    {new Date(doc.created_at).toLocaleDateString('pt-PT')}
                  </td>
                  <td className="py-3.5 px-4">
                    {doc.status === 'signed' ? (
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Assinado Digitalmente
                      </span>
                    ) : (
                      <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        A aguardar Assinatura
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => onDownload(doc)}
                      className="text-nexu-coral font-bold hover:underline inline-flex items-center gap-1"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Descarregar</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
