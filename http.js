const http = require("node:http");

const server = http.createServer((req, res) => {
  res.write("Hey who are you ");
  res.write("My Name is sakib");
  res.end();
});

server.listen(3000);

console.log("Run on 3000 port");
