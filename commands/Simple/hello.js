module.exports = {
    name: "hello",
    category: "Simple",
    description: "Hello there!",
    usage: "hello",
    run: (bot, message, args) => {
        message.channel.send("Hello there!")
    }
}