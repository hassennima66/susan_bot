const Discord = require('discord.js');
const bot = new Discord.Client();




/// KEEP BOT ONLINE
/// KEEP BOT ONLINE
/// KEEP BOT ONLINE
/// KEEP BOT ONLINE
/// KEEP BOT ONLINE
/// KEEP BOT ONLINE
/// KEEP BOT ONLINE
/// KEEP BOT ONLINE
/// KEEP BOT ONLINE
/// KEEP BOT ONLINE
/// KEEP BOT ONLINE
/// KEEP BOT ONLINE
/// KEEP BOT ONLINE


var http = require("http");
setInterval(function() {
    http.get("http://susan-bot.herokuapp.com");
}, 300000); // every 5 minutes (300000)

/// KEEP BOT ONLINE
/// KEEP BOT ONLINE
/// KEEP BOT ONLINE
/// KEEP BOT ONLINE
/// KEEP BOT ONLINE
/// KEEP BOT ONLINE
/// KEEP BOT ONLINE
/// KEEP BOT ONLINE
/// KEEP BOT ONLINE
/// KEEP BOT ONLINE
/// KEEP BOT ONLINE
/// KEEP BOT ONLINE
/// KEEP BOT ONLINE













/*
var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.H0ST,
  user: process.env.USERNAME1,
  password: process.env.PASSW0RD
});

con.connect(function(err) {
  if (err) throw err;
 
});






const mysql = require("mysql");








var host11 = process.env.H0ST;
var username11 = process.env.USERNAME1;
var password11 = process.env.PASSW0RD;
var database11 = process.env.DATABASE1;


var con = mysql.createConnection({
  host: process.env.H0ST,
  user: process.env.USERNAME1,
  password: process.env.PASSW0RD,
  database: process.env.DATABASE1
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});









con.connect(err => {
  if (err) throw err;
  console.log("Connected to database");
  con.query("SHOW TABLES", console.log);
});


 const sql = require("sqlite");
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



bot.on("guildCreate", (guild) => {
	message.channel.send({embed: {
        color: 15844367,
        description: `Hi ${guild.name}!\nThanks for inviting me.`
}});
});





bot.on('message', (message) => {
    if(message.content == '++info'){
        
      
      
      
      
      message.channel.send({embed: {
    color: 15844367,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Visit Official Site (Coming Soon)",
    url: "http://google.com",
    description: "Susan is a bot created for the sole purpose of demonetising creators on Discord.",
    fields: [{
        name: "Credits",
        value: "***Nima#0001 & Flater#0420***"
      },
      {
        name: "Bot Command Prefix + Vote For Bot",
        value: "Command Prefix is ++ (for example, ++help to show all possible commands.) You can [vote here.](https://discordbots.org/bot/431045404516417537/vote)"
      },
      {
        name: "Status",
        value: "Bot is currently active in " + bot.guilds.size + " servers"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "SusanBot Info "
    }
  }
});
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    }
});










bot.on('message', (message) => {
    if(message.content == '++tyrone'){
        message.reply('<:tyrone:406116209248043008>');   
    }
});


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
    if(message.content == 'showhost'){
        message.reply(process.env.H0ST);   
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
        var text = "The chance that your video will be demonetised is " + Math.floor((Math.random() * 100) + 1) + "% <:demonetized:406094437236867072>";
        message.channel.send({embed: {
        color: 15844367,
        description: text
}});
    }
});


bot.on('message', (message) => {
    if(message.content == '++except'){
        var text = "I rate that EXCEPT likes ass " + Math.floor((Math.random() * 100) + 1) + "% <a:butt:434505774866235403>";
        message.channel.send({embed: {
        color: 15844367,
        description: text
}});
    }
});


bot.on('message', (message) => {
    if(message.content == '++gay'){
        var text = "You are " + Math.floor((Math.random() * 100) + 1) + "% gay :gay_pride_flag:";
        message.channel.send({embed: {
        color: 15844367,
        description: text
}});
    }
});


/*


//WORKING FULLY BELOW
 =======================
//WORKING FULLY BELOW
 =======================
//WORKING FULLY BELOW
 =======================
//WORKING FULLY BELOW
 ======================= 
 
 
bot.on('message', (message) => {
    if (message.content.indexOf("++demonetise @") !=-1) {
		//var taggedmember = message.guild.members.get(args[0]);
		var taggedmember1 = message.mentions.members.first();
		var text = "The chance that " + taggedmember1 + "'s video will be demonetised is " + Math.floor((Math.random() * 100) + 1) + "% <:demonetized:406094437236867072>";
		message.channel.send({embed: {
        color: 15844367,
        description: text
}});
}
});


bot.on('message', (message) => {
    if(message.content == '++fuckrate'){
        var text = "You are " + Math.floor((Math.random() * 100) + 1) + "% fuckable.";
        message.channel.send({embed: {
        color: 15844367,
        description: text
}});
    }
});


*/


