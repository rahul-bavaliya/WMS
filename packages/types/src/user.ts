export type Role = 'SUPER_ADMIN' | 'COMPANY_ADMIN' | 'BRANCH_MANAGER' | 'DISPATCHER' | 'TECHNICIAN' | 'CUSTOMER';

export interface User {
  id: string;
  companyId?: string;
  branchId?: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: Role;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
