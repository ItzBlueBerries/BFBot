module.exports = {
    name: 'hello',
    category: 'Simple',
    description: 'Hello there!',
    run: (bot, message) => {
        message.channel.send('Hello there!')
    }
}