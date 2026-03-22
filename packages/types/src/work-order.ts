export type WorkOrderStatus = 'OPEN' | 'ASSIGNED' | 'IN_PROGRESS' | 'COMPLETED' | 'INVOICED' | 'CANCELLED';
export type Priority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';

export interface WorkOrder {
  id: string;
  companyId: string;
  customerId: string;
  branchId?: string;
  assignedTo?: string;
  title: string;
  description?: string;
  status: WorkOrderStatus;
  priority: Priority;
  jobType?: string;
  tradeType?: string;
  scheduledDate?: Date;
  estimatedHours?: number;
  completedAt?: Date;
  invoicedAt?: Date;
  slaDueDate?: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkOrderNote {
  id: string;
  workOrderId: string;
  authorId: string;
  content: string;
  isInternal: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkOrderPhoto {
  id: string;
  workOrderId: string;
  uploadedById: string;
  url: string;
  type: 'BEFORE' | 'AFTER' | 'OTHER';
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkOrderPart {
  id: string;
  workOrderId: string;
  partId: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}
