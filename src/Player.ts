import { Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
var PLAYER_POSITION = require("./TsAndJs/JS/gameInfo").PLAYER_POSITION

export default class Player
{
    socket: Socket<DefaultEventsMap, DefaultEventsMap, any>
    id: number;
    x: number;
    y: number;
    pressingRight: boolean;
    pressingLeft: boolean;
    pressingUp: boolean;
    pressingDown: boolean;
    maxSpd: number

    constructor(socket: Socket<DefaultEventsMap, DefaultEventsMap, any>)
    {
        
        this.id = Math.floor(Math.random() * 100);
        this.x = PLAYER_POSITION;
        this.y = PLAYER_POSITION;
        this.maxSpd = 1
        PlayersSockets.AddSocket(this.id, socket)

        this.pressingRight = false;
        this.pressingLeft = false;
        this.pressingUp = false;
        this.pressingDown = false;

        

    }
    updatePosition()
    {
        if (this.pressingRight)
        {
            this.x += this.maxSpd
        }
        if (this.pressingLeft)
        {
            this.x -= this.maxSpd
        }
        if (this.pressingUp)
        {
            this.y -= this.maxSpd
        }
        if (this.pressingDown)
        {
            this.y += this.maxSpd
        }
        
    }


}

export class PlayersSockets
{
    private static sockets = {};
    private static me : PlayersSockets

    constructor()
    {
        PlayersSockets.me = this
    }

    static AddSocket(id: number, socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>)
    {
        PlayersSockets.sockets[id] = socket
    }

    static GetSocket(id: number)
    {
        return PlayersSockets.sockets[id]
    }

    static GetPlayersSockets()
    {
        if (PlayersSockets.me === null || PlayersSockets.me == undefined)
        {
            PlayersSockets.me = new PlayersSockets();
        }
        return PlayersSockets.me
    }
}

