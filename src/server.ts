const port = process.env.PORT || 8000;
import app from "./app";
import mongoose from "mongoose";
import { log } from "./app/utils/logger";
import { Request, Response } from "express";
async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/modular");
    app.listen(port, () => {
      log.info("listening to port" + port);
    });
    log.info("mongodb connection established");
  } catch (err) {
    log.error("error connecting to mongo");
  }
}
main();
// root route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});
