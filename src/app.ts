
import express = require("express");
import { createIo } from "./io"
import { Server as WebServer } from "http";

import { Server as ServerConfig } from "./ClientAndServer/ClientAndServer"
import { setServer, on } from "./ClientAndServer/toClient"
import Game from "./Game"
import { Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import Player from "./Player";
import {PlayersSockets} from "./Player";

const { platform } = require('os');
const { exec } = require('child_process');
const PLAYER_POSITION = require("./TsAndJs/JS/gameInfo").PLAYER_POSITION

var app = express();

var serv = new WebServer(app);
var init = false;
var GameSocket;
var t = true;

console.log(1);


app.get('/', function (req, res) {
	console.log(2);
	console.log(req.httpVersion)
	res.sendFile(__dirname + '/client/game/index.html');
	
});
app.get("/game", function (req, res) {
	res.sendFile(__dirname + '/client/game/index.html')
})


app.use('/client', express.static(__dirname + '/client/game'));
app.use('/notGameDir', express.static(__dirname))



serv.listen(2000, function () 
{
	console.log("Server: http://localhost:2000/")
	t = false;
	
	

});



const io = createIo(serv)

var SOCKETS_LIST = {}

io.sockets.on('connection', function (socket)
{
	console.log('Connected')
	t = false;
	var player = new Player(socket)
	
	SOCKETS_LIST[player.id] = player;
	player.x = 250
	player.y = 250
	console.log(PLAYER_POSITION)

	console.log('socket connection');
	
	setServer(new ServerConfig(socket))
	

	on("happy", function (data) {
		console.log("happy")
		console.log(data.reason)
	});

	if (init == false)
	{
		socket.emit("refresh");
		init = true;
	}

	GameSocket = socket;

	GameSocket.on("refreshing", function ()
	{
		t = true;
	});
	socket.emit("newPlayer", { PlayerId: player.id })
	
	socket.on("disconnect", function () {
		delete SOCKETS_LIST[player.id]

	})

	socket.on('keyPress',function(data){
		if(data.inputId === 'left')
			player.pressingLeft = data.state;
		else if(data.inputId === 'right')
			player.pressingRight = data.state;
		else if(data.inputId === 'up')
			player.pressingUp = data.state;
		else if(data.inputId === 'down')
			player.pressingDown = data.state;
	});

	Game(SOCKETS_LIST)

});


