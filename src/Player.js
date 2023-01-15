"use strict";
exports.__esModule = true;
var Player = /** @class */ (function () {
    function Player(socket) {
        this.socket = socket;
        this.id = Math.floor(Math.random() * 100);
        this.x = 0;
        this.y = 0;
    }
    return Player;
}());
exports["default"] = Player;
