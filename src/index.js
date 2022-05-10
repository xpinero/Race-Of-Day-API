const express = require("express");
const bodyParser = require("body-parser");
const v1RaceRouter = require("./v1/routes/raceRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/v1/races", v1RaceRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});