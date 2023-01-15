
 function ToJSON(player)
{
    return JSON.stringify(player);
}

 function ToPlayer(json, socket)
{
    var obj = JSON.parse(json);
    
    console.log(obj);
}