import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const insertCar = async (item: Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
};

const getCar = async (id:string) => {
    const responseGet = await ItemModel.find({_id:id});
    return responseGet;
};

const getCars = async () => {
    const responseGet = await ItemModel.find({});
    return responseGet;
};

const updateCar = async (id:string, data:Car) => {
    const responseGet = await ItemModel.findOneAndUpdate({_id:id}, data, {new:true});
    return responseGet;
};

const deleteCar = async (id:string) => {
    const responseGet = await ItemModel.remove({_id:id});
    return responseGet;
};

export { insertCar, getCar, getCars, updateCar, deleteCar };  