const Race = require("../database/Race");

const getAllRaces = () => {
  const allRaces = Race.getAllRaces();
  return allRaces;
};

const getOneRace = () => {
  return;
};

const createNewRace = () => { 
  return;
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