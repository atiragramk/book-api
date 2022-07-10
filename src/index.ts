import { Request, Response } from "express";
import express from "express";
import mongoose from "mongoose";

import router from "./routes";
import { formatErrorResponse } from "./services/http.service";

const { PORT = 80, MONGO_URI } = process.env;

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use("/api/v1", router);

app.use("*", (_req: Request, res: Response) => {
  return formatErrorResponse(res, { message: "Not found" }, 404);
});

async function main() {
  try {
    await mongoose.connect(MONGO_URI as string);
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log("Server is running on port ", PORT);
      console.log("Press CTRL + C to stop");
    });
  } catch (error) {
    console.error(error);
  }
}

main();
