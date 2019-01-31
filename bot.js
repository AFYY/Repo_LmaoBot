const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  if (message.content.toLowerCase() == "ping") {
    message.channel.send("pong!");
  }

  else if (message.content.toLowerCase() == "$ali") {
    message.channel.send("Ali deserves Darkness");
  }

  else if (message.content.toLowerCase() == "$mike") {
    message.channel.send("EXCALIBAHHHHHHHHHH");
  }

  else if (message.content.toLowerCase() == "$andi") {
    message.channel.send("raiding in runescape");
  }

});


 
client.login("NTQwMjE3NzU0Nzc5Nzc5MDky.DzP3KQ.-rivYUiFawL4rEnx_X4xbdSqlSE");