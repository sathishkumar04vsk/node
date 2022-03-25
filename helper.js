import { client } from "./index.js";

async function getAllMovies() {
  return await client.db("b30wd").collection("movies").find({}).toArray();
}

async function getMovieByid(id) {
  return await client.db("b30wd").collection("movies").findOne({ id: id });
}

async function createMovies(data) {
  return await client.db("b30wd").collection("movies").insertMany(data);
}

async function updateMovieByid(id, updateData) {
  return await client
    .db("b30wd")
    .collection("movies")
    .updateOne({ id: id }, { $set: updateData });
}

async function deleteMovieByid(id) {
  return await client.db("b30wd").collection("movies").deleteOne({ id: id });
}

// authntication and authurization
async function createUser(newUser) {
  return await client.db("b30wd").collection("users").insertOne(newUser);
}
async function getUserByName(username) {
  return await client
    .db("b30wd")
    .collection("users")
    .findOne({ username: username });
}

export {
  getAllMovies,
  getMovieByid,
  createMovies,
  updateMovieByid,
  deleteMovieByid,
  createUser,
  getUserByName,
};
