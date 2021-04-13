const discord = require('discord.js');

module.exports = {
	name: 'medic',
	category: 'Simple',
	description: 'Get a random Team Fortress 2 Medic call as audio.',
	run: async (bot, message) => {
		let medicCalls = [
			'https://wiki.teamfortress.com/w/images/3/3c/Scout_medic01.wav',
			'https://wiki.teamfortress.com/w/images/1/15/Scout_medic02.wav',
			'https://wiki.teamfortress.com/w/images/d/d9/Scout_medic03.wav',
			'https://wiki.teamfortress.com/w/images/c/c7/Soldier_medic01.wav',
			'https://wiki.teamfortress.com/w/images/5/5f/Soldier_medic02.wav',
			'https://wiki.teamfortress.com/w/images/8/83/Soldier_medic03.wav',
			'https://wiki.teamfortress.com/w/images/0/0f/Pyro_medic01.wav',
			'https://wiki.teamfortress.com/w/images/e/e8/Demoman_medic01.wav',
			'https://wiki.teamfortress.com/w/images/a/a9/Demoman_medic02.wav',
			'https://wiki.teamfortress.com/w/images/8/8d/Demoman_medic03.wav',
			'https://wiki.teamfortress.com/w/images/3/38/Heavy_medic01.wav',
			'https://wiki.teamfortress.com/w/images/2/28/Heavy_medic02.wav',
			'https://wiki.teamfortress.com/w/images/0/03/Heavy_medic03.wav',
			'https://wiki.teamfortress.com/w/images/e/e4/Engineer_medic01.wav',
			'https://wiki.teamfortress.com/w/images/3/3c/Engineer_medic02.wav',
			'https://wiki.teamfortress.com/w/images/9/9f/Engineer_medic03.wav',
			'https://wiki.teamfortress.com/w/images/4/4a/Medic_medic01.wav',
			'https://wiki.teamfortress.com/w/images/5/5d/Medic_medic02.wav',
			'https://wiki.teamfortress.com/w/images/8/8b/Medic_medic03.wav',
			'https://wiki.teamfortress.com/w/images/9/9f/Sniper_medic01.wav',
			'https://wiki.teamfortress.com/w/images/1/10/Sniper_medic02.wav',
			'https://wiki.teamfortress.com/w/images/0/00/Spy_medic01.wav',
			'https://wiki.teamfortress.com/w/images/7/71/Spy_medic02.wav',
			'https://wiki.teamfortress.com/w/images/a/aa/Spy_medic03.wav'
		];
		let attachment = new MessageAttachment(medicCalls[Math.floor(Math.random() * medicCalls.length)], 'MEDIC!.wav');
		return message.channel.send(attachment);
	}	
}
