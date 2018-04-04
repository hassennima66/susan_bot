const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('message', (message) => {
    if(message.content == 'Hi'){
        message.reply('Kys pls :joy: :ok_hand:');   
    }
});
bot.on('message', (message) => {
    if(message.content == 'dab'){
        message.reply("plz don't..");   
    }
});
bot.on('message', (message) => {
    if(message.content == 'flater'){
        message.channel.sendMessage('oh pls... that gay fag...');   
    }
});

bot.on('message', (message) => {
    if(message.content == 'kys'){
        message.reply('you first you cuck');   
    }
});

bot.on('message', (message) => {
    if(message.content == '++rate my gayness'){
        var x = Math.floor((Math.random() * 100) + 1);
        message.reply('you are roughly ' + x + '% gay');   
    }
});

bot.on('message', (message) => {
    if(message.content == '++how rich will i be in the future'){
        var x = Math.floor((Math.random() * 1000000) + 1);
        message.reply('u will have $ ' + x + ' NET worth');   
    }
});

bot.on('message', (message) => {
    if(message.content == '++is flater gay'){
        message.reply('u dont say u cunt... flater DOUBLE gay');   
    }
});


bot.on('message', (message) => {
    if(message.content == '++will i ever be a youtuber'){
        var yes_or_no = Math.floor(Math.random() * 2);
        if (yes_or_no == 0) {
            message.reply('dream on u fat hippo, maybe go works at mcdees or something'); 
        }
        if (yes_or_no == 1) {
            message.reply('you will be a utuber eksdee'); 
        }
    }
});

bot.on('message', (message) => {
    if(message.content == 'lol'){
        message.channel.send('https://cdn.discordapp.com/attachments/387354309278564364/424672265855172628/emote.png');   
    }   
});

bot.on('message', (message) => {
    if(message.content == '++invite'){
        message.channel.send('<https://discord.me/nima>');   
    }   
});


bot.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === 'what is my avatar') {
      // Send the user's avatar URL
      message.reply(message.author.avatarURL);
    }
  });


  bot.on('message', (message) => {
    if(message.content == '++pjp'){
        message.channel.send(':point_right: :joy: :point_right:');   
    }
});

  bot.on('message', (message) => {
    if(message.content == '++help'){
        message.reply("Check your DM's :smirk: "); 
        message.author.sendMessage(`
                                   
                                   ***Auto Responder:***

"dab" - why are you even alive? just drink bleach or something.. cunt

"flater" - oh pls... that gay fag...

"kys" - you first you cuck


***Fun:***

"++rate my gayness"

"++how rich will i be in the future"

"++is flater gay"

"++will i ever be a youtuber"


***Others:***

"lol" - responds with an image

"what is my avatar" - responds with an image link to your avatar




***MORE COMING SOON***`)   
    }
});


//
bot.on('ready', () => { bot.user.setGame('++help') })


bot.login(process.env.B0T_T0KEN);
