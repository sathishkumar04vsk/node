import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import { moviesRoute } from "./routes/movies.js";
import { usersRouter } from "./routes/users.js";

const app = express();
dotenv.config();
app.use(cors());

const PORT = process.env.PORT;

// middle ware -> Intercept ->converting body to json
app.use(express.json());

// const MONGO_URL = "mongodb://localhost";
const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected ✌️😊");
  return client;
}

export const client = await createConnection();

// get home api
app.get("/", function (request, response) {
  response.send("hello world");
});

app.use("/movies", moviesRoute);

app.use("/users", usersRouter);

app.listen(PORT, () => console.log(`server started in ${PORT}`));
