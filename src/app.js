import express from 'express';
import router from './routes/index.js';

const app = express();

// Middlewares (JSON parsing etc.)
app.use(express.json());

// Routes
app.use('/', router);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

export default app;