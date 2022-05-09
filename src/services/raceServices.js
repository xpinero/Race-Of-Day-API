const { v4: uuid } = require("uuid");

const Race = require("../database/Race");

const getAllRaces = () => {
  const allRaces = Race.getAllRaces();
  return allRaces
  //return DB.races;
};

const getOneRace = () => {
  return;
};

const createNewRace = (newRace) => {
  const raceToInsert = {
    ...newRace,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  const createdRace = Race.createNewRace(raceToInsert); 
  return createdRace;
};

const updateOneRace = () => {
  return;
};

const deleteOneRace = () => {
  return;
};

module.exports = {
  getAllRaces,
  getOneRace,
  createNewRace,
  updateOneRace,
  deleteOneRace
};