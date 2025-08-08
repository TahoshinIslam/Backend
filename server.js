import http from 'http';
import app from './src/app.js';
import { env } from './src/config/env.js';

const server = http.createServer(app);
const PORT = env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});