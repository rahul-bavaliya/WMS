export interface Customer {
  id: string;
  companyId: string;
  branchId?: string;
  name: string;
  email?: string;
  phone: string;
  companyName?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  notes?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
