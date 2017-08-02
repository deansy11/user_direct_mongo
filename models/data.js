const client = require("../dbConnection");
const mongo = require("mongodb");

function findAll(callback) {
  let profiles = client.db.collection("profiles");
  client.db.collection("profiles");
  profiles.find({}).toArray((err, data) => {
    callback(data);
  });
}

function findById(id, callback) {
  let profiles = client.db.collection("profiles");
  profiles.findOne({"id" : id}, (err, data) => {
    callback(data);
  });
};

module.exports = {
  findAll : findAll,
  findById : findById
}
