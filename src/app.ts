import express, { Application } from "express";
import cors from "cors";
import "dotenv/config";
import ejs from "ejs";
const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import routers here
import userRouter from "./app/modules/users/users.router";
// default routes will be here
app.use("/api/v1/users", userRouter);
// custom route paths will be here

export default app;
