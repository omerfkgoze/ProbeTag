const express = require('express');
// const verifyToken = require('../middlewares/authMiddleware');
const authorizeRoles = require('../middlewares/roleMiddleware');

const router = express.Router();

// Only Admin can access this route
router.get('/admin', authorizeRoles('admin'), (req, res) => {
  res.send({ message: 'Welcome to the admin page' });
});

// Only Users can access this route
router.get('/user', authorizeRoles('admin', 'user'), (req, res) => {
  res.send({ message: 'Welcome to the user page' });
});

module.exports = router;
