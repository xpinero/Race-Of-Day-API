const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllRaces = () => {
  try {
    return DB.races;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneRace = (raceId) => {
  try {
    const race = DB.races.find((race) => race.id === raceId);
  if (!race) {
    throw {
      status: 400,
      message: `Can not find race with the ID '${raceId}'`,
    };
  }
  return race;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewRace = (newRace) => {
  try {
    const isAlreadyAdded =
      DB.races.findIndex((race) => race.name === newRace.name) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Race with the name '${newRace.name}' already exists`,
      };
    }
    DB.races.push(newRace);
    saveToDatabase(DB);
    return newRace;
    } catch (error) {
      throw { status: 500, message: error?.message || error };
  }
};
  
const updateOneRace = (raceId, changes) => {
  try {
    const isAlreadyAdded =
      DB.races.findIndex((race) => race.name === changes.name) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Race with the name '${changes.name}' already exist`,
      };
    }
    const indexForUpdate = DB.races.findIndex(
      (race) => race.id === raceId
    );
    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can not find race with the ID '${raceId}'`,
      };
    }
    const updatedRace = {
      ...DB.races[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC"}),
    };
    DB.races[indexForUpdate] = updatedRace;
    saveToDatabase(DB);
    return updatedRace;
    } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
    }
  };

const deleteOneRace = (raceId) => {
  try {
    const indexForDeletion = DB.races.findIndex(
    (race) => race.id === raceId 
    );
    if (indexForDeletion === -1) {
      throw {
        status: 400,
        message: `Can not find race with ID '${raceId}'`,
      };
    }
    DB.races.splice(indexForDeletion, 1);
    saveToDatabase(DB);
    } catch (error) {
      throw { status: error?.status || 500, message: error?.message || error };
    }
  };

module.exports = { 
  getAllRaces,
  getOneRace,
  createNewRace,
  updateOneRace,
  deleteOneRace
};