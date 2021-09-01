import { status } from '@grpc/grpc-js';
import { KrpcException } from '../exception/rpc-exception';

export const InvalidIdException = () => {
    return new KrpcException({
        code: status.INVALID_ARGUMENT,
        message: `Invalid id format`
    })
};

export const AlreadyExistsException = (err?: string) => new KrpcException({
    code: status.ALREADY_EXISTS,
    message: err ? err : `Object is already existed`
});

export const NotFoundException = (err?: string) => new KrpcException({
    code: status.NOT_FOUND,
    message: err ? err : `Object is not found`
});