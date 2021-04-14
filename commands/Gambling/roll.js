const global = require('../../global.json');

const discord = require('discord.js');

module.exports = {
	name: 'roll',
	category: 'Gambling',
	description: 'Roll a customisable die. Enter a __number__ to set how many sides the die has.',
	usage: '[number]',
	author: 'Jack5',
	run: async (bot, message, args) => {
		let embed = new discord.MessageEmbed()
			.setColor(global.embedColor);
		if (!args[0]) {
			let randomInt = Math.floor(Math.random() * 6) + 1;
			embed.setTitle('🎲 You rolled a ' + randomInt + '.');
			return message.channel.send(embed);
		}
		let dieSize = parseInt(args[0]);
		if (isNaN(dieSize)) {
			embed.setDescription("You didn't properly specify the number of faces the die should have.");
			return message.channel.send(embed);
		}
		if (dieSize < 1) {
			embed.setDescription('The size of the die must be 1 or greater.');
			return message.channel.send(embed);
		}
		let randomInt = Math.floor(Math.random() * dieSize) + 1;
		embed.setTitle('🎲 You rolled a ' + randomInt + '.');
		return message.channel.send(embed);
	}
}
