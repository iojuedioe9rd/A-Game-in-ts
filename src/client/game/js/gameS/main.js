const socket = io();
var player = null;

var ctx = newCanvas()
setTimeout(function () {
  ctx.font = '30px sans-serif';
  

  socket.on("newPositions", function (data) {
    //player.x = data.x;
    //player.y = data.y;
    ctx.clearRect(0, 0, 500, 500);
    
    for (var i = 0; i < data.length; i++)
    {
      
      
      ctx.fillText("P", data[i].x, data[i].y);
      
    }
    
    document.onkeydown = function(event){
		if(event.keyCode === 68)	//d
			socket.emit('keyPress',{inputId:'right',state:true});
		else if(event.keyCode === 83)	//s
			socket.emit('keyPress',{inputId:'down',state:true});
		else if(event.keyCode === 65) //a
			socket.emit('keyPress',{inputId:'left',state:true});
		else if(event.keyCode === 87) // w
			socket.emit('keyPress',{inputId:'up',state:true});
 
	}
  })
}, 1000)

document.onkeyup = function(event){
		if(event.keyCode === 68)	//d
			socket.emit('keyPress',{inputId:'right',state:false});
		else if(event.keyCode === 83)	//s
			socket.emit('keyPress',{inputId:'down',state:false});
		else if(event.keyCode === 65) //a
			socket.emit('keyPress',{inputId:'left',state:false});
		else if(event.keyCode === 87) // w
			socket.emit('keyPress',{inputId:'up',state:false});
	}


  socket.on("refresh", function() {
    
    console.log("refreshing");
    location.reload();;
  })

socket.on("serverMsg", function (data) {
  console.log(data.msg);
});
socket.on("newPlayer", function (data) {
  console.log(data);
  player = new Player(socket);
  player.id = data.id;
  
})


