const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

router.get('/search', async (req, res) => {
  const { query } = req.query;

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`
    );
    res.json(response.data.results);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch movies' });
  }
});

module.exports = router;
