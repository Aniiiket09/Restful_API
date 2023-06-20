const express = require("express");
const port = 9000;
const db = require("./config/mongoose");
const app = express();

//redirecting routes
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("error");
    return;
  }

  console.log(`server is running on ${port}`);
});
