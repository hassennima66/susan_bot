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
        var text = "The chance that your video will be demonetised is " + Math.floor((Math.random() * 100) + 1) + "%";
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
bot.on('message', (message) => {
    if(message.content == '++demonetiseme'){
        message.channel.send('What tag would you like to see? This will await will be cancelled in 30 seconds. It will finish when you provide a message that goes through the filter the first time.')
.then(() => {
  message.channel.awaitMessages(response => response.content === 'test', {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      message.channel.send('There was no collected message that passed the filter within the time limit!');
    });
});   
    }
});




bot.on('ready', () => { bot.user.setGame('Demonetising Ninja', 'https://www.twitch.tv/maybenima') })



bot.login(process.env.B0T_T0KEN);
