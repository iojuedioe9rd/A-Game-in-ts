


class Client
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

    emit(name, arg = null)
    {
        this.socket.emit(name, arg)
    }
}