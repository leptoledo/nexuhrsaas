# 🚀 NexusLT — A Plataforma All-in-One de Gestão LT e Pessoas em Portugal

> **Plataforma Completa de Gestão LT (Legislação & Trabalho), Colaboradores e Inteligência Artificial**, construída em **Next.js 14+ (App Router)**, **Supabase (PostgreSQL & Auth Multi-tenant)**, **Tailwind CSS** e pronta para deploy instantâneo na **Vercel**. Sediada no **Porto, Portugal** e 100% conforme o **Código do Trabalho (Lei n.º 7/2009)** e as exigências da **ACT**.

---

## 🏛️ Arquitetura do Projeto

```
.
├── src/
│   ├── app/                           # Next.js 14 App Router
│   │   ├── (auth)/                    # Autenticação Supabase (Login, Registo, Recuperar Palavra-passe)
│   │   ├── (dashboard)/app/           # Aplicação SaaS Protegida (Dashboard, Colaboradores, Ponto ACT, Férias, ATS, Docs, IA, Configs)
│   │   ├── api/                       # API Routes Serverless (AI Endpoint, Auth Callback, Exportação Fiscal ACT)
│   │   ├── layout.tsx                 # Root Layout em PT-PT com fontes Google (Plus Jakarta Sans & Inter)
│   │   ├── page.tsx                   # Landing Page Comercial de Alta Conversão em Euros (€)
│   │   └── globals.css                # Estilos globais e tokens de Design System
│   │
│   ├── components/
│   │   ├── landing/                   # Componentes da Landing Page (Hero, Módulos, ROI em €, Preços, FAQ, etc.)
│   │   └── app/                       # Componentes do Painel SaaS (Sidebar, Header, Ponto, Férias, Kanban ATS, IA)
│   │
│   ├── lib/
│   │   ├── supabase/                  # Clientes Supabase SSR (client.ts, server.ts, middleware.ts, mock-data.ts)
│   │   ├── types/                     # Tipos TypeScript estritos da base de dados (com NIF/NISS/NIPC)
│   │   └── utils.ts                   # Formatadores (Euro EUR, Data PT-PT, Horas, cn)
│   │
│   └── middleware.ts                  # Middleware de sessão Supabase e proteção de rotas
│
├── supabase/                          # 🗄️ Base de Dados PostgreSQL & Supabase
│   ├── schema.sql                     # DDL completo (tabelas, enums, chaves estrangeiras, triggers e índices)
│   ├── rls_policies.sql               # Políticas de Row Level Security (RLS) para isolamento multi-tenant
│   └── seed.sql                       # Dados de demonstração realistas em Portugal
│
├── docs/                              # 📚 Documentação Técnica e Estratégica
│   ├── arquitetura_saas_supabase.md   # Arquitetura de dados multi-tenant e escalabilidade
│   ├── relatorio_pesquisa_mercado.md  # Enquadramento laboral de Portugal, Código do Trabalho, ACT
│   ├── manual_da_marca.md             # Design System, naming NexusLT (Porto) e regras PT-PT
│   ├── kit_campanha_marketing.md      # Campanhas de marketing em Portugal, LinkedIn e Google Ads
│   └── relatorio_auditoria_qualidade.md # Auditoria de conformidade, PT-PT e ausência de RH/R$
│
├── package.json                       # Dependências Next.js, Supabase, Lucide, Chart.js, Tailwind
├── tailwind.config.ts                 # Configuração de temas e cores oficiais do NexusLT
├── tsconfig.json                      # Configuração TypeScript estrita com aliases (@/*)
├── next.config.mjs                    # Configuração Next.js otimizada para Vercel
└── .env.example                       # Modelo de variáveis de ambiente
```

---

## 🌟 Funcionalidades Principais

### 1. 🌐 Landing Page de Alta Conversão (`/`)
- **Hero Magnético:** Proposta de valor focada no mercado português, badges de conformidade (Código do Trabalho / ACT) e mockup interativo sediado no Porto.
- **Módulos LT Integrados:** Tabs interativas navegando por *Assiduidade & Ponto (ACT)*, *Férias & Mapa Anual (22 dias úteis)*, *Diretório & Equipa (NIF/NISS)*, *Recrutamento ATS*, *Documentos & Recibos de Vencimento* e *NexusLT AI Copilot*.
- **Calculadora Interativa de ROI (€):** Cálculo em tempo real de horas poupadas e redução de custos operacionais em Euros (€).
- **Tabela de Preços & Planos (€):** Alternador Mensal / Anual (20% Poupança) para os planos Starter (4 €), Profissional Pro (7 €) e Empresarial (11 €).
- **FAQ em Acordeão:** Resolução instantânea das principais questões legais sobre a ACT e o Código do Trabalho.

### 2. 📱 Aplicação SaaS Completa (`/app`)
- **Dashboard Executivo:** Métricas em tempo real, gráfico semanal com Chart.js e feed de atividades no Porto.
- **Diretório de Colaboradores (Core LT):** Gestão completa com NIF, NISS, vencimentos em Euros e filtros por departamento.
- **Registo de Assiduidade & Ponto:** Relógio digital ao vivo com segundos, 4 opções de picagem com geovalidação (Porto / GPS) e exportação de extrato conforme o Art.º 202.º do Código do Trabalho.
- **Gestão de Férias & Ausências:** Fila de aprovação de 1 clique para gestores, controlo de 22 dias úteis e baixas médicas.
- **Recrutamento ATS (Kanban):** Funil de seleção de candidatos com avanço de fases e admissão direta para colaborador.
- **Documentos & Recibos de Vencimento:** Envio seguro de recibos de vencimento e contratos sem termo com assinatura digital certificada (eIDAS).
- **NexusLT AI Copilot:** Assistente de IA conversacional integrado para esclarecer dúvidas sobre o Código do Trabalho português, ACT e perfis de função.
- **Configurações & Plano SaaS:** Gestão de dados corporativos da entidade patronal (NIPC/NIF), concelho/sede e faturação em Euros.

---

## ⚙️ Como Executar Localmente

1. **Instalar Dependências:**
   ```bash
   npm install
   ```

2. **Configurar Variáveis de Ambiente:**
   Copie o ficheiro `.env.example` para `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   *(Nota: A aplicação possui fallback automático para modo de demonstração caso ainda não tenha configurado as chaves no Supabase).*

3. **Iniciar o Servidor de Desenvolvimento:**
   ```bash
   npm run dev
   ```
   Aceda a [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## ☁️ Deploy na Vercel & Configuração do Supabase

1. **Configurar o Supabase:**
   - Crie o projeto em [supabase.com](https://supabase.com).
   - No **SQL Editor**, execute `supabase/schema.sql`, `supabase/rls_policies.sql` e `supabase/seed.sql`.

2. **Conectar na Vercel:**
   - Importe este repositório no [vercel.com](https://vercel.com).
   - Adicione as variáveis de ambiente:
     - `NEXT_PUBLIC_SUPABASE_URL`: `https://seu-projeto.supabase.co` (obrigatoriamente iniciando por `https://`)
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: `sua-anon-key-do-supabase`
     - `NEXT_PUBLIC_SITE_URL`: `https://seu-dominio.vercel.app`
   - Clique em **Deploy**.
