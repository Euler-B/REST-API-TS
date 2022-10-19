import { Request, Response, Router } from "express";
import { getItem, getItems, postItem, updateItem, deleteItem } from "../controllers/item";
import { logMiddleware } from "../middleware/log";
const router = Router();
/*
 *
 *http://localhost:3000/item [GET]
 */

router.get("/:id", logMiddleware, getItem);
router.get("/", getItems);
router.post("/", postItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export { router };