import { env } from '@/libs/env';

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:8000/api'
    : 'http://localhost:8000/api';
