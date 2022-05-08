const getAllRaces = (req, res) => {
  res.send("Get all workouts");
};

const getOneRace = (req, res) => {
  res.send("Get an existing race");
};

const createNewRace = (req, res) => {
  res.send("Create a new race");
};

const updateOneRace = (req, res) => {
  res.send("Update an existing workout");
};

const deleteOneRace = (req, res) => {
  res.send("Delete an existing workout");
};

module.exports = {
  getAllRaces,
  getOneRace,
  createNewRace,
  updateOneRace,
  deleteOneRace,
};