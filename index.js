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




   
bot.on('message', (message) => {
    if(message.content == '++count'){
        var text = len(self.bot.servers);
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
          message.channel.send({embed: {
        color: 15844367,
        description: "Would you like to be demonetised?"
}})
.then(() => {
  message.channel.awaitMessages(response => response.content.toLowerCase() === 'yes', {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
     // message.channel.send(`You have been demonetised as your response message was: ${collected.first().content}`);
          message.channel.send({embed: {
        color: 15844367,
        description: "You have been demonetised, congratulations! :joy: "
}})      
    })
    .catch(() => {
         message.channel.send({embed: {
        color: 15844367,
        description: "There was no response in 30 seconds, you have been demonetised anyway mate!!! :point_right: :joy: :point_right: "
}})      
   //   message.channel.send('There was no response in 30 seconds, you have been demonetised anyway mate!!!  :point_right: :joy: :point_right: ');
    });
});   
    }
});

/*
bot.on("message", (message) => {
if (message.includes('youtube.com' , 'youtu.be' , 'watch?v=')
      message.channel.send('You have made me demonetise that video, congratulations fool! :joy: ');





bot.on('message', (message) => {
    var text1 = "youtube.com";
    if (message.indexOf(text1) >=0) {
 message.channel.send('You have made me demonetise that video, congratulations fool! :joy: ');
  
 
 }
});

 */



    
//status = 'Demonetising ' + len(self.bot.servers) +  ' servers';
//bot.on('ready', () => { bot.user.setGame(status, 'https://www.twitch.tv/maybenima') })



bot.login(process.env.B0T_T0KEN);
