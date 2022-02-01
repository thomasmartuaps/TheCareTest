import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import routes from "./src/routes";
// const errorHandler = require('./middlewares/errorHandler')

const url = process.env.MONGO_URI || "none";

if (url === "none") {
  console.log("no url, aborting connection to mongoDb");
} else {
  mongoose
    .connect(url)
    .then(() => console.log("mongoDb connected."))
    .catch((err) => console.log(err));
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);
// app.use(errorHandler)

app.listen(PORT, () => {
  console.log("Listening to port", PORT);
});
