//User crud routes

const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController');
const { admin } = require('../middleware/authMiddleware');

router.route('/').get(admin, getUsers);
router
  .route('/:id')
  .get(admin, getUserById)
  .put(admin, updateUser)
  .delete(admin, deleteUser);

module.exports = router;