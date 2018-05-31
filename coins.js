const Discord = require('discord.js');
const client = new Discord.Client();
const SQLite = require("sqlite3");
//const sql = new SQLite('./scores.sqlite');

client.on("ready", () => {
    console.log("I am ready!");
   });
  
  client.on('message', (message) => {
    if(message.content == '++test'){
        var text = "xd";
        message.channel.send({embed: {
        color: 15844367,
        description: text
}});
    }
});





client.on('message', (message) => {
  if(message.content.startsWith("++reset")){

      if(message.author.id == "275604639179603969"){

        var idd = message.content.replace("++reset","");
        idd = parseInt(idd);


 
        var fs = require('fs');
        fs.writeFile("coins/" + message.author.id + ".txt", "0", function(err) {
          if(err) {
              return console.log(err);
          }
          console.log("COINS RESET USER: ------- " + idd + "  NOW HAS 0");
      });
  
/*
fs.unlink("coins/" + idd + ".txt", function(error) {
  
  
});


        fs.writeFile("coins/" + idd + ".txt", "0", function(err) {
          if(err) { 
              return console.log(err);
          }
          console.log("COINS RESET USER: ------- " + idd + "  NOW HAS ");
      });
*/

        var text = "Reset User " + idd + ", now has 0 coins.";
        //var text = idd;
        message.channel.send({embed: {
        color: 15844367,
        description: text
  }});

  

      }
  }
});


    


//GET ONE COIN FREE
  client.on('message', (message) => {
    if(message.content == '++free'){


      
      var fs = require('fs');
      var data;


  fs.readFile('coins/' + message.author.id + '.txt', {encoding: 'utf-8'}, function(err,data){
    data == parseInt(data);
    var amountToAdd = 1;
    var x = parseInt(amountToAdd);
    var y = parseInt(data);
    var newCoins =  x + y;
    //newCoins = parseInt(newCoins);

     fs.writeFile("coins/" + message.author.id + ".txt", newCoins, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("COINS ++FREE : ------- ADDED 1 COIN TO  " + message.author.id + " SUCCESS");
  });

  message.channel.send({embed: {
      color: 15844367,
      description: "Here, take a free dollar, you now have $" + newCoins
}}); });
 }
});




