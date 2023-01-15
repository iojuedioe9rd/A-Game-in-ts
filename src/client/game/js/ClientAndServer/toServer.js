

var server

 function setServer(_server)
{
    server = _server;
}

function emit(name, arg = null)
{
    server.emit(name, arg)
}