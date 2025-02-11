import { keys } from './keys';
import { lemonSqueezySetup } from '@lemonsqueezy/lemonsqueezy.js';
import 'server-only';

lemonSqueezySetup({
  apiKey: keys().LEMON_SQUEEZY_API_KEY,
  onError: (error) => console.error('Error!', error),
});

export * from '@lemonsqueezy/lemonsqueezy.js';
