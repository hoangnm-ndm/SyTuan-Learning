import express from "express";
import routes from "./src/routes/index.js";
import connectDB from "./src/config/dbConfig.js";
import { notFound } from "./src/shared/middlewares/notFound.js";
import { env } from "./src/config/env.js";
import { errorHandler } from "./src/shared/middlewares/errorHandler.js";

const app = express();

app.use(express.json());

connectDB();

app.use("/api", routes);

app.use(notFound);
app.use(errorHandler);

app.listen(env.PORT, () => {
  console.log(`Server running at http://localhost:${env.PORT}`);
});
