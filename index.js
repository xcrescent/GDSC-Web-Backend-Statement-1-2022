const express = require("express");
const app = express();
const initRoutes = require("./routes/web");
// const myParser = require("body-parser")
// app.use(myParser.urlencoded({extended : true}));
app.use(express.urlencoded({ extended: true }));

initRoutes(app);

let port = 3000;
app.listen(port, () => {
  console.log(`To DO List Port:${port}`);
});