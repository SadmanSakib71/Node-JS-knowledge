const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const myReadStream = fs.createReadStream(`${__dirname}/sakib.txt`, "utf8");
  myReadStream.pipe(res);
});

server.listen(3000);
