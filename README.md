# 🚀 NexuHR — The All-in-One People & HR SaaS Platform

> **Plataforma Completa de Gestão de RH, Departamento Pessoal e Inteligência Artificial**, construída em **Next.js 14+ (App Router)**, **Supabase (PostgreSQL & Auth Multi-tenant)**, **Tailwind CSS** e pronta para deploy instantâneo na **Vercel**. Inspirada no modelo de excelência da [Factorial HR](https://factorialhr.com/).

---

## 🏛️ Arquitetura do Projeto

```
.
├── src/
│   ├── app/                           # Next.js 14 App Router
│   │   ├── (auth)/                    # Rotas de Autenticação Supabase (Login, Register, Forgot Password)
│   │   ├── (dashboard)/app/           # Aplicação SaaS Protegida (Dashboard, Colaboradores, Ponto, Férias, ATS, Docs, IA, Configs)
│   │   ├── api/                       # API Routes Serverless (AI Endpoint, Auth Callback, Exportação Fiscal)
│   │   ├── layout.tsx                 # Root Layout com fontes Google (Plus Jakarta Sans & Inter)
│   │   ├── page.tsx                   # Landing Page Comercial de Alta Conversão
│   │   └── globals.css                # Estilos globais e tokens de Design System
│   │
│   ├── components/
│   │   ├── landing/                   # Componentes da Landing Page (Hero, Módulos, ROI, Preços, FAQ, etc.)
│   │   └── app/                       # Componentes do Painel SaaS (Sidebar, Header, Ponto, Férias, Kanban ATS, IA)
│   │
│   ├── lib/
│   │   ├── supabase/                  # Clientes Supabase SSR (client.ts, server.ts, middleware.ts, mock-data.ts)
│   │   ├── types/                     # Tipos TypeScript estritos do banco de dados
│   │   └── utils.ts                   # Formatadores (BRL, Data, Horas, cn)
│   │
│   └── middleware.ts                  # Middleware de sessão Supabase e proteção de rotas
│
├── supabase/                          # 🗄️ Banco de Dados PostgreSQL & Supabase
│   ├── schema.sql                     # DDL completo (tabelas, enums, chaves estrangeiras, triggers e índices)
│   ├── rls_policies.sql               # Políticas de Row Level Security (RLS) para isolamento multi-tenant
│   └── seed.sql                       # Dados de demonstração realistas
│
├── docs/                              # 📚 Documentação Técnica e Estratégica
│   ├── arquitetura_saas_supabase.md   # Arquitetura de dados multi-tenant e escalabilidade
│   ├── relatorio_pesquisa_mercado.md  # Benchmark Factorial HR, ICP e personas
│   ├── manual_da_marca.md             # Design System e tokens visuais
│   ├── kit_campanha_marketing.md      # Copies de anúncios, e-mails e VSL
│   └── relatorio_auditoria_nextjs_supabase.md # Auditoria de QA e Vercel Readiness
│
├── package.json                       # Dependências Next.js, Supabase, Lucide, Chart.js, Tailwind
├── tailwind.config.ts                 # Configuração de temas e cores oficiais do NexuHR
├── tsconfig.json                      # Configuração TypeScript estrita com aliases (@/*)
├── next.config.mjs                    # Configuração Next.js otimizada para Vercel
└── .env.example                       # Modelo de variáveis de ambiente
```

---

## 🌟 Funcionalidades Principais

### 1. 🌐 Landing Page de Alta Conversão (`/`)
- **Hero Magnético:** Proposta de valor, badges de conformidade (Portaria 671 MTE / LGPD) e mockup interativo em alta resolução.
- **Demonstrador de Módulos:** Tabs interativas navegando por *Ponto & Horas*, *Férias & Ausências*, *Diretório de Pessoas*, *Recrutamento ATS*, *Documentos & Assinaturas* e *Nexu AI Copilot*.
- **Calculadora Interativa de ROI:** Controle deslizante calculando horas economizadas e economia anual em R$ em tempo real.
- **Tabela de Preços & Planos:** Alternador Mensal / Anual (20% OFF) para os planos Starter, Growth & Pro (Mais Popular) e Enterprise.
- **FAQ em Acordeão:** Resolução instantânea das principais dúvidas.

### 2. 📱 Aplicação SaaS Completa (`/app`)
- **Dashboard Executivo:** Métricas em tempo real, gráfico semanal com Chart.js e feed de atividades recentes.
- **Diretório de Colaboradores (Core HR):** CRUD completo com filtros por departamento, busca instantânea e modal de admissão.
- **Ponto Eletrônico & Horas:** Relógio digital ao vivo com segundos, 4 opções de registro com geolocalização e espelho de ponto do mês.
- **Gestão de Férias & Ausências:** Fila de aprovação de 1 clique para gestores e cálculo de saldo restante.
- **Recrutamento ATS (Kanban):** Funil de seleção de candidatos com avanço de etapas e admissão direta como colaborador.
- **Documentos & Assinaturas:** Lista de contratos e holerites com status de assinatura digital.
- **Nexu AI Copilot:** Assistente de IA conversacional integrado para tirar dúvidas da CLT, analisar turnover e gerar descrições de vagas.
- **Configurações & Plano SaaS:** Gestão de dados corporativos do tenant, faturamento e chaves de API/Webhooks.

---

## ⚙️ Como Executar Localmente

1. **Instalar Dependências:**
   ```bash
   npm install
   ```

2. **Configurar Variáveis de Ambiente:**
   Copie o arquivo `.env.example` para `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   *(Nota: A aplicação possui fallback automático para modo de demonstração caso você ainda não tenha criado o projeto no Supabase).*

3. **Iniciar o Servidor de Desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## ☁️ Deploy na Vercel & Configuração do Supabase

1. **Criar o Projeto no Supabase:**
   - Acesse [supabase.com](https://supabase.com) e crie um novo projeto.
   - Abra o **SQL Editor** e execute na ordem:
     1. [`supabase/schema.sql`](file:///Users/leandrotoledo/Projetos/daniel/supabase/schema.sql)
     2. [`supabase/rls_policies.sql`](file:///Users/leandrotoledo/Projetos/daniel/supabase/rls_policies.sql)
     3. [`supabase/seed.sql`](file:///Users/leandrotoledo/Projetos/daniel/supabase/seed.sql)

2. **Conectar na Vercel:**
   - Acesse [vercel.com](https://vercel.com) e importe este repositório do Git.
   - Configure as variáveis de ambiente:
     - `NEXT_PUBLIC_SUPABASE_URL`: `https://seu-projeto.supabase.co`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: `sua-anon-key-do-supabase`
     - `NEXT_PUBLIC_SITE_URL`: `https://seu-dominio.vercel.app`
   - Clique em **Deploy**.
