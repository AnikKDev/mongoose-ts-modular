import { Response } from "express";

interface APIResponse {
  success: boolean;
  data?: any;
  err?: any;
}
export const sendApiResponse = (
  res: Response,
  statusCode: number,
  success: boolean,
  data?: any,
  err?: any
): void => {
  const apiResponse: APIResponse = { success };
  if (data) {
    apiResponse.data = data;
  }
  if (err) {
    apiResponse.err = err;
  }
  res.status(statusCode).send(apiResponse);
};
