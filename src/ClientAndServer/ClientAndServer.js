"use strict";
exports.__esModule = true;
exports.Server = exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(socket) {
        this.socket = socket;
    }
    Client.prototype.on = function (name, callback) {
        this.socket.on(name, function () { return callback(); });
    };
    Client.prototype.emit = function (name, arg) {
        if (arg === void 0) { arg = null; }
        this.socket.emit(name, arg);
    };
    return Client;
}());
exports.Client = Client;
var Server = /** @class */ (function () {
    function Server(socket) {
        this.socket = socket;
    }
    Server.prototype.on = function (name, callback) {
        this.socket.on(name, function (arg) { return callback(arg); });
    };
    Server.prototype.emit = function (name, arg) {
        if (arg === void 0) { arg = null; }
        this.socket.emit(name, arg);
    };
    return Server;
}());
exports.Server = Server;
