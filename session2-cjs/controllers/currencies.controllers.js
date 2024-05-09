const currenciesData = require("../currencies.json");

const getCurrencies = (req, res) => {
  const { min_value: minValue } = req.query;
  if (minValue)
    return res.json(
      currenciesData.data.filter((curr) => curr.min_size === minValue)
    );
  res.json(currenciesData.data);
};

const getCurrencyBySymbol = (req, res) => {
  const reqCurrObj = currenciesData.data.find(
    (curr) => curr.id.toLowerCase() === req.params.symbol
  );
  if (reqCurrObj) return res.json(reqCurrObj);
  res.status(404).send({ message: "Invalid Symbol" });
};

module.exports = { getCurrencies, getCurrencyBySymbol };
