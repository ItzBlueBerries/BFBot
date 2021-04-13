const global = require('../../global.json');

const discord = require('discord.js');

module.exports = {
	name: '8ball',
	category: 'Simple',
	description: 'Get your fortune told from the Magic 8-Ball.',
	run: async (bot, message) => {
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
			.setTitle('🎱 ' + responses[Math.floor(Math.random() * 20)])
			.setColor(global.embedColor);
		message.channel.send(embed);
	}
}
