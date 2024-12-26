const next = require('next');
const { createServer } = require('http');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

createServer((req, res) => {
    // Aqui você pode adicionar lógica personalizada para lidar com as requisições
    // Por exemplo, para redirecionar uma rota específica:
    if (req.url === '/custom-route') {
      res.writeHead(302, { Location: '/new-page' });
      res.end();
    } else {
      return handle(req, res);
    }
  })
  .listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });