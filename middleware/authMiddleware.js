const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer')) {
    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // Now `req.user.id` will be available
      next();
    } catch (err) {
      return res.status(401).json({ msg: 'Token is invalid or expired' });
    }
  } else {
    return res.status(401).json({ msg: 'No token provided' });
  }
};

module.exports = protect;
