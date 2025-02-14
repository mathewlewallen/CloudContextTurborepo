import { LemonSqueezyAgentToolkit } from '@lemonsqueezy/agent-toolkit/ai-sdk';
import { keys } from './keys';

export const paymentsAgentToolkit = new StripeAgentToolkit({
  secretKey: keys().LEMON_SQUEEZY_API_KEY,
  configuration: {
    actions: {
      paymentLinks: {
        create: true,
      },
      products: {
        create: true,
      },
      prices: {
        create: true,
      },
    },
  },
});
