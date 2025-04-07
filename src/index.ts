import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db'
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use('/', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});