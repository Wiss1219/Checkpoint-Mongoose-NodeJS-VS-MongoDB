require('dotenv').config();
const connectDB = require('./config/db');
const personController = require('./controllers/personController');

// Connect to database
connectDB().catch(console.error);