/////////START HERE





bot.on('message', (message) => {
    if (message.content.indexOf("++fuckrate ") !=-1) {
	message.react("406094437236867072")	 
	    if (message.content.length > 14) {
		
//var taggedmember1 = message.mentions.members.first();

var taggedmember1 = message.mentions.members.first();

		var text = (taggedmember1) + " is  " + Math.floor((Math.random() * 100) + 1) + "% fuckable.";
		
		var messagecontentxd = message.content;
		var text1 = messagecontentxd.replace('++demonetise ','');
		var textD = (text1) + " is " + Math.floor((Math.random() * 100) + 1) + "% fuckable.";

		
		
				if (taggedmember1 = "undefined") {
    
	
	message.channel.send({embed: {
        color: 15844367,
        description: textD
}});
	
	
} else {
   
   
   message.channel.send({embed: {
        color: 15844367,
        description: text
}});
   
   
} 
			 
		


}
}
});





/////////END HERE



*/


/////////START HERE





bot.on('message', (message) => {
    if (message.content.indexOf("++demonetise ") !=-1) {
	message.react("406094437236867072")	 
	    if (message.content.length > 14) {
		
//var taggedmember1 = message.mentions.members.first();

var taggedmember1 = message.mentions.members.first();

		var text = "The chance that" + (taggedmember1) + "'s video will be demonetised is " + Math.floor((Math.random() * 100) + 1) + "% <:demonetized:406094437236867072>";
		
		var messagecontentxd = message.content;
		var text1 = messagecontentxd.replace('++demonetise ','');
		var textD = "The chance that " + (text1) + "'s video will be demonetised is " + Math.floor((Math.random() * 100) + 1) + "% <:demonetized:406094437236867072>";

		
		
				if (taggedmember1 = "undefined") {
    
	
	message.channel.send({embed: {
        color: 15844367,
        description: textD
}});
	
	
} else {
   
   
   message.channel.send({embed: {
        color: 15844367,
        description: text
}});
   
   
} 
			 
		


}
}
});





/////////END HERE








bot.on('message', (message) => {
    if (message.content.indexOf("++gay") !=-1) {
	message.react("🏳️‍🌈")
		 if (message.content.length > 14) {
		
//var taggedmember1 = message.mentions.members.first();
var taggedmember1 = "someone";
taggedmember1 = message.mentions.members.first();

	    var text = taggedmember1 + " is " + Math.floor((Math.random() * 100) + 1) + "% gay :gay_pride_flag:";
		
		message.channel.send({embed: {
        color: 15844367,
        description: text
}});

}
}
});

















/*
bot.on('message', (message) => {
    if (message.content.indexOf("++demonetiseuser") !=-1) {
	var taggedmember = message.guild.members.get(args[0]);
	var text = "The chance that" + taggedmember + "'s video will be demonetised is " + Math.floor((Math.random() * 100) + 1) + "% <:demonetized:406094437236867072>";
        message.channel.send({embed: {
        color: 15844367,
        description: text
}}
}
});

*/


   
bot.on('message', (message) => {
    if(message.content == '++count'){
       var text = "I am currently demonetising " + bot.guilds.size + " servers/" + bot.users.size + " members. <:demonetized:406094437236867072>";
      bot.user.setActivity('Demonetising ' +  bot.guilds.size + ' servers/' + bot.users.size + ' members', 'https://www.twitch.tv/maybenima');
        message.channel.send({embed: {
        color: 15844367,
        description: text
}});
    }
});


