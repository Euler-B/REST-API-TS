import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";

interface RequestExt extends Request {
    user?: string | JwtPayload;
};

const checkJWT =  (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(" ").pop(); // Al hacer split, retorna una array, y el JWT esta en la posicion 1, por lo tanto pop lo elimina, y lo devuelve. 
        const isUser = verifyToken(`${jwt}`);
        if (!isUser) {
            res.status(401);
            res.send("NO_TIENES_UN_JWT_VALIDO");
        } else {
            req.user = isUser ;
            next(); 
        };
    } catch (e) {
        console.log(e);
        res.status(400);
        res.send("SESION_NO_VALIDA");
    }
};

export { checkJWT };