client.on('message', (message) => {
  if(message.content.startsWith("++bet")){
    var amount2Bet = message.content.replace("++bet","")
     amount2Bet = message.content.replace("-","")
     amount2Bet  = amount2Bet.replace(/\D/g,'');
    numberGenerated = Math.floor(Math.random() * 3);

    var fs = require('fs');
    fs.readFile('coins/' + message.author.id + '.txt', {encoding: 'utf-8'}, function(err,coinsFetched){
      coinsFetched = parseInt(coinsFetched);
      amount2Bet = parseInt(amount2Bet);
      if (coinsFetched >= amount2Bet){

        if (numberGenerated == 1){


          var fs = require('fs');
          var data;
          fs.readFile('coins/' + message.author.id + '.txt', {encoding: 'utf-8'}, function(err,data){
            data == parseInt(data);
            var amountToAdd = 1;
            var x = parseInt(amountToAdd);
            var y = parseInt(data);
            var newCoins =  y - amount2Bet;
            //newCoins = parseInt(newCoins);
        
             fs.writeFile("coins/" + message.author.id + ".txt", newCoins, function(err) {
              if(err) { 
                  return console.log(err);
              }
              console.log("COINS LOST ++bet : ------- " + message.author.id + "  BET " + amount2Bet + " AND  NOW HAS " + newCoins);
          });
        
          message.channel.send({embed: {
              color: 15844367,
              description: "🔴 YOU LOST $" + amount2Bet + ". You bet $" +  amount2Bet + " and you now have $" + newCoins + "."
        }}); });
    
        
    
        };
    
    
        if (numberGenerated == 2){
    
    
          var fs = require('fs');
          var data;
          fs.readFile('coins/' + message.author.id + '.txt', {encoding: 'utf-8'}, function(err,data){
            data == parseInt(data);
            var amountToAdd = 1;
            var x = parseInt(amountToAdd);
            var y = parseInt(data);
            var newCoins =  y - amount2Bet;
            //newCoins = parseInt(newCoins);
        
             fs.writeFile("coins/" + message.author.id + ".txt", newCoins, function(err) {
              if(err) { 
                  return console.log(err);
              }
              console.log("COINS LOST ++bet : ------- " + message.author.id + "  BET " + amount2Bet + " AND  NOW HAS " + newCoins);
          });
        
          message.channel.send({embed: {
              color: 15844367,
              description: "🔴 YOU LOST $" + amount2Bet + ". You bet $" +  amount2Bet + " and you now have $" + newCoins + "."
        }}); });
    
        
    
        };
    
    
        if (numberGenerated == 0){
    
    
          var fs = require('fs');
          var data;
          fs.readFile('coins/' + message.author.id + '.txt', {encoding: 'utf-8'}, function(err,data){
            data == parseInt(data);
            var amountToAdd = 2;
            var x = parseInt(amountToAdd);
            var y = parseInt(amount2Bet);
            var newCoins1 =  y * x;
            var xd = parseInt(newCoins1);
            var xdd = parseInt(data);
            var newCoins = xd + xdd; 
            //var newCoins = parseInt(newCoins1 + data);
            
            //newCoins = parseInt(newCoins);
        
             fs.writeFile("coins/" + message.author.id + ".txt", newCoins, function(err) {
              if(err) { 
                  return console.log(err);
              }
              console.log("COINS WIN ++bet : ------- " + message.author.id + "  NOW HAS " + newCoins);
          });
        
          message.channel.send({embed: {
              color: 15844367,
              description: " <:green_circle:451768287613943809> YOU WON $" + newCoins1 + ". You bet $" +  amount2Bet + " and you now have $" + newCoins
        }}); });
    
        
    
        };


      } else {

        message.channel.send({embed: {
          color: 15844367,
          description: "Yeah nice try buddy, you don't have enough coins to do that. <:rip:451736572627386388>"
    }});
      

      } 
    });


    



  }});



/*


var text = "Soon buddy" + amount2Bet + " " + numberGenerated;
      message.channel.send({embed: {
      color: 15844367,
      description: text
}});



*/




//CREATES NEW FILES FOR COINS
client.on('message', (message) => {
  var fs = require('fs');
    if (fs.existsSync('coins/' + message.author.id + '.txt')) { 
  } else{
    fs.writeFile("coins/" + message.author.id + ".txt", "0", function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("COINS (NEW): ------- CREATED FILE FOR " + message.author.id + " SUCCESS");
  }); 
  } }   
);










//SHOWS BALANCE
//SHOWS BALANCE
  client.on('message', (message) => {
    if(message.content == '++balance'){
      var fs = require('fs');
      if (fs.existsSync('coins/' + message.author.id + '.txt')) {
        fs.readFile('coins/' + message.author.id + '.txt', 'utf8', function(err, data) {  
          if (err) throw err;
          console.log("COINS: -------" + message.author.id + " REQUESTED TO LOOK AT " + data + " coins");

          if(data === "0") {
            var text = "You have $" + data + " <:demonetised:450629746695340032>";
         }else{
          var text = "You have $" + data + " <:monetised:450629548598624257>";
         };
              message.channel.send({embed: {
              color: 15844367,
              description: text
      }});
      });
    }else{
      var fs = require('fs');
fs.writeFile("coins/" + message.author.id + ".txt", "0", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("COINS (NEW): ------- CREATED FILE FOR " + message.author.id + " SUCCESS");
});   }  }
});







//SHOWS ID
client.on('message', (message) => {
  if(message.content == '++id'){
    var fs = require('fs');
  var text = message.author.id;
      message.channel.send({embed: {
      color: 15844367,
      description: text
}});} });

/*
//status = 'Demonetising ' + len(self.bot.servers) +  ' servers';
client.on('ready', () => { client.user.setActivity('Demonetising ' +  client.guilds.size + ' servers/' + client.users.size + ' members', 'https://www.twitch.tv/maybenima') })
client.login('');
*/
