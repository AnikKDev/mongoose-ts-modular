import express, { Application } from "express";
import cors from "cors";
import "dotenv/config";
const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import routers here

// default routes will be here

// custom route paths will be here

export default app;
