// const add = require("./functions");
// console.log(add(5, 4));
const http = require("http");
const axios = require("axios");
//const currenciesData = require("./currencies.json");

const server = http.createServer(async (req, res) => {
  switch (req.url) {
    case "/":
      res
        .writeHead(200, { "Content-Type": "application/html" })
        .end("<h1>Currency Database</h1>");
      break;
    case "/currencies":
      const response = await axios.get(
        "https://api.coinbase.com/v2/currencies"
      );
      res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(response.data));
      break;
    default:
      res
        .writeHead(404, { "Content-Type": "application/json" })
        .end(JSON.stringify({ message: "Path not found" }));
  }
  //   const serverInfo = {
  //     serverName: "Crio Server",
  //     version: "1.0.0",
  //     currentDate: new Date().toDateString(),
  //     currentTime: new Date().toTimeString(),
  //   };
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.write(JSON.stringify(serverInfo));
  //   res.end();
});

const PORT = 8083;

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
