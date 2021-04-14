const global = require('../../global.json');

const discord = require('discord.js');

module.exports = {
	name: 'poll',
	category: 'Custom',
	description: "Allow other users to vote on a previously discussed topic. You may optionally add a number of __choices__ between 1 and 10.",
	usage: "{choices}",
	author: 'Jack5',
	run: async (bot, message, args) => {
		if (!args[0] || isNaN(parseInt(args[0]))) {
			await message.react('✅');
			await message.react('❎');
			return true;
		}
		let argsInt = parseInt(args[0]);
		if (argsInt < 1 || argsInt > 10) {
			let embed = new discord.MessageEmbed()
				.setColor(global.embedColor)
				.setDescription('Only a number of choices between 1 and 10 is accepted.');
			return message.channel.send(embed);
		}
		let choices = ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '9⃣', '🔟'];
		for (let i = 0; i < argsInt; i++) {
			await message.react(choices[i]);
		}
		return true;
	}
}
