import express from "express";
export interface CreateMiddlewareOptions {
    path?: string;
}
declare const createMiddleware: (options?: CreateMiddlewareOptions) => express.Express;
declare const middleware: express.Express;
export { createMiddleware, middleware };
