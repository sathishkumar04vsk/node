import express from "express";

import {
  getAllMovies,
  getMovieByid,
  createMovies,
  updateMovieByid,
  deleteMovieByid,
} from "../helper.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();
// get all movies
router.get("/", auth, async function (request, response) {
  const movies = await getAllMovies();
  response.send(movies);
});

// get Movie by id
router.get("/:id", auth, async function (request, response) {
  // console.log(request.params); // filter | find
  const { id } = request.params;
  // const movie = Movies.find((mv) => mv.id === id);
  const movie = await getMovieByid(id);
  movie
    ? response.send(movie)
    : response.status(404).send({ message: "No such movie found" });
});

// create a movies data
router.post("/", auth, async function (request, response) {
  const data = request.body;
  console.log(data);
  const result = await createMovies(data);
  response.send(result);
});

// update movie by id
router.put("/:id", async function (request, response) {
  // filter |find
  const { id } = request.params;
  // db.movies.updateOne({id:id},{$set:updateData})
  const updateData = request.body;
  const result = await updateMovieByid(id, updateData);
  response.send(result);
});

// delete movie by id
router.delete("/:id", async function (request, response) {
  console.log(request.params); // filter | find
  const { id } = request.params;
  // db.movies.deleteOne({id:id})
  const result = await deleteMovieByid(id);
  response.send(result);
});

export const moviesRoute = router;
