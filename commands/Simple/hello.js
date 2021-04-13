module.exports = {
    name: 'hello',
    category: 'Simple',
    description: 'Hello there!',
    usage: 'hello',
    run: (bot, message) => {
        message.channel.send('Hello there!')
    }
}