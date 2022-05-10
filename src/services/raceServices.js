const { v4: uuid } = require("uuid");
const Race = require("../database/Race");

const getAllRaces = () => {
  try {
    const allRaces = Race.getAllRaces();
    return allRaces;
  } catch (error) {
    throw error;
  }
};

const getOneRace = (raceId) => {
  try {
    const race = Race.getOneRace(raceId)
    return race;
  } catch (error) {
    throw error;
  }
};

const createNewRace = (newRace) => {
  const raceToInsert = {
    ...newRace,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const createdRace = Race.createNewRace(raceToInsert);
    return createdRace;
  } catch (error) {
    throw error;
  }
};

const updateOneRace = (raceId, changes) => {
  try {
    const updatedRace = Race.updateOneRace(raceId, changes);
    return updatedRace;
  } catch (error) {
    throw error;
  }
};

const deleteOneRace = (raceId) => {
  try {
    Race.deleteOneRace(raceId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllRaces,
  getOneRace,
  createNewRace,
  updateOneRace,
  deleteOneRace
};