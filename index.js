const School = require("./people");

const schoolNew = new School();

schoolNew.on("bellRing", (sakib) => {
  console.log(`we need to run4 ${sakib}`);
});

schoolNew.startPeriod();
