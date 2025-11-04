import express from 'express';
import protect from '../middlewares/authMiddleware.js';
import { createIdea } from '../controllers/ideaController.js';

const router = express.Router();

router.post('/create', protect, createIdea);

export default router;