const botconfig = require("./botconfig.json");
const embedColor = '51a5eb';

const discord = require("discord.js");

const bot = new discord.Client({disableEveryone: true});

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();

["command"].forEach(handler => {
	require(`./handlers/${handler}`)(bot)
})

bot.on("ready", async () => {
<<<<<<< HEAD
    console.log(`${bot.user.username} is online.`)
    status = "Try again later! | >help"
      bot.user.setActivity(status, {type: "PLAYING"});
=======
	console.log(`${bot.user.username} is online.`)
	status = ">help"
	bot.user.setActivity(status, {type: "PLAYING"});
>>>>>>> 55acb4ccfa12ab49061771751b515115b403349e
})

bot.on("message", async message => {
    if (message.author.bot || message.channel.type === "dm")
		return;
    if(!message.guild)
		return;
    if (botconfig.prefix === null)
		prefix = botconfig.prefix;
    if (!message.content.startsWith(botconfig.prefix))
		return;

	// If message.member is uncached, cache it.
    if (!message.member)
		message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(botconfig.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0)
		return;

    // Get the command
    let command = bot.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
		command.run(bot, message, args);
})

bot.login(botconfig.token);