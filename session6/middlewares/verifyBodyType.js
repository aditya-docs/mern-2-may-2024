const verifyBodyType = (req, res, next) => {
  if (req.headers["content-type"] !== "application/json")
    return res.status(415).send({ message: "Please send a JSON payload." });
  next();
};

module.exports = verifyBodyType;
