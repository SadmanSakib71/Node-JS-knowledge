const fs = require("node:fs");

const OurReadSystem = fs.createReadStream(`${__dirname}/sakib.txt`);

OurReadSystem.on("data", (data) => {
  console.log(data.toString());
});
