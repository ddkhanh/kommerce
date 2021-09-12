export interface Transformer<Request, Response, Document> {
    from(req: Request): Document;
    to(doc: Document): Response;
}