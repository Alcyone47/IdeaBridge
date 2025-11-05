import express from 'express';
import protect from '../middlewares/authMiddleware.js';
import { createIdea, getMyIdeas } from '../controllers/ideaController.js';
import upload from '../middlewares/uploadMiddleware.js';

const router = express.Router();

router.get('/myideas', protect, getMyIdeas);

router.post("/create", protect, upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "pitchDeck", maxCount: 1 },
  ]), createIdea);

router.post('/create', protect, createIdea);

export default router;