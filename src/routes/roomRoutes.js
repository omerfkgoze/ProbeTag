const express = require('express');
const router = express.Router();
const authorizeRoles = require('../middlewares/roleMiddleware');
const {
  getAllRooms,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom,
} = require('../controllers/roomController');

const authMiddleware = require('../middlewares/authMiddleware');

// router.use(authMiddleware);

router
  .route('/')
  .get(authorizeRoles('admin', 'user'), getAllRooms)
  .post(authorizeRoles('admin'), createRoom);

router
  .route('/:id')
  .get(authorizeRoles('admin', 'user'), getRoom)
  .put(authorizeRoles('admin'), updateRoom)
  .delete(authorizeRoles('admin'), deleteRoom);

module.exports = router;
