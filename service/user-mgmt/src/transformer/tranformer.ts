import { Document } from 'mongoose';

export interface Transformer<F extends Document, T> {
    from(dto: T): F
    to(doc: F): T
}