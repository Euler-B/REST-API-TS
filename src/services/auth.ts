import { User } from '../interfaces/user.interface';
import UserModel from '../models/user';
import { encrypt } from '../utils/bcrypt.handle';

const registerNewUser = async ({email, password, name}: User) => {
    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return "El usuario ya existe";
    
    const passHash = await encrypt(password);
    const registerNewUser = await UserModel.create({ email, password: passHash, name });
    return registerNewUser;
};

const loginUser = async () => {

};  

export { registerNewUser, loginUser };