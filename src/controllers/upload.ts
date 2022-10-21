import { Response } from "express";
import { RequestExt } from "../interfaces/req-ext";
import { Storage } from "../interfaces/storage";
import { uploadRegister } from "../services/storage";
import { handleHttp } from "../utils/error.handle";

const getFile = async (req: RequestExt, res: Response) => {
    try {
        const { user, file } = req;
        console.log(file);
        const dataToRegister: Storage = {
            filename: `${file?.filename}`,
            idUser: `${user?.id}`,
            path: `${file?.path}`,
        }
        const response = await uploadRegister(dataToRegister)
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_GET_FILE");
    };
};

export { getFile };