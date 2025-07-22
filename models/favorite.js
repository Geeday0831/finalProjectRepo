const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  movieId: String,
  title: String,
  posterPath: String,
  releaseDate: String,
}, { timestamps: true });

module.exports = mongoose.model('Favorite', FavoriteSchema);
