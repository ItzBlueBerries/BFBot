module.exports = {
    name: `ping`,
    category: `Simple`,
    description: `Bot ping.`,
	author: `Fruitsy`,
    run: (bot, message) => {
        message.channel.send(`**Pong!** | Responded in ${bot.ws.ping}ms`);
    }
}
