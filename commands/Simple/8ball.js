const global = require('../../global.json');

const discord = require('discord.js');

module.exports = {
	name: '8ball',
	category: 'Simple',
	description: 'Get your fortune told from the Magic 8-Ball.',
	usage: '[question]',
	run: async (bot, message, args) => {
		let embed = new discord.MessageEmbed()
			.setColor(global.embedColor);
		if (!args[0]) {
			embed.setDescription('You must provide a question to receive wisdom: `${global.prefix} [question]`');
			return message.channel.send(embed);
		}
		let responses = [
			'It is certain.',
			'It is decidedly so.',
			'Without a doubt.',
			'Yes - definitely.',
			'You may rely on it.',
			'As I see it, yes.',
			'Most likely.',
			'Outlook good.',
			'Yes.',
			'Signs point to yes.',
			'Reply hazy, try again.',
			'Ask again later.',
			'Better not tell you now.',
			'Cannot predict now.',
			'Concentrate and ask again.',
			"Don't count on it.",
			'My reply is no.',
			'My sources say no.',
			'Outlook not so good.',
			'Very doubtful.'
		];
		let embed = new discord.MessageEmbed()
			.setTitle('🎱 ' + responses[Math.floor(Math.random() * responses.length)])
			.setColor(global.embedColor);
		return message.channel.send(embed);
	}
}
