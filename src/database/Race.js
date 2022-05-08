const DB = require("./db.json");

const getAllRaces = () => {
  return DB.races
};

module.exports = { getAllRaces };