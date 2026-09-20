-- ============================================================================
-- NEXUHR SAAS: POLÍTICAS DE SEGURANÇA ROW LEVEL SECURITY (RLS)
-- Garante o isolamento estrito de dados entre diferentes empresas/tenants
-- ============================================================================

-- Habilitar RLS em todas as tabelas
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE employees ENABLE ROW LEVEL SECURITY;
ALTER TABLE time_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE vacation_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_openings ENABLE ROW LEVEL SECURITY;
ALTER TABLE candidates ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- HELPER FUNCTIONS
-- ============================================================================

-- Obter o organization_id do usuário atualmente logado
CREATE OR REPLACE FUNCTION get_auth_organization_id()
RETURNS UUID AS $$
  SELECT organization_id FROM profiles WHERE id = auth.uid();
$$ LANGUAGE sql STABLE SECURITY DEFINER;

-- Verificar se o usuário autenticado é admin da organização
CREATE OR REPLACE FUNCTION is_org_admin()
RETURNS BOOLEAN AS $$
  SELECT role = 'admin' FROM profiles WHERE id = auth.uid();
$$ LANGUAGE sql STABLE SECURITY DEFINER;

-- ============================================================================
-- 1. POLÍTICAS PARA PROFILES
-- ============================================================================
CREATE POLICY "Usuários podem ver perfis de sua própria organização"
    ON profiles FOR SELECT
    USING (organization_id = get_auth_organization_id());

CREATE POLICY "Usuários podem atualizar seu próprio perfil"
    ON profiles FOR UPDATE
    USING (id = auth.uid());

CREATE POLICY "Admins podem inserir ou gerenciar perfis na organização"
    ON profiles FOR ALL
    USING (organization_id = get_auth_organization_id());

-- ============================================================================
-- 2. POLÍTICAS PARA ORGANIZATIONS
-- ============================================================================
CREATE POLICY "Membros podem visualizar sua própria organização"
    ON organizations FOR SELECT
    USING (id = get_auth_organization_id());

CREATE POLICY "Admins podem atualizar sua própria organização"
    ON organizations FOR UPDATE
    USING (id = get_auth_organization_id() AND is_org_admin());

-- ============================================================================
-- 3. POLÍTICAS PARA EMPLOYEES
-- ============================================================================
CREATE POLICY "Membros podem visualizar colaboradores de sua organização"
    ON employees FOR SELECT
    USING (organization_id = get_auth_organization_id());

CREATE POLICY "Admins e Gestores podem gerenciar colaboradores"
    ON employees FOR ALL
    USING (organization_id = get_auth_organization_id());

-- ============================================================================
-- 4. POLÍTICAS PARA TIME_RECORDS (Ponto Eletrônico)
-- ============================================================================
CREATE POLICY "Visualização de pontos dentro da organização"
    ON time_records FOR SELECT
    USING (organization_id = get_auth_organization_id());

CREATE POLICY "Inserção de pontos para a própria organização"
    ON time_records FOR INSERT
    WITH CHECK (organization_id = get_auth_organization_id());

-- ============================================================================
-- 5. POLÍTICAS PARA VACATION_REQUESTS (Férias)
-- ============================================================================
CREATE POLICY "Visualização de solicitações de férias na organização"
    ON vacation_requests FOR SELECT
    USING (organization_id = get_auth_organization_id());

CREATE POLICY "Criação de solicitação de férias"
    ON vacation_requests FOR INSERT
    WITH CHECK (organization_id = get_auth_organization_id());

CREATE POLICY "Aprovação/Gestão de férias por Admins/Gestores"
    ON vacation_requests FOR UPDATE
    USING (organization_id = get_auth_organization_id());

-- ============================================================================
-- 6. POLÍTICAS PARA RECRUTAMENTO (JOB_OPENINGS & CANDIDATES)
-- ============================================================================
CREATE POLICY "Visualização de vagas na organização"
    ON job_openings FOR SELECT
    USING (organization_id = get_auth_organization_id());

CREATE POLICY "Gestão de vagas na organização"
    ON job_openings FOR ALL
    USING (organization_id = get_auth_organization_id());

CREATE POLICY "Visualização e gestão de candidatos"
    ON candidates FOR ALL
    USING (organization_id = get_auth_organization_id());

-- ============================================================================
-- 7. POLÍTICAS PARA DOCUMENTS & AI CONVERSATIONS
-- ============================================================================
CREATE POLICY "Acesso a documentos da própria organização"
    ON documents FOR ALL
    USING (organization_id = get_auth_organization_id());

CREATE POLICY "Acesso a conversas de IA da própria organização"
    ON ai_conversations FOR ALL
    USING (organization_id = get_auth_organization_id() AND profile_id = auth.uid());
