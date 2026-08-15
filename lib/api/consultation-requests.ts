import { apiClient } from './client';

export interface CreateConsultationRequestPayload {
  name: string;
  email: string;
  phone?: string;
  serviceRequired?: string;
  parish?: string;
  message?: string;
  privacyPolicyAccepted?: boolean;
}

export interface CreateConsultationRequestResponse {
  success: boolean;
  message: string;
  data: {
    id: number;
    name: string;
    email: string;
    phone?: string | null;
    serviceRequired?: string | null;
    parish?: string | null;
    message?: string | null;
    privacyPolicyAccepted: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export function createConsultationRequest(
  payload: CreateConsultationRequestPayload,
) {
  return apiClient<CreateConsultationRequestResponse>(
    '/consultation-requests',
    {
      method: 'POST',
      body: JSON.stringify(payload),
    },
  );
}