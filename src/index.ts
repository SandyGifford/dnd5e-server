import * as DnD5e from "dnd5e";
import nodeFetch from "node-fetch";

const ServerEndpoints = new DnD5e.Endpoints(nodeFetch, "http://www.dnd5eapi.co/api");

export { ServerEndpoints };
export * from "dnd5e";
