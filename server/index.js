import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Setup
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Enquiry Schema
const enquirySchema = new mongoose.Schema({
    name: String,
    location: String,
    email: String,
    mobile: String,
    quantity500ml: String,
    quantity1L: String,
    consent: Boolean,
    created_at: { type: Date, default: Date.now }
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);

// Routes
app.post('/api/enquiry', async (req, res) => {
    try {
        const { name, location, email, mobile, quantity500ml, quantity1L, consent } = req.body;
        
        const newEnquiry = new Enquiry({
            name,
            location,
            email,
            mobile,
            quantity500ml,
            quantity1L,
            consent
        });

        await newEnquiry.save();
        
        res.json({ 
            success: true, 
            message: 'Enquiry saved to MongoDB successfully' 
        });
    } catch (err) {
        console.error('Database Error:', err.message);
        res.status(500).json({ success: false, error: err.message });
    }
});

// Fetch all enquiries
app.get('/api/enquiries', async (req, res) => {
    try {
        const enquiries = await Enquiry.find().sort({ created_at: -1 });
        res.json({ success: true, data: enquiries });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
