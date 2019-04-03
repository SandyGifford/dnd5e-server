"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DnD5e = __importStar(require("dnd5e"));
var node_fetch_1 = __importDefault(require("node-fetch"));
var ServerEndpoints = new DnD5e.Endpoints(node_fetch_1.default, "http://www.dnd5eapi.co/api");
exports.ServerEndpoints = ServerEndpoints;
__export(require("./middleware"));
__export(require("dnd5e"));
