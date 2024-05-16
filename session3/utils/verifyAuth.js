const verifyAuth = (authorization) => {
  if (authorization === process.env.PASSWORD) return true;
  return false;
};

module.exports = verifyAuth;
