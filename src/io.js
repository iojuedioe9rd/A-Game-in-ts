"use strict";
exports.__esModule = true;
exports.createIo = void 0;
var socket_io_1 = require("socket.io");
function createIo(serv) {
    var io = new socket_io_1.Server(serv);
    return io;
}
exports.createIo = createIo;
