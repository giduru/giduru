import posthog from 'posthog-js';
import siteConfig from '@generated/docusaurus.config';

const { POSTHOG_HOST, POSTHOG_PROJECT_TOKEN } = (siteConfig.customFields ?? {}) as {
  POSTHOG_HOST?: string;
  POSTHOG_PROJECT_TOKEN?: string;
};

if (typeof window !== 'undefined') {
  if (POSTHOG_PROJECT_TOKEN && POSTHOG_HOST) {
    posthog.init(POSTHOG_PROJECT_TOKEN, {
      api_host: POSTHOG_HOST,
      capture_pageview: true,
      capture_pageleave: true,
      capture_exceptions: true,
    });
  }
}

export { posthog };
