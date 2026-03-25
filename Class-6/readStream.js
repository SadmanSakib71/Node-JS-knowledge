const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html><head><title>Form</title></head>");
    res.write(
      '<body><form method="POST" action="/about"><input name="username"/></form></body>',
    );
    res.end();
  } else if (req.url === "/about" && req.method === "POST") {
    const allData = [];

    req.on("data", (chunk) => {
      allData.push(chunk);
    });

    req.on("end", () => {
      const RealText = Buffer.concat(allData).toString();
      console.log(RealText);

      res.write(`${RealText}`);
      res.end();
    });
  } else {
    res.write("nothing");
    res.end();
  }
});

server.listen(3000);
