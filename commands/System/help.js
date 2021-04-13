const global = require('../../global.json');
// const index = require('../../index.js'); May need this include

const discord = require('discord.js');

module.exports = {
	name: 'help',
	category: 'System',
	description: 'View the commands hub and access various categories of commands.',
	usage: 'help {category | command}',
	run: async (bot, message, args) => {
		// Basically copying all this code from https://discordjs.guide/command-handling/adding-features.html#a-dynamic-help-command for now
		const data = [];
		const { commands } = message.client;
		if (!args.length) {
			data.push('Here\'s a list of all my commands:');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('I\'ve sent you a DM with all my commands!');
				})
				.catch(error => {
					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
					message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
				});
		}
		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
		if (!command)
			return message.reply('that\'s not a valid command!');
		data.push(`**Name:** ${command.name}`);
		if (command.aliases)
			data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description)
			data.push(`**Description:** ${command.description}`);
		if (command.usage)
			data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);
		message.channel.send(data, { split: true });
		
		// let category = null;
		// let command = null;
		// for (all commands)
			// if args[0] == command.category
			// category = args[0]
			// if args[0] == command.name
			// command = args[0]
		// if (command != null)
			// find command with same name
			// display command help in embed
		// if (category != null)
			// let categoryCommands = null;
			// for (all commands)
				// if (command.category == category)
					// push command to categoryCommands
			// display categoryCommands in embed
		// else
			// let categories = null;
			// for (all commands)
				// if (category is not in categories)
					// push category to categories
			// display categories in embed
	}
}
