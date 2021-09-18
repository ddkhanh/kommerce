import { KommerceException } from "./kommerce-exception";

export enum ErrorStatus {
    OK = 0,
    CANCELLED = 1,
    UNKNOWN = 2,
    INVALID_ARGUMENT = 3,
    DEADLINE_EXCEEDED = 4,
    NOT_FOUND = 5,
    ALREADY_EXISTS = 6,
    PERMISSION_DENIED = 7,
    RESOURCE_EXHAUSTED = 8,
    FAILED_PRECONDITION = 9,
    ABORTED = 10,
    OUT_OF_RANGE = 11,
    UNIMPLEMENTED = 12,
    INTERNAL = 13,
    UNAVAILABLE = 14,
    DATA_LOSS = 15,
    UNAUTHENTICATED = 16
}

export const InvalidIdException = () => {
    return new KommerceException({
        code: ErrorStatus.INVALID_ARGUMENT,
        message: `Invalid id format`
    })
};

export const AlreadyExistsException = (err?: string) => new KommerceException({
    code: ErrorStatus.ALREADY_EXISTS,
    message: err ? err : `Object is already existed`
});

export const NotFoundException = (err?: string) => new KommerceException({
    code: ErrorStatus.NOT_FOUND,
    message: err ? err : `Object is not found`
});


export const ValidationException = (err: string) => new KommerceException({
    code: ErrorStatus.INVALID_ARGUMENT,
    message: err
});

export const UnExpectedException = (err: string) => new KommerceException({
    code: ErrorStatus.UNKNOWN,
    message: err
});