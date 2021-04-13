module.exports = {
    name: "hello",
    category: "Simple",
    description: "Hello there!",
    usage: "hello",
    run: (bot, message, args) => {
        message.reply('Hello there!');
        // Can also be: message.channel.send("Hello there!")
    }
}