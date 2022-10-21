import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { JwtPayload } from "jsonwebtoken";
import { handleHttp } from "../utils/error.handle";

interface RequestExt extends Request {
    user?: string | JwtPayload;
};


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