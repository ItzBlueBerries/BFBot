const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});


bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();





["command"].forEach(handler => {
  require(`./handlers/${handler}`)(bot)
})

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online.`)
    status = "b!help for commands!"
      bot.user.setActivity(status, {type: "PLAYING"});
})

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    if(!message.guild) return;
    if(botconfig.prefix === null) prefix = botconfig.prefix
    
    
    if(!message.content.startsWith(botconfig.prefix)) return;
    
        // If message.member is uncached, cache it.
      if (!message.member) message.member = await message.guild.fetchMember(message);
  
      const args = message.content.slice(botconfig.prefix.length).trim().split(/ +/g);
      const cmd = args.shift().toLowerCase();
      
      if (cmd.length === 0) return;
      
      // Get the command
      let command = bot.commands.get(cmd);
      // If none is found, try to find it by alias
      if (!command) command = bot.commands.get(bot.aliases.get(cmd));
  
      // If a command is finally found, run the command
      if (command) 
       command.run(bot, message, args);
    
    
   })

bot.login(botconfig.token);