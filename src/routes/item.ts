import { Request, Response, Router } from "express";
import { getItem, getItems, postItem, updateItem, deleteItem } from "../controllers/item";

const router = Router();
/*
 *
 *http://localhost:3000/item [GET]
 */

router.get("/:id", getItem);
router.get("/", getItems);
router.post("/", postItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export { router };