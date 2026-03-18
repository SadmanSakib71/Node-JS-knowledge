const fs = require("node:fs");

const OurReadSystem = fs.createReadStream(`${__dirname}/sakib.txt`);
const OurWriteSystem = fs.createWriteStream(`${__dirname}/Output.txt`);

OurReadSystem.on("data", (chunk) => {
  OurWriteSystem.write(chunk);
});
