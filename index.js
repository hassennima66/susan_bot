const Discord = require('discord.js');
const bot = new Discord.Client();
/*const mysql = require("mysql");



var con = mysql.createConnection({
  host: process.env.H0ST,
  user: process.env.USERNAME1,
  password: process.env.PASSW0RD,
  database: process.env.DATABASE1
});

con.connect(err => {
  if (err) throw err;
  console.log("Connected to database");
});
*/

/* const sql = require("sqlite");
sql.open("./score.sqlite");


bot.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type !== "text") return;
    if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    } else {
      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    });
  });
});

*/













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
       var guildAmount = bot.guilds.size;
        message.channel.send({embed: {
        color: 15844367,
        description: guildAmount
}});
    }
});


bot.on('message', (message) => {
    if(message.content == '++invite'){
       var text11 = "Invite Susan To You Server Using This Link: <https://discordapp.com/oauth2/authorize?client_id=431045404516417537&scope=bot&permissions=3533888>";
        message.channel.send({embed: {
        color: 15844367,
        description: text11
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









bot.on('message', (message) => {
    if(message.content == '++susanhelp'){
        message.reply("Check your DM's or I demonetise you :smirk: "); 
        message.author.sendMessage(`
                                   
                                   ***Demonetise Commands:***


"++demonetise"

"++demonetiseme"

"++is flater gay"

"++will i ever be a youtuber"


***Others:***

"Hi/hi/Hello/hello" - responds with a message about demonetising you

"++invite" - responds with a link so you can invite susan to your server

"++susanbot" - shows this message in the DM's

"++count" - responds with the number of servers susan is demonetising

"susan what are you doing right now?" - susan tells you what she's doing/demonetising

***Created by Nima#0001 and Flater#0420***`)   
    }
});














bot.on('message', (message) => {
    if (message.content.indexOf("youtube.com/watch") !=-1) {
         message.channel.send({embed: {
        color: 15844367,
        description: "Ha! You just caused that video to be demonetised! :clap: "
}})
}
});


bot.on('message', (message) => {
    if (message.content.indexOf("youtu.be") !=-1) {
         message.channel.send({embed: {
        color: 15844367,
        description: "Ha! You just caused that video to be demonetised! :clap: "
}})
}
});






bot.on('message', function(message) {
    // Now, you can use the message variable inside
    if (message.content === "++updateservercount") { 
        var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
            bot.user.setGame('Demonetising ' +  bot.guilds.size + ' servers', 'https://www.twitch.tv/maybenima')
            .catch(console.error); // add error handling here
        }, 1 * 1000); 
    }
});    


//status = 'Demonetising ' + len(self.bot.servers) +  ' servers';
bot.on('ready', () => { bot.user.setGame('Demonetising ' +  bot.guilds.size + ' servers', 'https://www.twitch.tv/maybenima') })



bot.login(process.env.B0T_T0KEN);
