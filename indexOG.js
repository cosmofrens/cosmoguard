require('dotenv').config()

const {Client} = require ('discord.js') //defining stuff 
const client = new Client({ 
    allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: true,
    },
    
    intents: ["GUILD_MESSAGES", "GUILDS", "GUILD_PRESENCES",
"GUILD_MEMBERS",
"GUILD_MESSAGE_REACTIONS"] })

client.on('ready', () => { //shows that whether your bot is online or not
		console.log(`
◊═══════════════════════════◊
${client.user.username} is now online.
Name : ${client.user.tag}
Channels : ${client.channels.cache.size}
◊═══════════════════════════◊
`)
});
client.on("messageCreate", async message => { //if you are using djsV13 then change "message" to "messageCreate"
  
         const { MessageEmbed } = require ('discord.js') //sending the message in embed form
    //     if(message.guild.ownerID || message.member.hasPermission("MANAGE_MESSAGES") || message.author.bot) return; //People who can bypass
         if(message.content.includes("https://") || message.content.includes("http://") || message.content.includes("discord.gg/")) { 
         message.delete()//backlisting links and deleting it
         message.channel.send("Sorry, no links here") 
        }
})

client.login(process.env.BOT_TOKEN);