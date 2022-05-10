const express = require("express");
const raceController = require("../../controllers/raceController");
const router = express.Router();

router.get("/", raceController.getAllRaces);

router.get("/:raceId", raceController.getOneRace);

router.post("/", raceController.createNewRace);

router.patch("/:raceId", raceController.updateOneRace);

router.delete("/:raceId", raceController.deleteOneRace);

module.exports = router;