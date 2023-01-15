function newCanvas()
{
    const canvas = document.createElement("canvas");
const center = document.createElement("center")
const ctx = canvas.getContext("2d");
    const welcomeText = WelcomeText();

  
    center.appendChild(canvas)
    center.appendChild(welcomeText)

console.log(document.body);

setInterval(function () {
  
}, 1000)

canvas.width = 500
canvas.height = 500
canvas.style = "border: 1px solid #000000"

setTimeout(function () {
    document.body.appendChild(center);
    
}, 1000)
    return ctx
}

function WelcomeText()
{
    const game = document.createElement("h1")
    game.textContent = "Welcome to " + GAME_NAME + "!"
    game.font = "30px sans-serif"
    return game
}