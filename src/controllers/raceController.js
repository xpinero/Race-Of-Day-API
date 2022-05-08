const raceService = require("../services/raceServices");

const getAllRaces = (req, res) => {
  const allRaces = raceService.getAllRaces();
  res.send("Get all races");
};

const getOneRace = (req, res) => {
  const race = raceService.getOneRace();
  res.send("Get an existing race");
};

const createNewRace = (req, res) => {
  const createdRace = raceService.createNewRace();
  res.send("Create a new race");
};

const updateOneRace = (req, res) => {
  const updateRace = raceService.updateOneRace();
  res.send("Update an existing workout");
};

const deleteOneRace = (req, res) => {
  raceService.deleteOneRace();
  res.send("Delete an existing workout");
};

module.exports = {
  getAllRaces,
  getOneRace,
  createNewRace,
  updateOneRace,
  deleteOneRace,
};