const recordService = require("../services/recordService");

const getRecordForRace = (req, res) => {
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
    const race = recordService.getRecordForRace(raceId);
    res.send({ status: "OK", data: race });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

// const getRecordForRace = (req, res) => {
//   const {
//     params: { recordId },
//   } = req;
//   if (!recordId) {
//     res
//       .status(400)
//       .send({
//         status: "FAILED",
//         data: { error: "Parameter ':recordId' can not be empty" },
//       });
//   }
//   try {
//     const record = recordService.getRecordForRace(recordId);
//     res.send({ status: "OK", data: record });
//   } catch (error) {
//     res
//       .status(error?.status || 500)
//       .send({ status: "FAILED", data: { error: error?.message || error } });
//   }
// };

// const getOneRecord = (req, res) => {
//   const {
//     params: { recordId },
//   } = req;
//   if (!recordId) {
//     res
//       .status(400)
//       .send({
//         status: "FAILED",
//         data: { error: "Parameter ':recordId' can not be empty" },
//       });
//   }
//   try {
//     const record = recordService.getOneRecord(recordId);
//     res.send({ status: "OK", data: record });
//   } catch (error) {
//     res
//       .status(error?.status || 500)
//       .send({ status: "FAILED", data: { error: error?.message || error } });
//   }
// };

module.exports = {
  getRecordForRace
  // getOneRecord
};