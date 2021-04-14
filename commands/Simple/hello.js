module.exports = {
    name: 'hello',
    category: 'Simple',
    description: 'Hello there!',
	author: 'Fruitsy',
    run: (bot, message) => {
        message.channel.send('Hello there!')
    }
}