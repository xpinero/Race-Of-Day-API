const express = require("express");
const raceController = require("../../controllers/raceController");
const recordController = require("../../controllers/recordController");
const router = express.Router();

router.get("/", raceController.getAllRaces);

router.get("/:raceId", raceController.getOneRace);

router.get("/:raceId/records", recordController.getRecordForRace)

router.post("/", raceController.createNewRace);

router.patch("/:raceId", raceController.updateOneRace);

router.delete("/:raceId", raceController.deleteOneRace);

module.exports = router;