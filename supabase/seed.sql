-- ============================================================================
-- NEXUHR SAAS: SEED DATA (DADOS INICIAIS DE DEMONSTRAÇÃO)
-- ============================================================================

DO $$
DECLARE
    org_id UUID := 'e4a5d89f-8a9a-4c22-9214-7bc698c9f001';
    emp_lucas UUID := 'e1000000-0000-0000-0000-000000000001';
    emp_mariana UUID := 'e1000000-0000-0000-0000-000000000002';
    emp_ana UUID := 'e1000000-0000-0000-0000-000000000003';
    emp_rafael UUID := 'e1000000-0000-0000-0000-000000000004';
    emp_beatriz UUID := 'e1000000-0000-0000-0000-000000000005';
    emp_carlos UUID := 'e1000000-0000-0000-0000-000000000006';
    emp_juliana UUID := 'e1000000-0000-0000-0000-000000000007';
    emp_thiago UUID := 'e1000000-0000-0000-0000-000000000008';
    job_react UUID := 'f1000000-0000-0000-0000-000000000001';
BEGIN
    -- 1. Organização Demo
    INSERT INTO organizations (id, name, slug, cnpj, plan, status)
    VALUES (org_id, 'Vortex Tech Soluções', 'vortex-tech', '12.345.678/0001-90', 'growth', 'active')
    ON CONFLICT (id) DO NOTHING;

    -- 2. Colaboradores da Organização
    INSERT INTO employees (id, organization_id, full_name, email, role_title, department, admission_date, salary, vacation_balance_days, status, avatar_color)
    VALUES
        (emp_lucas, org_id, 'Lucas Gomes', 'lucas.gomes@vortex.com', 'Engenheiro Fullstack Senior', 'Tecnologia', '2024-01-10', 14500.00, 18, 'active', 'bg-nexu-coral'),
        (emp_mariana, org_id, 'Mariana Santos', 'mariana.santos@vortex.com', 'Design Lead & UX', 'Design', '2023-03-15', 12800.00, 22, 'active', 'bg-nexu-indigo'),
        (emp_ana, org_id, 'Ana Ferreira', 'ana.ferreira@vortex.com', 'Product Manager', 'Produto', '2024-06-01', 13500.00, 12, 'active', 'bg-emerald-600'),
        (emp_rafael, org_id, 'Rafael Lima', 'rafael.lima@vortex.com', 'Backend Developer', 'Tecnologia', '2024-08-12', 10500.00, 8, 'active', 'bg-amber-600'),
        (emp_beatriz, org_id, 'Beatriz Costa', 'beatriz.costa@vortex.com', 'Especialista em DP & RH', 'RH & DP', '2023-02-20', 9200.00, 15, 'active', 'bg-purple-600'),
        (emp_carlos, org_id, 'Carlos Eduardo', 'carlos.eduardo@vortex.com', 'Executivo de Contas B2B', 'Vendas', '2024-05-05', 8500.00, 10, 'active', 'bg-blue-600'),
        (emp_juliana, org_id, 'Juliana Paes', 'juliana.paes@vortex.com', 'UX Researcher', 'Design', '2024-11-18', 9800.00, 5, 'active', 'bg-rose-500'),
        (emp_thiago, org_id, 'Thiago Martins', 'thiago.martins@vortex.com', 'Frontend Engineer', 'Tecnologia', '2025-02-01', 11000.00, 3, 'active', 'bg-teal-600')
    ON CONFLICT (id) DO NOTHING;

    -- 3. Registros Recentes de Ponto (Hoje)
    INSERT INTO time_records (organization_id, employee_id, punch_time, punch_type, location_name)
    VALUES
        (org_id, emp_lucas, NOW() - INTERVAL '4 hours', 'entry', 'São Paulo, SP (App Mobile GPS)'),
        (org_id, emp_mariana, NOW() - INTERVAL '3 hours 50 minutes', 'entry', 'São Paulo, SP (Reconhecimento Facial)'),
        (org_id, emp_ana, NOW() - INTERVAL '3 hours 45 minutes', 'entry', 'São Paulo, SP (Portal Web)'),
        (org_id, emp_carlos, NOW() - INTERVAL '3 hours 30 minutes', 'entry', 'São Paulo, SP (App Mobile GPS)')
    ON CONFLICT DO NOTHING;

    -- 4. Solicitações de Férias Pendentes
    INSERT INTO vacation_requests (organization_id, employee_id, start_date, end_date, days_count, vacation_type, status, reason)
    VALUES
        (org_id, emp_mariana, '2026-09-15', '2026-09-25', 10, 'regular_vacation', 'pending', 'Férias programadas do período aquisitivo 2024/2025'),
        (org_id, emp_lucas, '2026-10-01', '2026-10-05', 5, 'day_off', 'pending', 'Compensação de banco de horas')
    ON CONFLICT DO NOTHING;

    -- 5. Vagas e Recrutamento (ATS)
    INSERT INTO job_openings (id, organization_id, title, department, description)
    VALUES
        (job_react, org_id, 'Desenvolvedor React / Next.js Senior', 'Tecnologia', 'Vaga para liderança técnica em frontend moderno e design systems.')
    ON CONFLICT (id) DO NOTHING;

    INSERT INTO candidates (organization_id, job_opening_id, full_name, email, phone, role_applied, stage, fit_score, tags)
    VALUES
        (org_id, job_react, 'Diego Ramos', 'diego.ramos@email.com', '(11) 98888-1111', 'Senior React Developer', 'triagem', 92, ARRAY['React', 'TypeScript', 'Next.js']),
        (org_id, job_react, 'Fernanda Lima', 'fernanda.lima@email.com', '(11) 98888-2222', 'Product Designer', 'triagem', 88, ARRAY['Figma', 'Design System']),
        (org_id, job_react, 'Gabriel Torres', 'gabriel.torres@email.com', '(11) 98888-3333', 'DevOps Specialist', 'entrevista', 95, ARRAY['AWS', 'Kubernetes', 'CI/CD']),
        (org_id, job_react, 'Larissa Alencar', 'larissa.alencar@email.com', '(11) 98888-4444', 'Coordenadora de DP', 'proposta', 98, ARRAY['eSocial', 'Portaria 671']),
        (org_id, job_react, 'Victor Meirelles', 'victor.meirelles@email.com', '(11) 98888-5555', 'Account Executive B2B', 'contratado', 96, ARRAY['SaaS B2B', 'HubSpot'])
    ON CONFLICT DO NOTHING;

    -- 6. Documentos com Assinatura Eletrônica
    INSERT INTO documents (organization_id, employee_id, title, file_url, doc_type, status, signed_at)
    VALUES
        (org_id, emp_lucas, 'Contrato_Trabalho_LucasGomes_CLT.pdf', 'https://storage.nexuhr.com/docs/contrato_lucas.pdf', 'contrato', 'signed', NOW() - INTERVAL '30 days'),
        (org_id, emp_ana, 'Termo_Confidencialidade_Equipamento_Ana.pdf', 'https://storage.nexuhr.com/docs/termo_ana.pdf', 'termo', 'pending', NULL)
    ON CONFLICT DO NOTHING;

END $$;