bot.on('message', (message) => {
    if(message.content == '++invite'){
       var text11 = "[Click Here](https://discordapp.com/oauth2/authorize?client_id=431045404516417537&scope=bot&permissions=3533888) to invite Susan to your server.";
        message.channel.send({embed: {
        color: 15844367,
        description: text11
}});
    }
});



































bot.on('message', (message) => {
    if(message.content == '++meme'){
        var meme = Math.floor((Math.random() * 11) + 1);
       
      
      
      if (meme == 1) {
   message.channel.send("Here, take a susan meme:", {
            file: "https://cdn.discordapp.com/attachments/406440957148397579/432982562831466496/demonetizer.jpg" 
             });
}
       if (meme == 2) {
   message.channel.send("Here, take a susan meme:", {
            file: "https://cdn.discordapp.com/attachments/406440957148397579/432982701444694026/susan-no-ads-and-ads.png" 
             });
}
      
        if (meme == 3) {
   message.channel.send("Here, take a susan meme:", {
            file: "https://cdn.discordapp.com/attachments/406440957148397579/432982896253337601/meme-1.png" 
             });
}
      
       if (meme == 4) {
   message.channel.send("Here, take a susan meme:", {
            file: "https://cdn.discordapp.com/attachments/406440957148397579/432982269137911808/DEMONETIZED-CHANGE-MY-MIND.jpg" 
             });
}
      
      if (meme == 5) {
   message.channel.send("Here, take a susan meme:", {
            file: "https://img.buzzfeed.com/buzzfeed-static/static/2014-10/30/12/enhanced/webdr02/enhanced-9903-1414686189-10.jpg" 
             });
}
      
      if (meme == 6) {
   message.channel.send("Here, take a susan meme:", {
            file: "https://i.ytimg.com/vi/Vg4NJ_oyyL0/maxresdefault.jpg" 
             });
}
      if (meme == 7) {
   message.channel.send("Here, take a susan meme:", {
            file: "https://i.imgur.com/p0L5nMt.png" 
             });
}
      
      
            if (meme == 8) {
   message.channel.send("Here, take a susan meme:", {
            file: "https://i.ytimg.com/vi/Ng-1gpPSKhU/0.jpg" 
             });
}
      
      
            if (meme == 9) {
   message.channel.send("Here, take a susan meme: https://www.youtube.com/watch?v=ixvlu29qpvg", {
             });
}      
      
      
            if (meme == 10) {
   message.channel.send("Here, take a susan meme: https://www.youtube.com/watch?v=1DrYryh1oBU", {
             });
}      
      
      
            if (meme == 11) {
   message.channel.send("Here, take a susan meme:", {
            file: "https://cdn.discordapp.com/attachments/387281775996698646/434786708752433161/PhotoWarp__2018-04-14_19-46-56.gif" 
             });
}    
      
      
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
           description: "The chance that your video will be demonetised is " + x + "%"
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
  message.channel.awaitMessages(response => response.content.toLowerCase() == 'yes' || response.content == 'no' || response.content == 'maybe', {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
     // message.channel.send(`You have been demonetised as your response message was: ${collected.first().content}`);
      if (collected.first().content == 'yes') {
		  message.channel.send({embed: {
        color: 15844367,
        description: "You have been demonetised, congratulations! <:demonetized:406094437236867072> :joy: "
}})
	  }
	  else if(collected.first().content == 'no') {
		  message.channel.send({embed: {
        color: 15844367,
        description: "No is not acceptable as I am Susan so you have been demonetised anyway, congratulations! <:demonetized:406094437236867072> :joy: "
}})
	  }
	  else if(collected.first().content == 'maybe') {
		  message.channel.send({embed: {
        color: 15844367,
        description: "You have to choose Yes or No. Maybe is not an answer. <:whatamigonnado:409287809325727744> "	  
}}) 
	  }     
    })
    .catch(() => {
         message.channel.send({embed: {
        color: 15844367,
        description: "There was no response in 30 seconds, you have been demonetised anyway mate!!! <:demonetized:406094437236867072> :point_right: :joy: :point_right:<:demonetized:406094437236867072> "
}})      
   //   message.channel.send('There was no response in 30 seconds, you have been demonetised anyway mate!!!  :point_right: :joy: :point_right: ');
    });
});   
    }
});

