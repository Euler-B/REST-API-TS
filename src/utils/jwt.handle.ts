import { sign, verify } from "jsonwebtoken";
import "dotenv/config";
const JWT_SECRET = process.env.JWT_SECRET || "secret.0127844gr";

const generateToken = (id: string) => {
    const jwt = sign({ id }, JWT_SECRET, {
        expiresIn: "2h",
    });
    return jwt; 
};

const verifyToken = async () => {

}; 

export { generateToken, verifyToken };