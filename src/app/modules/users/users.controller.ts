import { NextFunction, Request, Response } from "express";
import { getAllUser } from "./users.service";
import { log } from "../../utils/logger";

export const getAllUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getAllUser();
    res.status(200).send({
      success: true,
      data: users,
    });
  } catch (err: any) {
    log.error(err);
  }
};
