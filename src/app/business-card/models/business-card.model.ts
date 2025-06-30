export interface BusinessCard {
  id?: number;
  uuid?: string;
  first_name: string;
  last_name: string;
  email: string;
  mobile?: string;
  job_title?: string;
  department?: string;
  company_name?: string;
  address?: string;
  city?: string;
  postal_code?: string;
  created_at?: string;
  updated_at?: string;
  qr_code?: string;
}