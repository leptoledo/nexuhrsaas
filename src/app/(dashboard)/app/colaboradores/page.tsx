'use client';

import React, { useState } from 'react';
import { Employee } from '@/lib/types/database.types';
import { INITIAL_EMPLOYEES } from '@/lib/supabase/mock-data';
import { Plus, Search, Trash2, X, CheckCircle2 } from 'lucide-react';

export default function ColaboradoresPage() {
  const [employees, setEmployees] = useState<Employee[]>(INITIAL_EMPLOYEES);
  const [filterText, setFilterText] = useState('');
  const [deptFilter, setDeptFilter] = useState('ALL');
  const [modalOpen, setModalOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [dept, setDept] = useState('Tecnologia');
  const [date, setDate] = useState('');
  const [salary, setSalary] = useState('10000');

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const filteredEmployees = employees.filter((emp) => {
    const matchesText =
      emp.full_name.toLowerCase().includes(filterText.toLowerCase()) ||
      emp.email.toLowerCase().includes(filterText.toLowerCase());
    const matchesDept = deptFilter === 'ALL' || emp.department === deptFilter;
    return matchesText && matchesDept;
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const newEmp: Employee = {
      id: `emp-${Date.now()}`,
      organization_id: 'org-vortex',
      full_name: name,
      email,
      role_title: role,
      department: dept,
      admission_date: date || '2026-09-20',
      salary: Number(salary) || 0,
      vacation_balance_days: 30,
      status: 'active',
      avatar_color: 'bg-nexu-coral',
    };

    setEmployees([newEmp, ...employees]);
    setModalOpen(false);
    setName('');
    setEmail('');
    setRole('');
    showToast(`🎉 ${name} adicionado(a) com sucesso! Acesso gerado.`);
  };

  const handleRemove = (id: string) => {
    setEmployees(employees.filter((e) => e.id !== id));
    showToast('Colaborador removido.');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading font-extrabold text-2xl text-slate-900">
            Diretório de Colaboradores
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Gerencie todos os membros do time, contratos e departamentos em uma base única.
          </p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-nexu-coral hover:bg-nexu-coralDark text-white text-xs font-bold transition-all shadow-md flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Adicionar Colaborador</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs shadow-sm">
        <div className="flex items-center gap-2 flex-1 max-w-sm relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="Filtrar por nome ou e-mail..."
            className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-nexu-coral text-xs"
          />
        </div>
        <div className="flex items-center gap-2">
          <select
            value={deptFilter}
            onChange={(e) => setDeptFilter(e.target.value)}
            className="px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-nexu-coral"
          >
            <option value="ALL">Todos os Departamentos</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Design">Design</option>
            <option value="Produto">Produto</option>
            <option value="RH & DP">RH & DP</option>
            <option value="Vendas">Vendas</option>
          </select>
        </div>
      </div>

      {/* Employees Table */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4">Colaborador</th>
                <th className="py-3.5 px-4">Cargo</th>
                <th className="py-3.5 px-4">Departamento</th>
                <th className="py-3.5 px-4">Admissão</th>
                <th className="py-3.5 px-4">Saldo Férias</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredEmployees.map((emp) => (
                <tr key={emp.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full ${
                        emp.avatar_color || 'bg-slate-800'
                      } text-white font-bold text-xs flex items-center justify-center shrink-0`}
                    >
                      {emp.full_name
                        .split(' ')
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join('')}
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">{emp.full_name}</div>
                      <div className="text-[11px] text-slate-400">{emp.email}</div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-700">{emp.role_title}</td>
                  <td className="py-3.5 px-4">
                    <span className="bg-slate-100 text-slate-700 font-semibold px-2 py-0.5 rounded-md text-[11px] border border-slate-200">
                      {emp.department}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">{emp.admission_date}</td>
                  <td
                    className={`py-3.5 px-4 font-bold ${
                      emp.vacation_balance_days > 15 ? 'text-amber-600' : 'text-slate-700'
                    }`}
                  >
                    {emp.vacation_balance_days} dias
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {emp.status === 'active' ? 'Ativo' : emp.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => showToast(`Visualizando perfil de ${emp.full_name}`)}
                      className="text-nexu-coral hover:underline font-bold mr-2"
                    >
                      Ver Perfil
                    </button>
                    <button
                      onClick={() => handleRemove(emp.id)}
                      className="text-slate-400 hover:text-red-500"
                      title="Remover"
                    >
                      <Trash2 className="w-3.5 h-3.5 inline" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal: Novo Colaborador */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-scale-up">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-heading font-bold text-xl text-slate-900 mb-1">
              Cadastrar Novo Colaborador
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Preencha os dados contratuais para gerar o acesso imediato ao painel.
            </p>

            <form onSubmit={handleCreate} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Nome Completo</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Rodrigo Mendonça"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-nexu-coral"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">E-mail Corporativo</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rodrigo@empresa.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-nexu-coral"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Cargo</label>
                  <input
                    type="text"
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Ex: Tech Lead"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-nexu-coral"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Departamento</label>
                  <select
                    value={dept}
                    onChange={(e) => setDept(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-nexu-coral bg-white"
                  >
                    <option value="Tecnologia">Tecnologia</option>
                    <option value="Design">Design</option>
                    <option value="Produto">Produto</option>
                    <option value="RH & DP">RH & DP</option>
                    <option value="Vendas">Vendas</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Data de Admissão</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-nexu-coral"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-nexu-coral hover:bg-nexu-coralDark text-white font-bold rounded-xl text-xs transition-all shadow-md mt-4"
              >
                Salvar e Gerar Acesso
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toast */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-xs animate-scale-up">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMsg}</span>
        </div>
      )}
    </div>
  );
}
