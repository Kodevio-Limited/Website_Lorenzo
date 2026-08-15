import { apiClient } from './client';

export type PlanBillingType = 'MONTHLY' | 'ONE_TIME';
export type ServicePlanStatus = 'ACTIVE' | 'INACTIVE' | 'ARCHIVED';

export interface ServicePlan {
  id: number;
  name: string;
  price: number;
  currency?: string;
  billingType: PlanBillingType;
  description?: string | null;
  features: string[];
  status?: ServicePlanStatus;
  createdAt?: string;
  updatedAt?: string;
}

export interface GetServicePlansResponse {
  success: boolean;
  message: string;
  data: ServicePlan[];
}

export async function getServicePlans(): Promise<ServicePlan[]> {
  try {
    const response = await apiClient<GetServicePlansResponse>('/service-plans');
    return response.data || [];
  } catch (error) {
    console.error('Failed to fetch service plans:', error);
    return [];
  }
}
