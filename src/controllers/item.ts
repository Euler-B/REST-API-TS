import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertCar, getCar, getCars, updateCar, deleteCar } from "../services/item";

const getItem = async ({ params }: Request, res:Response) => {
    try {
      const { id } = params;
      const response = await getCar(id);
      const data = response ? response : "NOT_FOUND";
      res.send(response);
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEM');
  }
};

const getItems = async (req: Request, res:Response) => {
    try {
      const response = await getCars();
      res.send(response);
    } catch (e) {
      handleHttp(res, 'ERROR_GET_ITEMS');
    }
};

const updateItem = async ({ params, body}: Request, res:Response) => {
    try {
      const { id } = params;
      const response = await updateCar(id, body);
      res.send(response);
    } catch (e) {
      handleHttp(res, 'ERROR_UPDATE_ITEMS');
    }
};

const postItem = async ({ body }: Request, res: Response) => {
    try { 
      const responseItem = await insertCar(body); 
      res.send(responseItem);
    } catch (e) {
      handleHttp(res, 'ERROR_POST_ITEM', e);
    }
};

const deleteItem = async ({ params }: Request, res:Response) => {
    try {
      const { id } = params;
      const response = await deleteCar(id);
      res.send(response);
    } catch (e) {
      handleHttp(res, 'ERROR_DELETE_ITEMS');
    }
};

export { getItem, getItems, updateItem, postItem, deleteItem };