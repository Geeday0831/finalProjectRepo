const express = require('express'); /* imported express */
const dotenv = require('dotenv'); /* imported dotenv */
const cors = require('cors'); /* imported cors */
const connectDB = require('./config/db');  /* imported my database */
const authRoutes = require('./routes/authRoutes'); /* imported my auth routes */
const protect = require('./middleware/authMiddleware');
const favoritesRoutes = require('./routes/favoritesRoutes');
const tmdbRoutes = require('./routes/tmdbRoutes');


/* call the functions for connecting my database */

dotenv.config();
connectDB();


/* starting my express app */

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes); /* using my auth routes */
app.use('/api/favorites', favoritesRoutes);
app.use('/api/movies', tmdbRoutes);

/* using my middleware */




/* starting route */
app.get('/', (req, res) =>{ 
    res.send('api is running');
})

app.get('/api/user/me', protect, (req, res) => {
  res.json({ msg: 'Access granted', userId: req.user.id });
});


/* starting server */

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`server is running on ${PORT}`));