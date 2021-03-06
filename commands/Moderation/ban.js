const global = require(`../../global.json`);

const discord = require(`discord.js`);

module.exports = {
	name: `ban`,
	category: `Moderation`,
	description: `idkwhattoaddherernsonothingherehaehfrayyayayasanoasnauigjajfano`,
	usage: `[@mention] [reason]`,
	author: `Fruitsy`,
	run: async (bot, message, args) => {
		if (!message.member.hasPermission(`BAN_MEMBERS`))
			return message.channel.send(`You are missing the **BAN_MEMBERS** permission! Try again later.`);
		
		if (!message.guild.me.hasPermission(`BAN_MEMBERS`))
			return message.channel.send(`I am missing the **BAN_MEMBERS** permission! Try again later.`);
		
		const target = message.mentions.members.first();
		
		if (!target)
			return message.channel.send(`Please mention a user!`);
		
		if (target.id === message.author.id)
			return message.channel.send(`You cannot ban yourself!`);
		
		if (!args[1])
			return message.channel.send(`Please provide a reason for ban to make it fair!`);
		
		let embed = new discord.MessageEmbed()
			.setColor(global.embedColor)
			.setDescription(`${target} (${target.id})`)
			.setTitle(`Member has been banned.`)
			.setThumbnail(target.avatarURL)
			.setFooter(`Banned by ${message.author.tag}.`);
		message.channel.send(embed);
		target.ban();
	}
} 
