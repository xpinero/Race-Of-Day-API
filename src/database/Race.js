const DB = require("./db.json");

const { saveToDatabase } = require("./utils");

const getAllRaces = () => {
  return DB.races;
};

const getOneRace = (raceId) => {
  const race = DB.races.find((race) => race.id === raceId);
  if (!race) {
    return;
  }
  return race;
};

const createNewRace = (newRace) => {
  const isAlreadyAdded =
    DB.races.findIndex((race) => race.name === newRace.name) > -1;
  if (isAlreadyAdded) {
    throw {
      status: 400,
      message: `Race with the name '${newRace.name}' already exists`,
    };
  }
  try {
    DB.races.push(newRace);
    saveToDatabase(DB);
    return newRace;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};
  
const updateOneRace = (raceId, changes) => {
  const indexForUpdate = DB.races.findIndex(
    (race) => race.id === raceId
  );
  if (indexForUpdate === -1) {
    return;
  }
  const updatedRace = {
    ...DB.races[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC"}),
  };
  DB.races[indexForUpdate] = updatedRace;
  saveToDatabase(DB);
  return updatedRace;
};

const deleteOneRace = (raceId) => {
  const indexForDeletion = DB.races.findIndex(
    (race) => race.id === raceId 
  );
  if (indexForDeletion === -1) {
    return;
  }
  DB.races.splice(indexForDeletion, 1);
  saveToDatabase(DB);
};

module.exports = { 
  getAllRaces,
  getOneRace,
  createNewRace,
  updateOneRace,
  deleteOneRace
};