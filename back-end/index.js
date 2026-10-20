import express from "express";
import routes from "./src/routes/index.js";
import { envConfig } from "./src/config/envConfig.js";

const app = express();

app.use(express.json());

app.use("/api", routes);

app.listen(envConfig.PORT, () => {
  console.log(`Server running at http://localhost:${envConfig.PORT}`);
});
