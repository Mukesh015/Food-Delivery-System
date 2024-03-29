const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });

const secretKey = process.env.JWT_SECRET;
const expire = process.env.JWT_EXPIRES_IN;

const signToken = (userId) => {
  return jwt.sign({ email: userId,expiresIn: expire }, secretKey,);
};

const createAndSendToken = (user, statusCode, res) => {
  const token = signToken(user.email);
  if (user.password) user.password = undefined;
  const cookieOptions = {
    expires: new Date(
      Date.now() + expire * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  cookieOptions.secure = true;
  res.cookie('cookie-1', token, cookieOptions);
  res.status(statusCode).json({
    status: 'success',
    token,
  });
};


async function verifyToken(req, res, next) {
  const token = req.headers['cookie-1'];

  if (!token) {
      return res.status(403).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, secretKey, (err, user) => {
      if (err) {
          return res.status(401).json({ error: 'Invalid token' });
      }
      else{
        res.status(200);
      }
      req.user = user;
      next();
  });
}

  module.exports = { createAndSendToken,verifyToken };