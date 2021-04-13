const global = require("../../global.json");
// const index = require("../../index.js"); May need this include

const discord = require("discord.js");

module.exports = {
	name: "help",
	category: "System",
	description: "View the commands hub and access various categories of commands.",
	usage: "help {category}",
	run: async (client, message, args) => {
		// let category = null;
		// for (all commands)
			// if args[0] == command.category
			// category == args[0]
		// if (category == null)
			// for (all commands)
				// fill an array with categories
			// display the categories in an embeds
		// else
			// for (all commands)
				// if (command.category == category)
					// add command and description to embeds
			// display embed
	}
}
