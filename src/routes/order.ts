import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJWT } from "../middleware/session";

/*
 * A esta ruta solo pueden acceder las personas que tienen una sesion activa
 * Que tengan un JWT valido.
 */
const router = Router();

router.get("/", checkJWT, getItems);

export { router };