const raceService = require("../services/raceServices");

const getAllRaces = (req, res) => {
  const allRaces = raceService.getAllRaces();
  res.send({status: "A-OK", data: allRaces});
};

const getOneRace = (req, res) => {
  const race = raceService.getOneRace();
  res.send("Get an existing race");
};

const createNewRace = (req, res) => {
  const { body } = req;
  if(
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body. exercises ||
    !body.trainerTips
  ) {
    return;
  }
  const newRace = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  }
  const createdRace = raceService.createNewRace(newRace);
  res.status(201).send({ status: "not -OK", data: createdRace });
};

const updateOneRace = (req, res) => {
  const updateRace = raceService.updateOneRace();
  res.send("Update an existing race");
};

const deleteOneRace = (req, res) => {
  raceService.deleteOneRace();
  res.send("Delete an existing race");
};

module.exports = {
  getAllRaces,
  getOneRace,
  createNewRace,
  updateOneRace,
  deleteOneRace,
};