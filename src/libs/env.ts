import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  client: {
    /** backend url */
    NEXT_PUBLIC_BACKEND_URL: z.string().url(),
    /** firebase API Key */
    NEXT_PUBLIC_FIREBASE_API_KEY: z.string(),
    /** firebase Auth Domain */
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: z.string(),
    /** firebase Project Id */
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: z.string(),
    /** firebase Storage Bucket */
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: z.string(),
    /** firebase Message Sender Id */
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: z.string(),
    /** firebase App Id */
    NEXT_PUBLIC_FIREBASE_APP_ID: z.string(),
    /** firebase Measurement Id */
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: z.string(),
  },

  experimental__runtimeEnv: {
    NEXT_PUBLIC_BACKEND_URL: process.env['NEXT_PUBLIC_BACKEND_URL'],
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env['NEXT_PUBLIC_FIREBASE_API_KEY'],
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:
      process.env['NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN'],
    NEXT_PUBLIC_FIREBASE_PROJECT_ID:
      process.env['NEXT_PUBLIC_FIREBASE_PROJECT_ID'],
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET:
      process.env['NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET'],
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:
      process.env['NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'],
    NEXT_PUBLIC_FIREBASE_APP_ID: process.env['NEXT_PUBLIC_FIREBASE_APP_ID'],
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID:
      process.env['NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID'],
  },
});
