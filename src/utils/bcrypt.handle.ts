import { hash, compare } from "bcrypt";

const encrypt = async (pass: string) => {
    const passwordHash = await hash(pass, 8);
    return passwordHash;
};

const verified = async () => {

};

export { encrypt, verified };