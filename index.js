const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('message', (message) => {
    if(message.content == 'Hi'){
        message.reply('Demonetised!');   
    }
});

bot.on('message', (message) => {
    if(message.content == 'hi'){
        message.reply('Demonetised!');   
    }
});

bot.on('message', (message) => {
    if(message.content == 'hello'){
        message.reply('Demonetised!');   
    }
});

bot.on('message', (message) => {
    if(message.content == 'Hello'){
        message.reply('Demonetised!');   
    }
});

bot.on('message', (message) => {
    if(message.content == 'Susan what are you doing right now?'){
        message.reply('Hi, I am currently on Twitch removing all of Ninjas paid subscribers and removing ads from all of his streams, hopefully soon we will hear gun shots at Twitch HQ.');   
    }
});
//



bot.on('message', (message) => {
    if(message.content == 'susan what are you doing right now?'){
        message.reply('Hi, I am currently on Twitch removing all of Ninjas paid subscribers and removing ads from all of his streams, hopefully soon we will hear gun shots at Twitch HQ.');   
    }
});

bot.on('message', (message) => {
    if(message.content == '++demonetise'){
        var text = "The chane that your video will be demonetised is " + Math.floor((Math.random() * 100) + 1) + "%";
        message.channel.send({embed: {
        color: 15844367,
        description: text
}});
    }
});



//
/*
bot.on('message', (message) => {
    if(message.content == '++cod'){
        var x = Math.floor((Math.random() * 100) + 1);
        //message.reply('you are roughly ' + x + '% gay');  
        message.channel.send({embed: {
           color: 3447003,
           description: "The chane that your video will be demonetised is " + x + "%"
         }});
    }
});



bot.on('message', (message) => {
    if(message.content == '++cod'){
        var x = Math.floor((Math.random() * 100) + 1);
       message.channel.send({embed: {
  color: 15844367,
  description: "The chance that your video will be demonetised is " + x + "x"
}});   
    }
});
*/


bot.on('ready', () => { bot.user.setGame('Demonetising Ninja', 'https://www.twitch.tv/maybenima') })



bot.login(process.env.B0T_T0KEN);
