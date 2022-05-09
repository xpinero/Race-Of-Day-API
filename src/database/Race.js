const DB = require("./db.json");

const { saveToDatabase } = require("./utils");

const getAllRaces = () => {
  return DB.races;
};

const createNewRace = (newRace) => {
  const isAlreadyAdded =
    DB.races.findIndex((race) => race.name === newRace.name) > -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.races.push(newRace);
  saveToDatabase(DB);
  return newRace;
};

module.exports = { 
  getAllRaces,
  createNewRace,
};