/*




bot.on('message', (message) => {
    var text1 = "youtube.com";
    if (message.indexOf(text1) >=0) {
 message.channel.send('You have made me demonetise that video, congratulations fool! :joy: ');
  
 
 }
});

 */








/*
bot.on('message', (message) => {
    if(message.content == '++susanhelp'){
        message.reply("Check your DM's or I demonetise you :smirk: "); 
        message.author.sendMessage(`
                                   
                                   ***Demonetise Commands:***


"++demonetise"

"++demonetiseme"


***Others:***

"Hi/hi/Hello/hello" - responds with a message about demonetising you

"++meme" - responds with a Susan meme

"++invite" - responds with a link so you can invite susan to your server

"++susanbot" - shows this message in the DM's

"++count" - responds with the number of servers susan is demonetising

"susan what are you doing right now?" - susan tells you what she's doing/demonetising

**Bot is still work in progress as it is a new bot and we will be adding lots more to it in the future but for now enjoy what Susan has already!**

***Created by Nima#0001 and Flater#0420***`)   
    }
});


*/





bot.on('message', (message) => {
    if(message.content == '++help'){
        message.channel.send({"embed": {
    "color": 15844367,
    "timestamp": "2018-04-12T11:42:53.008Z",
    "footer": {
      "text": "Susan Bot Help Command Requested at:"
    },
    "thumbnail": {
      "url": "https://cdn.discordapp.com/emojis/406094437236867072.png?v=1"
    },
    "image": {
      "url": "https://i.imgur.com/YrI7EJl.png"
    },
    "author": {
      "name": "Susan Bot Commands",
      "url": "https://discordapp.com",
      "icon_url": "https://cdn.discordapp.com/icons/432878954660102156/84e09dd9ac1b240e93be0d4ca4a88aa5.png"
    },
    "fields": [
      {
        "name": "**Demonetise Commands**",
        "value": "*++demonetise, ++demonetiseme*"
      },
      {
        "name": "**Others:**",
        "value": "Hi/hi/Hello/hello, susan what are you doing right now?, ++meme, ++invite, ++count, ++info, ++help, ++tyrone, ++gay "
      },
      {
        "name": "**Youtube Links**",
        "value": "When a Youtube link is posted in the chat, you are show this:"
      }

    ]
  }
}
        
        
        
        );   
    }
});









/*

bot.on('message', (message) => {
    if(message.content == '++help'){
       
        message.reply(`
                                   
***DEMONETISE COMMANDS:***


"++demonetise"

"++demonetiseme"



***OTHERS:***

"Hi/hi/Hello/hello" - responds with a message about demonetising you

"++meme" - responds with a Susan meme

"++invite" - responds with a link so you can invite susan to your server

"++susanbot" - shows this message in the DM's

"++count" - responds with the number of servers susan is demonetising

"susan what are you doing right now?" - susan tells you what she's doing/demonetising

**Bot is still work in progress as it is a new bot and we will be adding lots more to it in the future but for now enjoy what Susan has already!**

***Created by Nima#0001 and Flater#0420***`)   
    }
});

*/









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






bot.on('message', (message) => {
    if (message.content.indexOf("discord.gg") !=-1) {
         message.channel.send({embed: {
        color: 15844367,
        description: "Ha! You just made me cause a shooting in that server! <:bitconneee:409287324300738571> "
}})
}
});


bot.on('message', function(message) {
    // Now, you can use the message variable inside
    if (message.content === "++updateservercount") { 
        var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
            bot.user.setActivity('Demonetising ' +  bot.guilds.size + ' servers/' + bot.users.size + ' members', 'https://www.twitch.tv/maybenima')
            .catch(console.error); // add error handling here
        }, 1 * 1000); 
    }
});    




var http = require("http");
setInterval(function() {
    bot.user.setActivity('Demonetising ' +  bot.guilds.size + ' servers/' + bot.users.size + ' members', 'https://www.twitch.tv/maybenima');
}, 3000); // every 5 minutes (300000)

//status = 'Demonetising ' + len(self.bot.servers) +  ' servers';
bot.on('ready', () => { bot.user.setActivity('Demonetising ' +  bot.guilds.size + ' servers/' + bot.users.size + ' members', 'https://www.twitch.tv/maybenima') })


bot.login(process.env.B0T_T0KEN);
