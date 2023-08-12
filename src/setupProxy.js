const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/proxy',
    createProxyMiddleware({
      target: 'https://chickletboost.com',
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        console.log('Proxy request:', req.url);
      },
    })
  );
};
