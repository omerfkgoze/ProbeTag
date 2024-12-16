const express = require('express');
const dotenv = require('dotenv').config();
const dbConnect = require('./config/dbConnect');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const roomRoutes = require('./routes/roomRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

// Connect to the database
dbConnect();

const app = express();

// Middleware
app.use(express.json());

//Routes
app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
app.use('/api/users', authMiddleware, userRoutes);
app.use('/api/rooms', roomRoutes);

// Start the server
const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
