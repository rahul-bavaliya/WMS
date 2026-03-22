export type Industry = 'HVAC' | 'AUTO_GARAGE' | 'MANUFACTURING' | 'SCRAP_YARD' | 'MAINTENANCE_SHOP';

export interface Company {
  id: string;
  name: string;
  email: string;
  phone?: string;
  logo?: string;
  industry: Industry;
  address?: string;
  city?: string;
  country?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
