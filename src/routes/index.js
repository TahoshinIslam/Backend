import { Router } from 'express';
import { getRoot, postRoot } from '../controllers/baseController.js';

const router = Router();

// GET / → "I am get request."
router.get('/', getRoot);

// POST / → "I am post request."
router.post('/', postRoot);

export default router;