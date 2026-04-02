import posthog from 'posthog-js';
import siteConfig from '@generated/docusaurus.config';

const { POSTHOG_API_KEY, POSTHOG_HOST } = (siteConfig.customFields ?? {}) as {
  POSTHOG_API_KEY?: string;
  POSTHOG_HOST?: string;
};

if (typeof window !== 'undefined') {
  const posthogConfigStatus = {
    apiKeyLength: POSTHOG_API_KEY?.length ?? 0,
    hasApiKey: Boolean(POSTHOG_API_KEY),
    hasHost: Boolean(POSTHOG_HOST),
    host: POSTHOG_HOST || '(missing)',
  };

  console.info('[giduru] PostHog config', posthogConfigStatus);

  if (POSTHOG_API_KEY && POSTHOG_HOST) {
    posthog.init(POSTHOG_API_KEY, {
      api_host: POSTHOG_HOST,
      capture_pageview: true,
      capture_pageleave: true,
      capture_exceptions: true,
    });

    console.info('[giduru] PostHog initialized');
  } else {
    console.warn('[giduru] PostHog disabled: missing config');
  }
}

export { posthog };
