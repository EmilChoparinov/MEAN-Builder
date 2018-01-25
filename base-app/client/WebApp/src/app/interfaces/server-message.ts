
/**
 * base interface for the Server Message object
 */
export interface IServerMessage<T> {
    success: boolean;

    // T represents the expected incoming json result
    output: T;
}
