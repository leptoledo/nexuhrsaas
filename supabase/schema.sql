-- ============================================================================
-- NEXUHR SAAS: BANCO DE DADOS POSTGRESQL & SUPABASE SCHEMA
-- Arquitetura Multi-tenant Escalável para RH & Departamento Pessoal
-- ============================================================================

-- Habilitar extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================================
-- 1. ENUMS
-- ============================================================================
CREATE TYPE user_role AS ENUM ('admin', 'manager', 'employee');
CREATE TYPE subscription_tier AS ENUM ('starter', 'growth', 'enterprise');
CREATE TYPE subscription_status AS ENUM ('trialing', 'active', 'past_due', 'canceled');
CREATE TYPE employee_status AS ENUM ('active', 'on_leave', 'vacation', 'terminated');
CREATE TYPE punch_type AS ENUM ('entry', 'break_start', 'break_end', 'exit');
CREATE TYPE vacation_type AS ENUM ('regular_vacation', 'day_off', 'sick_leave', 'family_leave');
CREATE TYPE request_status AS ENUM ('pending', 'approved', 'rejected');
CREATE TYPE candidate_stage AS ENUM ('triagem', 'entrevista', 'proposta', 'contratado');
CREATE TYPE document_status AS ENUM ('pending', 'signed', 'expired');

-- ============================================================================
-- 2. ORGANIZATIONS (Empresas / Tenants)
-- ============================================================================
CREATE TABLE organizations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    cnpj VARCHAR(20),
    plan subscription_tier DEFAULT 'growth' NOT NULL,
    status subscription_status DEFAULT 'trialing' NOT NULL,
    trial_ends_at TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '14 days'),
    logo_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================================
-- 3. PROFILES (Usuários do Sistema ligados ao Supabase Auth)
-- ============================================================================
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    role user_role DEFAULT 'admin' NOT NULL,
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================================
-- 4. EMPLOYEES (Colaboradores da Organização)
-- ============================================================================
CREATE TABLE employees (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE NOT NULL,
    profile_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(30),
    role_title VARCHAR(150) NOT NULL,
    department VARCHAR(100) NOT NULL,
    admission_date DATE NOT NULL,
    salary NUMERIC(12, 2) DEFAULT 0.00,
    vacation_balance_days INT DEFAULT 30 NOT NULL,
    status employee_status DEFAULT 'active' NOT NULL,
    avatar_color VARCHAR(30) DEFAULT 'bg-nexu-coral',
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================================
-- 5. TIME_RECORDS (Ponto Eletrônico & Jornada - Portaria 671 MTE)
-- ============================================================================
CREATE TABLE time_records (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE NOT NULL,
    employee_id UUID REFERENCES employees(id) ON DELETE CASCADE NOT NULL,
    punch_time TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    punch_type punch_type NOT NULL,
    location_lat NUMERIC(10, 7),
    location_lng NUMERIC(10, 7),
    location_name VARCHAR(255) DEFAULT 'GPS Validado (São Paulo, BR)',
    device_info TEXT,
    signature_hash TEXT, -- Hash criptográfico para inviolabilidade
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================================
-- 6. VACATION_REQUESTS (Férias e Ausências)
-- ============================================================================
CREATE TABLE vacation_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE NOT NULL,
    employee_id UUID REFERENCES employees(id) ON DELETE CASCADE NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    days_count INT NOT NULL,
    vacation_type vacation_type DEFAULT 'regular_vacation' NOT NULL,
    status request_status DEFAULT 'pending' NOT NULL,
    reason TEXT,
    reviewed_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
    reviewed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================================
-- 7. JOB_OPENINGS & CANDIDATES (Recrutamento ATS)
-- ============================================================================
CREATE TABLE job_openings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE NOT NULL,
    title VARCHAR(200) NOT NULL,
    department VARCHAR(100) NOT NULL,
    employment_type VARCHAR(50) DEFAULT 'CLT - Tempo Integral',
    location VARCHAR(100) DEFAULT 'Remoto / Híbrido',
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE candidates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE NOT NULL,
    job_opening_id UUID REFERENCES job_openings(id) ON DELETE SET NULL,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(30),
    role_applied VARCHAR(150) NOT NULL,
    stage candidate_stage DEFAULT 'triagem' NOT NULL,
    fit_score INT DEFAULT 85,
    tags TEXT[] DEFAULT ARRAY[]::TEXT[],
    resume_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================================
-- 8. DOCUMENTS & SIGNATURES (Assinaturas Eletrônicas & Holerites)
-- ============================================================================
CREATE TABLE documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE NOT NULL,
    employee_id UUID REFERENCES employees(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    file_url TEXT NOT NULL,
    doc_type VARCHAR(50) DEFAULT 'contrato',
    status document_status DEFAULT 'pending' NOT NULL,
    signed_at TIMESTAMPTZ,
    signature_hash TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================================
-- 9. AI_CONVERSATIONS (Nexu AI Copilot)
-- ============================================================================
CREATE TABLE ai_conversations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE NOT NULL,
    profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
    prompt TEXT NOT NULL,
    response TEXT NOT NULL,
    context_category VARCHAR(50) DEFAULT 'general',
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================================
-- 10. TRIGGERS AUTOMÁTICOS (updated_at)
-- ============================================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_organizations_updated_at BEFORE UPDATE ON organizations FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_employees_updated_at BEFORE UPDATE ON employees FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_vacation_requests_updated_at BEFORE UPDATE ON vacation_requests FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_job_openings_updated_at BEFORE UPDATE ON job_openings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_candidates_updated_at BEFORE UPDATE ON candidates FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- 11. ÍNDICES DE PERFORMANCE PARA MULTI-TENANCY
-- ============================================================================
CREATE INDEX idx_profiles_org ON profiles(organization_id);
CREATE INDEX idx_employees_org ON employees(organization_id);
CREATE INDEX idx_time_records_org_emp ON time_records(organization_id, employee_id, punch_time);
CREATE INDEX idx_vacations_org_status ON vacation_requests(organization_id, status);
CREATE INDEX idx_candidates_org_stage ON candidates(organization_id, stage);
CREATE INDEX idx_documents_org_status ON documents(organization_id, status);
