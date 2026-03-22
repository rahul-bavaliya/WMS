export interface Branch {
  id: string;
  companyId: string;
  name: string;
  code: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  phone?: string;
  email?: string;
  latitude?: number;
  longitude?: number;
  laborRateRegular: number;
  laborRateOvertime: number;
  laborRateEmergency: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
