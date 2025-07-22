const Favorite = require('../models/Favorite');

const addFavorite = async (req, res) => {
  const { movieId, title, posterPath, releaseDate } = req.body;
  try {
    const newFav = await Favorite.create({
      userId: req.user.id,
      movieId,
      title,
      posterPath,
      releaseDate,
    });
    res.status(201).json(newFav);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to add favorite' });
  }
};

const getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({ userId: req.user.id });
    res.json(favorites);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch favorites' });
  }
};

const removeFavorite = async (req, res) => {
  try {
    await Favorite.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Favorite removed' });
  } catch (err) {
    res.status(500).json({ msg: 'Delete failed' });
  }
};

module.exports = { addFavorite, getFavorites, removeFavorite };
