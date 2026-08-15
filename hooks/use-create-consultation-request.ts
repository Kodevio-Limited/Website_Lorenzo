'use client';

import { useMutation } from '@tanstack/react-query';

import {
  createConsultationRequest,
  type CreateConsultationRequestPayload,
} from '@/lib/api/consultation-requests';

export function useCreateConsultationRequest() {
  return useMutation({
    mutationFn: (payload: CreateConsultationRequestPayload) =>
      createConsultationRequest(payload),
  });
}