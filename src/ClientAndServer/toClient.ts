import { Server } from "./ClientAndServer"

var server: Server

export function setServer(_server: Server)
{
    server = _server;
}

export function on(name: string, callback: Function)
{
    server.on(name, callback);
}