/**
 * Class describing implementation of a Standard error gRPC model.
 * All the excpetion related to gRPC must be throw via this Class instance.
 * @see [Error handling](https://www.grpc.io/docs/guides/error/)
 */
export class KommerceException extends Error {
    code: number;
    message: string;

    constructor(error: string | { code: number; message: string }) {
        super();
        if (typeof error === 'string') {
            this.message = error;
        } else {
            this.code = error.code;
            this.message = error.message;
        }
    }
}

