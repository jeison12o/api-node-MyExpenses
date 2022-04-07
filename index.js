const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes/api");

const app = express();

require("./database/db");
require("./models/BuyModel");

//settings
app.set("port", process.env.PORT || 3001);
app.use(cors());
app.use(express.json());

//routes
app.use("/api", apiRouter);

app.listen(app.get("port"), () => {
  console.log("server listening ... port:" + app.get("port"));
});
