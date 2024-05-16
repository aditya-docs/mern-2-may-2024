const verifyAuth = (req, res, next) => {
  if (req.headers.authorization === process.env.PASSWORD) return next();
  res.status(403).json({ message: "Unauthorized Request" });
};

module.exports = verifyAuth;
