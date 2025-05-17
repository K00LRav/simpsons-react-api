// Springfield Speaks Analytics Helper
import { track, inject } from '@vercel/analytics';

// Initialize analytics
export const initAnalytics = () => {
  inject();
};

// Track pageviews
export const trackPageView = (pageName) => {
  track('page_view', { 
    page: pageName,
    site: 'Springfield Speaks',
    timestamp: new Date().toISOString()
  });
};

// Track search events
export const trackSearch = (query, resultsCount) => {
  track('search', { 
    query,
    resultsCount,
    timestamp: new Date().toISOString()
  });
};

// Track character interactions
export const trackCharacterInteraction = (character, action) => {
  track('character_interaction', { 
    character,
    action,
    timestamp: new Date().toISOString()
  });
};

// Track API calls
export const trackApiCall = (endpoint, status, duration) => {
  track('api_call', { 
    endpoint,
    status,
    duration,
    timestamp: new Date().toISOString()
  });
};

// Track errors
export const trackError = (errorType, message, source) => {
  track('error', { 
    errorType,
    message,
    source,
    timestamp: new Date().toISOString()
  });
};

// General event tracking
export const trackEvent = (eventName, eventData) => {
  track(eventName, { 
    ...eventData,
    timestamp: new Date().toISOString()
  });
};

export default {
  initAnalytics,
  trackPageView,
  trackSearch,
  trackCharacterInteraction,
  trackApiCall,
  trackError,
  trackEvent
};
