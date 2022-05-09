const raceService = require("../services/raceServices");

const getAllRaces = (req, res) => {
  try {
    const allRaces = raceService.getAllRaces();
    res.send({status: "OK", data: allRaces});
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneRace = (req, res) => {
  const {
    params: { raceId },
  } = req;
  if (!raceId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':raceId' can not be empty" },
      });
  }
  try {
    const race = raceService.getOneRace(raceId);
    res.send({ status: "OK", data: race });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
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
  };
  try {
    const createdRace = raceService.createNewRace(newRace);
    res.status(201).send({ status: "OK", data: createdRace });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneRace = (req, res) => {
  const {
    body,
    params: { raceId },
  } = req;
  if (!raceId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':raceId' can not be empty" },
      });
  }
  try {
    const updatedRace = raceService.updateOneRace(raceId, body);
    res.send({ status: "OK", data: updatedRace });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneRace = (req, res) => {
  const {
    params: { raceId },
  } = req;
  if (!raceId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':raceId' can not be empty" },
      });
  }
  try {
    raceService.deleteOneRace(raceId);
     res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllRaces,
  getOneRace,
  createNewRace,
  updateOneRace,
  deleteOneRace,
};