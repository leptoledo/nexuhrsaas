export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type UserRole = 'admin' | 'manager' | 'employee';
export type SubscriptionTier = 'starter' | 'growth' | 'enterprise';
export type SubscriptionStatus = 'trialing' | 'active' | 'past_due' | 'canceled';
export type EmployeeStatus = 'active' | 'on_leave' | 'vacation' | 'terminated';
export type PunchType = 'entry' | 'break_start' | 'break_end' | 'exit';
export type VacationType = 'regular_vacation' | 'day_off' | 'sick_leave' | 'family_leave';
export type RequestStatus = 'pending' | 'approved' | 'rejected';
export type CandidateStage = 'triagem' | 'entrevista' | 'proposta' | 'contratado';
export type DocumentStatus = 'pending' | 'signed' | 'expired';

export interface Organization {
  id: string;
  name: string;
  slug: string;
  cnpj: string | null;
  plan: SubscriptionTier;
  status: SubscriptionStatus;
  trial_ends_at: string;
  logo_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: string;
  organization_id: string;
  full_name: string;
  email: string;
  role: UserRole;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Employee {
  id: string;
  organization_id: string;
  profile_id?: string | null;
  full_name: string;
  email: string;
  phone?: string | null;
  role_title: string;
  department: string;
  admission_date: string;
  salary: number;
  vacation_balance_days: number;
  status: EmployeeStatus;
  avatar_color: string;
  created_at?: string;
  updated_at?: string;
}

export interface TimeRecord {
  id: string;
  organization_id: string;
  employee_id: string;
  punch_time: string;
  punch_type: PunchType;
  location_lat?: number | null;
  location_lng?: number | null;
  location_name: string;
  device_info?: string | null;
  signature_hash?: string | null;
  created_at: string;
}

export interface VacationRequest {
  id: string;
  organization_id: string;
  employee_id: string;
  employee_name?: string;
  employee_role?: string;
  start_date: string;
  end_date: string;
  days_count: number;
  vacation_type: VacationType;
  status: RequestStatus;
  reason?: string | null;
  reviewed_by?: string | null;
  reviewed_at?: string | null;
  created_at?: string;
}

export interface Candidate {
  id: string;
  organization_id: string;
  job_opening_id?: string | null;
  full_name: string;
  email: string;
  phone?: string | null;
  role_applied: string;
  stage: CandidateStage;
  fit_score: number;
  tags: string[];
  resume_url?: string | null;
  created_at?: string;
}

export interface DocumentItem {
  id: string;
  organization_id: string;
  employee_id?: string | null;
  employee_name?: string;
  title: string;
  file_url: string;
  doc_type: string;
  status: DocumentStatus;
  signed_at?: string | null;
  signature_hash?: string | null;
  created_at: string;
}
