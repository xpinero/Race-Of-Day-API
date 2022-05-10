const Record = require("../database/Record");

const getRecordForRace = (raceId) => {
  try {
    const record = Record.getRecordForRace(raceId);
    return record;
  } catch (error) {
    throw error;
  }
};
module.exports = { getRecordForRace };