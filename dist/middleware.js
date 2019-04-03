"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var node_fetch_1 = __importDefault(require("node-fetch"));
var createMiddleware = function (options) {
    var app = express_1.default();
    options = __assign({ path: "dnd5e" }, options);
    app.get(path_1.default.join("/", options.path, "*"), function (req, res) {
        var endpoint = req.path.substr(path_1.default.join("/", options.path).length);
        node_fetch_1.default("http://www.dnd5eapi.co/api" + endpoint);
    });
    return app;
};
exports.createMiddleware = createMiddleware;
var middleware = createMiddleware();
exports.middleware = middleware;
