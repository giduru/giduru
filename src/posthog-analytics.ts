import posthog from 'posthog-js';
import siteConfig from '@generated/docusaurus.config';

const { POSTHOG_HOST, POSTHOG_PROJECT_TOKEN } = (siteConfig.customFields ?? {}) as {
  POSTHOG_HOST?: string;
  POSTHOG_PROJECT_TOKEN?: string;
};

if (typeof window !== 'undefined') {
  const posthogConfigStatus = {
    hasProjectToken: Boolean(POSTHOG_PROJECT_TOKEN),
    hasHost: Boolean(POSTHOG_HOST),
    host: POSTHOG_HOST || '(missing)',
    projectTokenLength: POSTHOG_PROJECT_TOKEN?.length ?? 0,
  };

  console.info('[giduru] PostHog config', posthogConfigStatus);

  if (POSTHOG_PROJECT_TOKEN && POSTHOG_HOST) {
    posthog.init(POSTHOG_PROJECT_TOKEN, {
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
