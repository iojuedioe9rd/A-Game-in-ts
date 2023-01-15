import Player, {PlayersSockets} from "./Player";
import { ToJSON } from "./PlayerToJSON"

var SOCKETS_LIST : Array<Player>



export default function Game(_SOCKETS_LIST)
{


  SOCKETS_LIST = _SOCKETS_LIST;
setInterval(function () {
  for (var i in SOCKETS_LIST)
  {
    var player = SOCKETS_LIST[i];
    if (player.pressingRight)
        {
            player.x += player.maxSpd
        }
        if (player.pressingLeft)
        {
            player.x -= player.maxSpd
        }
        if (player.pressingUp)
        {
            player.y -= player.maxSpd
        }
        if (player.pressingDown)
        {
            player.y += player.maxSpd
        }
              }
        }, 1000/25)

  setInterval(function () {
    var pack = []
    for (var i in SOCKETS_LIST)
    {
        var player = SOCKETS_LIST[i];
        
      
      

        pack.push({x: player.x, y: player.y})


      if (player.pressingRight)
        {
            player.x += player.maxSpd
        }
        if (player.pressingLeft)
        {
            player.x -= player.maxSpd
        }
        if (player.pressingUp)
        {
            player.y -= player.maxSpd
        }
        if (player.pressingDown)
        {
            player.y += player.maxSpd
        }
      
    }
    for (var i in SOCKETS_LIST)
    {
      var player = SOCKETS_LIST[i];
      
      player.socket.emit("newPositions", pack)
      
      }
    
}, 1000 / 25)
}



//on("newPlayer", function (data) {
  //player = data.player;
//})

  //on("newPos", function (data)
 // { 
    

     
    //player.x = data.player.x
    //player.y = data.player.y


 // })
//console.log("hi")


//var player = new Player(socket)
    //player.x = obj.x;
    //player.y = obj.y;
    //player.id = obj.id;