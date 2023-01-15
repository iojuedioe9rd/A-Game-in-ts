import { Server } from "socket.io";



export function createIo(serv)
{
    const io = new Server(serv)
    return io
}

