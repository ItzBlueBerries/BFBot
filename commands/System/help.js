const global = require('../../global.json');
// const index = require('../../index.js'); May need this include

const discord = require('discord.js');

module.exports = {
	name: 'help',
	category: 'System',
	description: 'View the commands hub and access various categories of commands.',
	usage: 'help {category | command}',
	run: async (bot, message, args) => {
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
