const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hey who are you ");
    res.write("My Name is sakib");
    res.end();
  } else if (req.url === "/about") {
    res.write("This is about us page");
    res.end();
  } else {
    res.write("nothing");
    res.end();
  }
});

server.listen(3000);

console.log("Run on 3000 port");
