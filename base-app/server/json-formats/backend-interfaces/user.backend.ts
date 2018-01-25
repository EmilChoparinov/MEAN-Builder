
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

/**
 * base implementation of IUser
 */
export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}
