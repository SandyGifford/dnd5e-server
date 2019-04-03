import express from "express";
import path from "path";
import nodeFetch from "node-fetch";

export interface CreateMiddlewareOptions {
	path?: string;
}

const createMiddleware = (options?: CreateMiddlewareOptions): express.Express => {
	const app = express();
	options = {
		path: "dnd5e",
		...options,
	};

	app.get(path.resolve(options.path, "*"), (req, res) => {
		const endpoint = req.path.substr(path.resolve("/", options.path).length);

		nodeFetch(path.resolve("http://www.dnd5eapi.co/api", endpoint));
	});

	return app;
};

const middleware = createMiddleware();

export {createMiddleware, middleware};
