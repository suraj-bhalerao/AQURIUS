
import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Setup
const dbPath = path.resolve(__dirname, 'enquiries.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
        db.run(`CREATE TABLE IF NOT EXISTS enquiries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            location TEXT,
            email TEXT,
            mobile TEXT,
            quantity500ml TEXT,
            quantity1L TEXT,
            consent INTEGER,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
            if (err) {
                console.error('Error creating table:', err.message);
            }
        });
    }
});

// Routes
app.post('/api/enquiry', (req, res) => {
    const { name, location, email, mobile, quantity500ml, quantity1L, consent } = req.body;
    
    const sql = `INSERT INTO enquiries (name, location, email, mobile, quantity500ml, quantity1L, consent) 
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const params = [name, location, email, mobile, quantity500ml, quantity1L, consent ? 1 : 0];

    db.run(sql, params, function(err) {
        if (err) {
            console.error('Database Error:', err.message);
            return res.status(500).json({ success: false, error: err.message });
        }
        res.json({ 
            success: true, 
            id: this.lastID,
            message: 'Enquiry saved to database successfully' 
        });
    });
});

// Fetch all enquiries
app.get('/api/enquiries', (req, res) => {
    db.all("SELECT * FROM enquiries ORDER BY created_at DESC", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ success: false, error: err.message });
        }
        res.json({ success: true, data: rows });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
