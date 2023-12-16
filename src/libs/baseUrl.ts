export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env['NEXT_PUBLIC_BACKEND_URL'] ??
      'https://suited-hopefully-rhino.ngrok-free.app//api'
    : 'https://suited-hopefully-rhino.ngrok-free.app//api';
