let { getClient } = require('./database');

const dbName = 'academics';

async function getAllGrades() {
    const client = await getClient();
    const collection = await client.db(dbName).collection("grades");
    return collection.find({}).toArray();
};

async function getAllProjects() {
    const client = await getClient();
    const collection = await client.db(dbName).collection("projects");
    return collection.find({}).toArray();
};

module.exports = {
    getAllGrades,
    getAllProjects
};