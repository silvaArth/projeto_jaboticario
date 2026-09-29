const http = require('http');
const fs = require('fs');
const path = require('path');

// Carregar arquivo .env localmente caso exista (sem dependências externas)
function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#')) continue;
      const eqIdx = line.indexOf('=');
      if (eqIdx !== -1) {
        const key = line.slice(0, eqIdx).trim();
        let val = line.slice(eqIdx + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}

loadEnv();

const PORT = parseInt(process.env.PORT, 10) || 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.csv': 'text/csv; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = parsedUrl.pathname;

  // Endpoint do servidor para injeção de variáveis de ambiente (idêntico à Vercel)
  if (pathname === '/api/env.js') {
    const url = process.env.SUPABASE_URL || '';
    const key = process.env.SUPABASE_ANON_KEY || '';
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store, max-age=0');
    res.statusCode = 200;
    return res.end(`window.ENV = window.ENV || {}; window.ENV.SUPABASE_URL = "${url}"; window.ENV.SUPABASE_ANON_KEY = "${key}";`);
  }

  // Roteamento de arquivos estáticos
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }

  const safePath = path.normalize(path.join(PUBLIC_DIR, decodeURIComponent(pathname)));

  // Proteção contra Directory Traversal
  if (!safePath.startsWith(PUBLIC_DIR)) {
    res.statusCode = 403;
    return res.end('403 Forbidden');
  }

  fs.stat(safePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Se não for encontrado, tentar index.html (SPA fallback)
      const indexPath = path.join(PUBLIC_DIR, 'index.html');
      if (fs.existsSync(indexPath)) {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.statusCode = 200;
        return fs.createReadStream(indexPath).pipe(res);
      }
      res.statusCode = 404;
      return res.end('404 Not Found');
    }

    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.setHeader('Content-Type', contentType);
    res.statusCode = 200;
    fs.createReadStream(safePath).pipe(res);
  });
});

server.listen(PORT, () => {
  const supaUrl = process.env.SUPABASE_URL ? 'Configurada (' + process.env.SUPABASE_URL + ')' : 'Não configurada (configure no .env)';
  const supaKey = process.env.SUPABASE_ANON_KEY ? 'Configurada' : 'Não configurada (configure no .env)';

  console.log('\n======================================================');
  console.log('📦 PULMÃO DE CAIXAS BOTICÁRIO - SERVIDOR LOCAL');
  console.log('======================================================');
  console.log(`🌐 Aplicação:     http://localhost:${PORT}`);
  console.log(`☁️ Supabase URL:  ${supaUrl}`);
  console.log(`🔑 Anon Key:      ${supaKey}`);
  console.log('======================================================');
  console.log('Pressione Ctrl+C para encerrar o servidor.\n');
});
