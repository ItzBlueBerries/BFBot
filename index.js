const botconfig = require('./botconfig.json');
const global = require('./global.json');

const discord = require('discord.js');

const bot = new discord.Client({disableEveryone: true});

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();

['command'].forEach(handler => {
	require(`./handlers/${handler}`)(bot);
});

bot.on('ready', async () => {
    console.log(`${bot.user.username} is online.`);
    status = '>help | random slogans when';
    bot.user.setActivity(status, {type: 'PLAYING'});
});

bot.on('message', async message => {
    if (message.author.bot || message.channel.type === 'dm')
		return;

    if (!message.guild)
		return;

    if (!message.content.startsWith(botconfig.prefix) || message.content.startsWith(botconfig.prefix + ' '))
		return;

    if (!message.member)
		message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(botconfig.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0)
		return;

    // Get the command
    let command = bot.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command)
		command = bot.commands.get(bot.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) {
		console.log(`Running ${botconfig.prefix}${command.name} for ${message.author.username} in ${message.guild.name}.`);
		command.run(bot, message, args);
	}
})

bot.login(botconfig.token);