const mongo = require("mongodb");
const client = require("../dbConnection")

function findAll(callback) {
  let profiles = client.db.collection("profiles");
  profiles.find({}).toArray((err, data) => {
    callback(data);
  });
}

function findById(id, callback) {
  let profiles = client.db.collection("profiles");
  profiles.findOne({"id" : id}, (err, data) => {
    callback(data);
  });
}

module.exports = {
  findAll : findAll,
  findById : findById
}
