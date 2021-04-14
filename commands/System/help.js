const botconfig = require(`../../botconfig.json`);
const global = require(`../../global.json`);

const discord = require(`discord.js`);

module.exports = {
	name: `help`,
	category: `System`,
	description: `View the commands hub and access various categories of commands.`,
	usage: `{category | command}`,
	author: `Discord.js`,
	run: async (bot, message, args) => {
		const { commands } = message.client;
		const unique = (value, index, self) => {
			return self.indexOf(value) === index;
		}
		let categories = commands.map(c => c.category).filter(unique);
		let embed = new discord.MessageEmbed()
			.setColor(global.embedColor);
		if (!args[0]) {
			embed.setTitle(`FuncFriend Commands Hub`)
				.setDescription(`This bot's commands are split up into separate categories. Type \`${botconfig.prefix}help [category]\` to see the appropriate commands for each.`);
			categories.forEach(function(category) {
				embed.addFields({
					name: `**${category} Commands**`,
					value: `\`${botconfig.prefix}help ${category.toLowerCase()}\``
				});
			});
			return message.channel.send(embed);
		}
		if (categories.toLowerCase().includes(args[0])) {
			// let categoryCommands = commands.find(c => c.category && c.category.toLowerCase() == args[0]);
			// console.log(categoryCommands);
		}
		// if (commands.map(c => c.name).includes(args[0])) {
		// }
		
		// Basically copying all this code from https://discordjs.guide/command-handling/adding-features.html#a-dynamic-help-command for now
		/* const data = [];
		const { commands } = message.client;
		if (!args.length) {
			data.push(`Here's a list of all my commands:`);
			data.push(commands.map(command => command.name).join(`, `));
			data.push(`\nYou can send \`${botconfig.prefix}help [command name]\` to get info on a specific command!`);
			return message.channel.send(data, { split: true });
		}
		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
		if (!command)
			return message.reply(`That's not a valid command!`);
		data.push(`**Name:** ${command.name}`);
		if (command.aliases)
			data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description)
			data.push(`**Description:** ${command.description}`);
		if (command.usage)
			data.push(`**Usage:** \`${botconfig.prefix}${command.name} ${command.usage}\``);
		if (command.author)
			data.push(`**Author:** ${command.author}`);
		message.channel.send(data, { split: true }); */
		
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
