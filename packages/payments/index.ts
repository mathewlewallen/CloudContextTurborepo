import 'server-only';
import { keys } from './keys';
import { env } from '@/env';
import { lemonSqueezySetup } from '@lemonsqueezy/lemonsqueezy.js';

lemonSqueezySetup({
  apiKey,
  onError: (error) => console.error("Error!", error),
});

export * from '@lemonsqueezy/lemonsqueezy.js';

