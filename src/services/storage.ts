import { Storage } from "../interfaces/storage";
import StorageModel from "../models/storage";

const uploadRegister = async ({ filename, idUser, path}: Storage) => {
    const responseItem = await StorageModel.create({ filename, idUser, path });
    return responseItem;
};

export { uploadRegister };