require('dotenv').config()

const Discord = require('discord.js');

const prefix = '!';

const client= new Discord.Client({
    allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: true,
    },
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_PRESENCES",
        "GUILD_MEMBERS",
        "GUILD_MESSAGE_REACTIONS"
    ],
});

client.on("ready", () => {
console.log("Bot is online!")

});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (command === 'test'){
        message.channel.send('The bot is working')
        message.delete()
    }
})

/*client.on('messageCreate', message =>{
    if (message.content.includes("https://")) {
        //message.channel.send('The bot is working')
        console.log("deleted " + message.content + " from " + message.author)
        message.channel.send("Sorry, no links here")
        message.delete(1)
    }

 
})  */

/*   if (message.content.includes("https://")) {
        console.log("deleted " + message.content + " from " + message.author)
        message.delete(1);
        message.channel.send("No links here, " + message.author)
    }*/

/*client.on("guildCreate", guild => {
    console.log("Nowy serwer, " + guild.name)
    client.user.setGame(client.guilds.size + " servers / al!help")
});
  
client.on("guildDelete", guild => {
    console.log("usuniety, " + guild.name)
    client.user.setGame(client.guilds.size + " servers / al!help")
});*/
  

client.login(process.env.BOT_TOKEN)
