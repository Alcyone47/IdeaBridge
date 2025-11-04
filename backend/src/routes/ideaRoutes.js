import express from 'express';
import protect from '../middlewares/authMiddleware.js';
import { createIdea, getMyIdeas } from '../controllers/ideaController.js';

const router = express.Router();

router.get('/myideas', protect, getMyIdeas);
router.post('/create', protect, createIdea);

export default router;