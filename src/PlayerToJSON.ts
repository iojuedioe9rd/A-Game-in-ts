import { Socket } from "socket.io";
import Player from "./Player";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export function ToJSON(player: Player)
{
    return JSON.stringify(player);
}

export function ToPlayer(json: string, socket: Socket<DefaultEventsMap, DefaultEventsMap, any>)
{
    var obj = JSON.parse(json);
    
    var player = new Player(socket)
    player.x = obj.x;
    player.y = obj.y;
    player.id = obj.id;
}