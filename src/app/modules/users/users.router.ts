import { Router } from "express";
import { getAllUsersController } from "./users.controller";
const router: Router = Router();
router.get("/all-users", getAllUsersController);

export default router;
