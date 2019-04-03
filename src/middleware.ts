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

	app.get(path.join("/", options.path, "*"), (req, res) => {
		const endpoint = req.path.substr(path.join("/", options.path).length);
		nodeFetch(`http://www.dnd5eapi.co/api${endpoint}`)
			.then(r => r.json())
			.then(r => {
				res.setHeader("Content-Type", "application/json");
				res.end(JSON.stringify(r));
			});
	});

	return app;
};

const middleware = createMiddleware();

export {createMiddleware, middleware};
