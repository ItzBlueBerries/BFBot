module.exports = {
    name: 'ping',
    category: 'Simple',
    description: 'Bot ping.',
    run: (bot, message) => {
        message.channel.send('Pong!');
    }
}