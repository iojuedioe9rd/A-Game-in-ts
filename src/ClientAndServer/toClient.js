"use strict";
exports.__esModule = true;
exports.on = exports.setServer = void 0;
var server;
function setServer(_server) {
    server = _server;
}
exports.setServer = setServer;
function on(name, callback) {
    server.on(name, callback);
}
exports.on = on;
