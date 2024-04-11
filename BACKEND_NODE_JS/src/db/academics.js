let { getClient } = require('./database');

const dbName = 'academics';

async function getAllGrades() {
    const client = await getClient();
    const collection = await client.db(dbName).collection("grades");
    return collection.findOne({ _id: Object(process.env.MONGODB_TOKEN_ID) });
};

module.exports = {
    getAllGrades,
};