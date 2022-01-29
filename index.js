const mineflayer = require('mineflayer')
//const c = require('mineflayer-cmd').plugin
const data = require("./config.json")
var lasttime = -1;
var moving = 0;
var connected = 0;
var a = ['forward', 'back', 'left', 'right']
var lastaction;
var pi = data.pi;
var moveinterval = data.moveinterval;
var maxrandom = data.maxrandom;


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

var bot = mineflayer.createBot({
  host: data.ip,
  username: data.username,
  port: data.port,
  version: "1.17.1"
  
});

//bot.loadPlugin(c)

bot.on('login', function() {
	console.log("Logged In")
    bot.chat("Afk Bot is up and running fine :)")
});


bot.on('spawn',function() {
    connected=1;
});

bot.on('death',function() {
    bot.emit("respawn")
});

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)