import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/req-ext";

const getItems = (req: RequestExt, res: Response) => {
  try {
    res.send({
    data: "Esta mensaje solo puede ser visto por usuarios que tengan JWT valido",
    user: req.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOGS");
  }
};

export { getItems };