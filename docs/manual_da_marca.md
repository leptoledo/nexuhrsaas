# 🎨 Manual de Identidade de Marca & Design System: NexuHR

**Data de Emissão:** 23 de Agosto de 2026  
**Responsável:** Especialista em Branding e Identidade (`branding`)  
**Status:** Aprovado para Execução  

---

## 1. 🌟 Naming, Conceito & Posicionamento

### 1.1. Naming Oficial: **NexuHR**
- **Etimologia & Significado:** Derivado de *"Nexus"* (conexão, vínculo, elo central) e *"HR"* (Human Resources). Representa o ponto focal onde pessoas, tecnologia, gestão e cultura se conectam em perfeita harmonia.
- **Pronúncia:** *Né-xu Ér-Agá* (PT-BR) | *Nex-you H-R* (Global).

### 1.2. Slogan & Taglines
- **Tagline Principal:** *"RH sem atritos, pessoas em primeiro lugar."*
- **Slogan Comercial:** *"A plataforma tudo-em-um de RH inteligente que devolve tempo para o que realmente importa."*
- **Slogan em Inglês:** *"Smart, All-in-One HR Software for High-Growth Teams."*

### 1.3. Proposta Única de Valor (UVP)
> **"Centralize gestão de ponto, férias, recrutamento, documentos e pessoas em uma única plataforma intuitiva potencializada por Inteligência Artificial — reduzindo até 70% das tarefas operacionais de DP."**

### 1.4. Tom de Voz & Personalidade
- **Humano & Acolhedor:** Colocamos as pessoas no centro, sem jargões corporativos frios.
- **Inovador & Preciso:** Transmitimos segurança jurídica, agilidade e inteligência analítica.
- **Empoderador:** Ajudamos gestores e colaboradores a serem protagonistas do próprio tempo.

---

## 2. 🎨 Paleta de Cores Oficial

A paleta de cores do **NexuHR** une a energia e modernidade do coral vibrante (inspirado na vanguarda do Factorial HR) com a solidez e tecnologia do azul-índigo e a neutralidade sofisticada do slate.

### 2.1. Tabela de Cores

| Nome da Cor | Código HEX | RGB | Função na Interface |
| :--- | :--- | :--- | :--- |
| **Nexu Coral (Primária)** | `#FF385C` | `rgb(255, 56, 92)` | Botões de conversão (CTAs), destaques principais, badges ativos. |
| **Nexu Coral Dark (Hover)** | `#E0264A` | `rgb(224, 38, 74)` | Estado hover de botões primários e links de destaque. |
| **Tech Indigo (Secundária)** | `#4F46E5` | `rgb(79, 70, 229)` | Ícones de IA, gráficos analíticos, gradientes e badges de tecnologia. |
| **Slate Dark (Texto & Titulos)**| `#0F172A` | `rgb(15, 23, 42)` | Títulos principais (`h1`, `h2`), textos de alto contraste e sidebar. |
| **Slate Muted (Texto Secundário)**| `#64748B`| `rgb(100, 116, 139)`| Parágrafos, legendas, placeholders e metadados. |
| **Clean Background** | `#F8FAFC` | `rgb(248, 250, 252)` | Fundo da aplicação e seções alternadas da landing page. |
| **Surface Pure White** | `#FFFFFF` | `rgb(255, 255, 255)` | Cards, modais, inputs e containers. |
| **Border Subtle** | `#E2E8F0` | `rgb(226, 232, 240)` | Linhas divisórias, bordas de cards e tabelas. |
| **Success Emerald** | `#10B981` | `rgb(16, 185, 129)` | Confirmações, status "Aprovado", "Presente", "Contratado". |
| **Warning Amber** | `#F59E0B` | `rgb(245, 158, 11)` | Avisos, pendências de aprovação, férias agendadas. |

---

## 3. ✍️ Tipografia

- **Família Primária de Títulos & Logotipo:** `Plus Jakarta Sans`, sans-serif (Pesos: 700 Bold, 800 ExtraBold)
- **Família Secundária de Interface & Corpo:** `Inter`, sans-serif (Pesos: 400 Regular, 500 Medium, 600 SemiBold)
- **Font-Stack Web:** `'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;`

---

## 4. 📐 Diretrizes de Design UI/UX (Design System Core)

1. **Bordas e Formas:**
   - Cards e Modais: `border-radius: 1rem` (`rounded-2xl` no Tailwind).
   - Botões e Inputs: `border-radius: 0.75rem` (`rounded-xl` no Tailwind).
   - Badges e Chips: `border-radius: 9999px` (`rounded-full`).
2. **Elevação e Sombras:**
   - Padrão: `box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)` (`shadow-sm`).
   - Cards em Hover: `box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` (`shadow-xl`).
3. **Microinterações:**
   - Transições suaves em todos os elementos clicáveis (`transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)`).
   - Estados de foco acessíveis com anéis de foco (`focus:ring-2 focus:ring-[#FF385C] focus:ring-offset-2`).

---

## 5. 📦 Entregáveis para as Equipes
- **Web (`web`):** Aplicar a paleta e tipografia na Landing Page com máxima clareza e foco em conversão de leads (Testar grátis / Agendar Demo).
- **App (`dev-app`):** Implementar o painel SaaS com a interface corporativa moderna, limpa e responsiva do NexuHR.
- **Criativo (`criativo`):** Seguir as mensagens-chave e o tom de voz para as peças publicitárias e sequências de e-mail.
