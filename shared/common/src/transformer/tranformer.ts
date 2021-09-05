export interface Transformer<F, T> {
    from(dto: T): F
    to(doc: F): T
}