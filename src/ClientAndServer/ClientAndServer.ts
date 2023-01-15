import { Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";


export class Client
{
    socket;
    constructor(socket)
    {
        this.socket = socket;
    }
    on(name, callback)
    {
        this.socket.on(name, () => callback())
    }

    emit(name: string, arg = null)
    {
        this.socket.emit(name, arg)
    }
}
export class Server
{
    socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>

    constructor(socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>)
    {
        this.socket = socket;
    }

    on(name: string, callback: Function)
    {
        this.socket.on(name, (arg) => callback(arg))
    }
    emit(name: string, arg = null)
    {
        this.socket.emit(name, arg)
    }
    
}