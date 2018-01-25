
// DEPENDENCIES
import { IServerMessage } from '../interfaces/server-message';


/**
 * class implementation of the base Server Message object
 */
export class ServerMessage<T> implements IServerMessage<T> {
    success: boolean;
    output: T;

    /**
     * base constructor
     * @param success boolean representing if data was accepted
     * @param output feedback from the database
     */
    constructor(success: boolean, output: T) {
        this.success = success;
        this.output = output;
    }
}
