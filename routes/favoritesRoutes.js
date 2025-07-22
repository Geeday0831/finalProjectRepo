const express = require('express');
const protect = require('../middleware/authMiddleware');
const {
  addFavorite,
  getFavorites,
  removeFavorite,
} = require('../controllers/favoritesController');

const router = express.Router();

router.post('/', protect, addFavorite);
router.get('/', protect, getFavorites);
router.delete('/:id', protect, removeFavorite);

module.exports = router;
