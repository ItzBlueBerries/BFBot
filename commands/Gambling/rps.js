const global = require('../../global.json');

const discord = require('discord.js');

module.exports = {
	name: 'rps',
	category: 'Gambling',
	description: 'Start a Rock, Paper, Scissors battle.',
	usage: '[rock | paper | scissors]',
	run: async (bot, message, args) => {
		let embed = new discord.MessageEmbed()
			.setColor(global.embedColor);
		if (!args[0]) {
			embed.setDescription("Who's up for a throw? Send either `rock`, `paper` or `scissors` as a parameter.");
			return message.channel.send(embed);
		}
		if (args[0] == 'shoot') {
			embed.setTitle('How could you? How... could you?');
			return message.channel.send(embed);
		}
		if (args[0] != 'rock' && args[0] != 'paper' && args[0] != 'scissors') {
			embed.setDescription('Only `rock`, `paper` and `scissors` are accepted parameters.');
			return message.channel.send(embed);
		}
		let randomInt = Math.floor(Math.random() * 3);
		if (randomInt == 0) {
			if (args[0] == 'rock')
				embed.setTitle('✊ Tie! Try again?');
			else if (args[0] == 'paper')
				embed.setTitle('✊ Damn this game to blazes.');
			else
				embed.setTitle('✊ Rock beats scissors, son!');
		} else if (randomInt == 1) {
			if (args[0] == 'rock')
				embed.setTitle('✋ Paper covers rock, boss!');
			else if (args[0] == 'paper')
				embed.setTitle('✋ Tie! Try again?');
			else
				embed.setTitle('✋ You low-down scoundrel.');
		} else {
			if (args[0] == 'rock')
				embed.setTitle('✌️ Well, that sours my milk.');
			else if (args[0] == 'paper')
				embed.setTitle('✌️ Scissors cut paper, hoss!');
			else
				embed.setTitle('✌️ Tie! Try again?');
		}
		return message.channel.send(embed);
	}
}
