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
bot.on('ready', () => { bot.user.setGame('Demonetising Ninja', 'https://www.twitch.tv/maybenima') })



bot.login(process.env.B0T_T0KEN);
