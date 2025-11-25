import express from 'express';
import protect from '../middlewares/authMiddleware.js';
import { createIdea, getAllIdeas, getMyIdeas } from '../controllers/ideaController.js';
import upload from '../middlewares/uploadMiddleware.js';
import verifyInvestor from '../middlewares/verifyInvestorMiddleware.js';

const router = express.Router();

router.get('/myideas', protect, getMyIdeas);

router.post("/create", protect, upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "pitchDeck", maxCount: 1 },
  ]), createIdea);

router.post('/create', protect, createIdea);

router.get('/all', protect, verifyInvestor, getAllIdeas);

export default router;