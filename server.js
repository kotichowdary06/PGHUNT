require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models'); // We will create this file next

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// --- Connect all the models ---
// This requires a new file: models/index.js
// We'll create it in the next step.

// --- API Routes ---
app.use('/api/auth', require('./routes/auth.routes'));

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});