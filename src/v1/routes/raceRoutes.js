const express = require("express");
const raceController = require("../../controllers/raceController");
const router = express.Router();

router.get("/", raceController.getAllRaces);

router.get("/:raceId", raceController.getOneRace);

router.post("/", raceController.createNewRace);

router.patch("/:raceId", raceController.updateOneRace);

router.delete("/:raceId", raceController.deleteOneRace);

module.exports = router;
// router.get("/", (req, res) => {
//   res.send("Get all races");
// });

// router.get("/:raceId", (req, res) => {
//   res.send("Get an existing race");
// });

// router.post("/", (req, res) => {
//   res.send("Create a new race");
// });

// router.patch("/:raceId", (req, res) => {
//   res.send("Update an existing race");
// });

// router.delete("/:raceId", (req, res) => {
//   res.send("Delete an existing race");
// });

