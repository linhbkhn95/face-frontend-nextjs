const express = require('express');
const next = require('next');
var favicon = require('serve-favicon')
var path = require('path')
const routes = require('./routes')
const apiBase = 'http://localhost:1337'
const devProxy = {
  '/api': {
    target: apiBase,
    pathRewrite: {
      '^/': '/'
    },
    changeOrigin: true
  },
  '/descriptor': {
    target: apiBase,
    pathRewrite: {
      '^/': '/'
    },
    changeOrigin: true
  },

  '/oauth': {
    target: apiBase,
    pathRewrite: {
      '^/': '/'
    },
    changeOrigin: true
  }
}
const PORT = process.env.PORT || 3200;
const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dir: './',
  dev
});
const handler = routes.getRequestHandler(app)

app
  .prepare()
  .then(() => {
    const server = express();
    // server.use(favicon(path.join(__dirname, '../static', 'favicon.ico')))

    // Set up the proxy.
    if (dev && devProxy) {
      const proxyMiddleware = require('http-proxy-middleware')
      Object.keys(devProxy).forEach(function (context) {
        server.use(proxyMiddleware(context, devProxy[context]))
      })
    }
    server.get('*', (req, res) => handler(req, res));
    // server.get('/favicon.ico', (req, res) => (
    //   res.status(200).sendFile('favicon.ico', {
    //     root: __dirname + '/assets/'
    //   })
    // ));
    server.post('/check-healthy', (req, res) => {
      res.send('ok');
    })
    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });