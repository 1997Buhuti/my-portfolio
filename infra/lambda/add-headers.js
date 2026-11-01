'use strict';

exports.handler = (event, context, callback) => {
  const response = event.Records[0].cf.response;
  const headers = response.headers;

  // Security headers
  headers['strict-transport-security'] = [{
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  }];

  headers['x-content-type-options'] = [{
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }];

  headers['x-frame-options'] = [{
    key: 'X-Frame-Options',
    value: 'DENY'
  }];

  headers['x-xss-protection'] = [{
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  }];

  headers['referrer-policy'] = [{
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  }];

  // Cache control for static assets
  const request = event.Records[0].cf.request;
  const uri = request.uri.toLowerCase();
  
  if (uri.endsWith('.html') || uri.endsWith('.json')) {
    headers['cache-control'] = [{
      key: 'Cache-Control',
      value: 'public, max-age=0, must-revalidate'
    }];
  } else if (uri.endsWith('.js') || uri.endsWith('.css') || uri.endsWith('.map')) {
    headers['cache-control'] = [{
      key: 'Cache-Control',
      value: 'public, max-age=31536000, immutable'
    }];
  } else if (uri.endsWith('.woff') || uri.endsWith('.woff2') || uri.endsWith('.ttf')) {
    headers['cache-control'] = [{
      key: 'Cache-Control',
      value: 'public, max-age=31536000, immutable'
    }];
  } else if (uri.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/)) {
    headers['cache-control'] = [{
      key: 'Cache-Control',
      value: 'public, max-age=604800, stale-while-revalidate=86400'
    }];
  }

  callback(null, response);
};