
// DEPENDENCIES
import { IUser } from '../interfaces/user';


/**
 * base user class that implements base IUser
 */
export class User implements IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}
