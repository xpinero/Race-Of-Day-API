const raceService = require("../services/raceServices");

const getAllRaces = (req, res) => {
  const allRaces = raceService.getAllRaces();
  res.send({status: "OK", data: allRaces});
};

const getOneRace = (req, res) => {
  const {
    params: { raceId },
  } = req;
  if (!raceId) {
    return;
  }
  const race = raceService.getOneRace(raceId);
  res.send({ status: "OK", data: race });
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
    res
      .status(400)
      .send({
        status: "FAILED",
        data: {
          error:
          "One of the following keys is missing or is empty in the request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
        },
      });
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
  res.status(201).send({ status: "OK", data: createdRace });
};

const updateOneRace = (req, res) => {
  const {
    body,
    params: { raceId },
  } = req;
  if (!raceId) {
    return;
  }
  const updatedRace = raceService.updateOneRace(raceId, body);
  res.send({ status: "OK", data: updatedRace });
};

const deleteOneRace = (req, res) => {
  const {
    params: { raceId },
  } = req;
  if (!raceId) {
    return;
  }
  raceService.deleteOneRace(raceId);
  res.status(204).send({ status: "OK" });
};

module.exports = {
  getAllRaces,
  getOneRace,
  createNewRace,
  updateOneRace,
  deleteOneRace,
};