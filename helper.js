import { client } from "./index.js";
import { ObjectId } from "mongodb";

async function getAllMovies() {
  return await client.db("b30wd").collection("movies").find({}).toArray();
}

async function getMovieByid(id) {
  console.log(id, ObjectId(id));
  return await client
    .db("b30wd")
    .collection("movies")
    .findOne({ _id: ObjectId(id) });
}

async function createMovies(data) {
  return await client.db("b30wd").collection("movies").insertMany(data);
}

async function updateMovieByid(id, updateData) {
  return await client
    .db("b30wd")
    .collection("movies")
    .updateOne({ _id: ObjectId(id) }, { $set: updateData });
}

async function deleteMovieByid(id) {
  return await client
    .db("b30wd")
    .collection("movies")
    .deleteOne({ _id: ObjectId(id) });
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
