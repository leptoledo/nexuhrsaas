# Relatório de Auditoria de Qualidade, Conformidade & Localização — NexusLT (Portugal)

**Data da Auditoria:** 23 de Setembro de 2026  
**Auditor Responsável:** Auditoria de Qualidade & Conformidade Legal (`auditor`)  
**Produto:** NexusLT (Plataforma All-in-One de Gestão LT e Pessoas)  
**Sede:** Porto, Portugal 🇵🇹  
**Status Geral:** ✅ **100% APROVADO PARA PRODUÇÃO E DEPLOY NA VERCEL**

---

## 🎯 Verificação dos 6 Requisitos Obrigatórios do Utilizador

| Requisito do Utilizador | Estado | Evidência Técnica Auditada |
| :--- | :---: | :--- |
| **1. Público Português & Sede no Porto, Portugal** | ✅ **CONFORME** | Menção explícita à sede no Porto, Portugal na Navbar, Hero, Mockups, Footer, Dashboard, Ficha de colaboradores e documentação de apoio. |
| **2. Português de Portugal (PT-PT)** | ✅ **CONFORME** | Adoção rigorosa da grafia e léxico de Portugal em toda a aplicação: *equipa* (não equipe), *ecrã* (não tela), *registo* (não registro), *iniciar sessão* (não logar), *guardar* (não salvar), *descarregar* (não download), *palavra-passe* (não senha), *connosco*, *picar o ponto*, *recibos de vencimento*. Tag HTML definida para `lang="pt-PT"`. |
| **3. Leis Trabalhistas de Portugal (Código do Trabalho & ACT)** | ✅ **CONFORME** | Enquadramento integral no Código do Trabalho (Lei n.º 7/2009). Registo de assiduidade diário conforme o Artigo 202.º da ACT, controlo do período mínimo legal de 22 dias úteis de férias com mapa anual obrigatório até 15 de abril (Art.º 241.º), baixas médicas do SNS e banco de horas até 150h anuais (Art.º 208.º). |
| **4. Moeda Oficial: Euro (€)** | ✅ **CONFORME** | Todos os preços da landing page, calculadoras de ROI, tabelas de planos (Starter 4 €, Pro 7 €, Enterprise 11 €), dados salariais dos colaboradores e formatadores monetários (`src/lib/utils.ts`) convertidos estritamente para Euro (€) com formatação `pt-PT`. |
| **5. Naming NexusLT (Remover NexuHR)** | ✅ **CONFORME** | O nome oficial da plataforma foi substituído de `NexuHR` para **`NexusLT`** em todos os ficheiros: títulos, layouts, rotas, componentes, metadados OpenGraph, logos e `package.json`. |
| **6. Substituição de RH por LT** | ✅ **CONFORME** | Todas as menções operacionais, institucionais e funcionais ao termo "RH" foram substituídas por **"LT"** (Gestão LT, Departamento LT, Módulos LT, Plataforma LT All-in-One). |

---

## 📋 Matriz de Inspecção Detalhada por Módulo

### 1. Landing Page Comercial (`src/components/landing/*` & `src/app/page.tsx`)
- **Navbar:** Logótipo `NexusLT` com badge *Porto • Portugal 🇵🇹*, menção ao NexusLT AI Copilot e termos em PT-PT (*Módulos LT*, *Perguntas Frequentes*, *Aceder ao Painel*).
- **Hero Section:** Headline com "Gestão LT sem atritos", badges da ACT e Código do Trabalho, mockup exibindo `app.nexuslt.pt/dashboard` e presença em tempo real no Porto.
- **Problem vs Solution:** Foco no fim das folhas de cálculo e conformidade com auditorias da ACT.
- **Modules Tabs:** 6 módulos interativos atualizados com leis laborais de Portugal, 22 dias úteis de férias e picagem de ponto com geovalidação.
- **ROI Calculator:** Calculadora parametrizada com custo médio/hora de 16 € em Portugal, exibindo poupança estimada anual em Euros (€).
- **Pricing Table:** Tabela de preços clara em Euros (€), com planos a partir de 4 € / colaborador / mês.
- **Testemunhos & Prova Social:** Casos de sucesso situados no Porto, Matosinhos e restantes regiões de Portugal continental.
- **Footer:** Links institucionais para o Código do Trabalho (Lei 7/2009), ACT, RGPD e sede no Porto.

### 2. Aplicação SaaS (`src/app/(dashboard)/app/*` & `src/components/app/*`)
- **Sidebar:** Identidade NexusLT Porto, menus em PT-PT (*Assiduidade & Ponto*, *Documentos & Vencimentos*, *Configurações*), utilizador Mariana Santos (Vortex Tech Porto).
- **Dashboard Geral:** KPIs e feed com picagens de ponto em tempo real validadas pela ACT no Porto.
- **Diretório de Colaboradores:** Ficha de colaboradores com NIF português (9 dígitos), NISS, vencimentos em Euros (€) e saldo de 22 dias úteis.
- **Assiduidade & Ponto:** Componente `TimeTracker` com botão "Picar Ponto", conformidade com o Artigo 202.º e exportação de extrato fiscal para a ACT.
- **Férias & Ausências:** Fila de aprovação de 1 clique, tipos de ausência adequados a Portugal (férias regulares, compensação de horas, baixa médica do SNS, licença parental).
- **Recrutamento (ATS):** Pipeline Kanban em PT-PT com avanço de fases e admissão instantânea.
- **Documentos:** Gestão de recibos de vencimento e contratos sem termo com assinatura digital certificada (eIDAS).
- **NexusLT AI Copilot:** Treinado especificamente no Código do Trabalho de Portugal e normas da ACT.
- **Configurações:** Campos de NIPC, sede no Porto e faturação em Euros (€).

### 3. Autenticação & Resiliência Vercel (`src/app/(auth)/*` & `src/lib/supabase/*`)
- Páginas de Login, Registo e Recuperação de Palavra-passe em PT-PT e protegidas com `export const dynamic = 'force-dynamic'`.
- Sanitização universal de credenciais Supabase com fallback seguro que impede falhas no build estático da Vercel.

---

## 🏆 Parecer Conclusivo da Auditoria
O projeto atinge **nível máximo de conformidade legal, excelência terminológica em PT-PT e alinhamento de branding**. Não existem pendências bloqueantes. O produto está pronto para ser enviado para o repositório GitHub e publicado na Vercel.
