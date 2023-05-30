import { NextFunction, Request, Response } from "express";
import { getAllUser } from "./users.service";
import { log } from "../../utils/logger";
import { sendApiResponse } from "../../utils/responseHandler";

export const getAllUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getAllUser();
    /* res.status(200).send({
      success: true,
      data: users,
    }); */
    sendApiResponse(res, 200, true, users);
  } catch (err: any) {
    sendApiResponse(res, 400, false);
    log.error(err);
  }
};
