const { createProxyMiddleware } = require('http-proxy-middleware');

module.export = (app) => {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:8080',
      changeOrigin: true
    })
  );
};
