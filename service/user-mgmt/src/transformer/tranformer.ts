import { Document } from 'mongoose';

export interface Transformer<F extends Document, T> {
    fromDto(dto: T): F
    toDto(doc: F): T
}