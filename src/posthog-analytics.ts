import posthog from 'posthog-js';
import siteConfig from '@generated/docusaurus.config';

const { POSTHOG_API_KEY, POSTHOG_HOST } = (siteConfig.customFields ?? {}) as {
  POSTHOG_API_KEY?: string;
  POSTHOG_HOST?: string;
};

if (typeof window !== 'undefined' && POSTHOG_API_KEY && POSTHOG_HOST) {
  posthog.init(POSTHOG_API_KEY, {
    api_host: POSTHOG_HOST,
    capture_pageview: true,
    capture_pageleave: true,
    capture_exceptions: true,
  });
}

export { posthog };
