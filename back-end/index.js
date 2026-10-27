import express from "express";
import routes from "./src/routes/index.js";
import connectDB from "./src/config/dbConfig.js";
import { notFound } from "./src/shared/middlewares/notFound.js";
import { envConfig } from "./src/config/envConfig.js";
import { errorHandler } from "./src/shared/middlewares/errorHandler.js";

const app = express();

app.use(express.json());

connectDB();

app.use("/api", routes);

app.use(notFound);
app.use(errorHandler);

app.listen(envConfig.PORT, () => {
  console.log(`Server running at http://localhost:${envConfig.PORT}`);
});
