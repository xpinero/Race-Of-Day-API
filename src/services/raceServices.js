const { v4: uuid } = require("uuid");

const Race = require("../database/Race");

const getAllRaces = () => {
  const allRaces = Race.getAllRaces();
  return allRaces;
};

const getOneRace = (raceId) => {
  const race = Race.getOneRace(raceId)
  return race;
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

const updateOneRace = (raceId, changes) => {
  const updatedRace = Race.updateOneRace(raceId, changes);
  return updatedRace;
};

const deleteOneRace = (raceId) => {
  Race.deleteOneRace(raceId);
};

module.exports = {
  getAllRaces,
  getOneRace,
  createNewRace,
  updateOneRace,
  deleteOneRace
};