import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import ideaRoutes from './routes/ideaRoutes.js';

dotenv.config();
const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://ideabridge-in.vercel.app/",
];
  
// Middleware
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(express.json());

// Connect DB
connectDB();


// Routes
app.get('/', (req, res) => {
  res.send('IdeaBridge API is running...');
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use('/api/users', userRoutes);
app.use('/api/ideas', ideaRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
