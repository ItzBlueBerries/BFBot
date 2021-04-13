const discord = require('discord.js');

module.exports = {
	name: 'nope',
	category: 'Simple',
	description: 'See the majestic neck of the stock Engineer himself.',
	run: async (bot, message) => {
		return message.channel.send('https://thumbs.gfycat.com/ConcreteGleefulGnu-mobile.mp4');
	}
}
