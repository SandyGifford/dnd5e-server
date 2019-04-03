import * as DnD5e from "dnd5e";

const ClientEndpoints = new DnD5e.Endpoints(fetch.bind(window), "dnd5e");

export { ClientEndpoints };
export * from "dnd5e";
