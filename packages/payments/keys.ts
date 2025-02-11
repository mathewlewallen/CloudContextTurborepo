import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const keys = () =>
  createEnv({
    server: {
      LEMON_SQUEEZY_API_KEY: z.string().min(1).startsWith('sk_'),
      LEMON_SQUEEZY_WEBHOOK_SECRET: z.string().min(1).startsWith('whsec_').optional(),
    },
    runtimeEnv: {
      LEMON_SQUEEZY_API_KEY: process.env.LEMON_SQUEEZY_API_KEY,
      LEMON_SQUEEZY_WEBHOOK_SECRET: process.env.LEMON_SQUEEZY_WEBHOOK_SECRET,
    },
  });
