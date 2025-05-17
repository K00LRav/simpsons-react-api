// Springfield Speaks Vercel Analytics Configuration

export const analyticsConfig = {
  // Whether to collect anonymous analytics on your visitors
  enabled: true,

  // Whether to collect and send the visitor's IP address
  debugMode: process.env.NODE_ENV === 'development',

  // Mode can be set to 'auto', 'development', or 'production'
  mode: 'auto',

  // Custom project identifier (defaults to Vercel project ID)
  // projectId: 'springfield-speaks',

  // Custom domain for analytics endpoint
  // endpoint: 'https://analytics.springfieldspeaks.com',
  
  // Custom cookie domain
  // cookieDomain: 'springfieldspeaks.com',
  
  // Custom localization for analytics
  defaultLocale: 'en-US',
  
  // Override user agent parsing
  uaOverrides: {
    botPredicate: (ua) => /bot|crawler|spider|crawling/i.test(ua),
  },
};

export default analyticsConfig;
