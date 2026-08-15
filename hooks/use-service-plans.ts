'use client';

import { useQuery } from '@tanstack/react-query';
import { getServicePlans } from '@/lib/api/service-plans';

export function useServicePlans() {
  return useQuery({
    queryKey: ['service-plans'],
    queryFn: getServicePlans,
  });
}
