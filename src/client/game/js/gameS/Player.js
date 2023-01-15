

class Player
{
    socket
    id
    x
    y

    constructor(socket)
    {
        this.socket = socket;
        this.id = Math.floor(Math.random() * 100);
        this.x = PLAYER_POSITION;
        this.y = PLAYER_POSITION;
    }
}