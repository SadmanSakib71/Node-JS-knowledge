const fs = require("node:fs");

fs.readFile("sakib.txt", (err, data) => {
  console.log(data.toString());
});
