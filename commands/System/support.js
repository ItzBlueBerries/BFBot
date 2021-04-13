const global = require('../../global.json');

const discord = require('discord.js');

module.exports = {
	name: 'support',
	category: 'System',
	description: 'Contact the bot creators to make suggestions and bug reports.',
	run: async (bot, message) => {
		let embed = new discord.MessageEmbed()
			.setColor(global.embedColor)
			.setTitle('Support Center')
			.setDescription(`*He beeps, he bleeps, but most of all, he's sweet.*\n\nBFBot is being developed by Fruitsy and Jack5 to be a general purpose Discord bot for recreational use.`)
			.addFields(
				{name: 'Fruitsy - Programmer', value: '`Fruitsy#6513`'},
				{name: 'Jack5 - Programmer and hosting', value: '`Jack5#1720` https://discord.gg/scRdSXY'}
			)
			// .setThumbnail(bot.user.displayAvatarURL) - DOESN'T WORK FOR SOME REASON!
			.setFooter(`Hosted on 5th Planet | Los Angeles`);
		message.channel.send(embed);
	}
}
