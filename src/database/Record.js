const DB = require("./db.json");

const getRecordForRace = (raceId) => {
  try {
    const record = DB.records.filter((record) => record.race === raceId);
    if (!record) {
      throw {
        status: 400,
        message: `Can not find race with the ID '${raceId}'`,
      };
    }
    return record;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};
module.exports = { getRecordForRace };