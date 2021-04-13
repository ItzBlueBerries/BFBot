module.exports = {
    name: 'ping',
    category: 'Simple',
    description: 'Bot ping.',
    usage: 'ping',
    run: (bot, message) => {
        message.channel.send('Pong!\n${bot.ws.ping}ms');
    }
}