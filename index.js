// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	console.log(message.content);
});

// login to Discord with your app's token
client.login('ODMxMzI5MzU3MTUwMTU4ODQ5.YHTpzA.C5gec_gbU0qrgsSWM_rWB-rH5TM');
