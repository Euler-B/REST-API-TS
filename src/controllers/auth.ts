import { Response, Request } from "express";
import { registerNewUser, loginUser } from "../services/auth";

const registerCtrl = async ({body}: Request, res: Response) => {
    const responseUser = await registerNewUser(body);
    res.send(responseUser);
};

const loginCtrl = async ({body}: Request, res: Response) => {
    const { email, password} = body;
    const responseUser = await loginUser(body);

    if ( responseUser === 'Error de autenticación') {
        res.status(403)
        res.send(responseUser);
    } else {
        res.send(responseUser);
    }
};

export { registerCtrl, loginCtrl };