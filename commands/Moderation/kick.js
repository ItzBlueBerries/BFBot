const discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "Moderation",
  description: "kickorsomethinglol",
  usage: "kick <@user> <reason>",
  run: async (bot, message, args) => {
    
    if(!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send("You are missing **KICK_MEMBERS** permission! Try again later.")
    }
    
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel.send("I am missing **KICK_MEMBERS** permission! Try again later.")
    }
    
    const target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send("Please mention a user!")
    }
    
    if(target.id === message.author.id) {
      return message.channel.send("You cannot kick yourself!")
    }
    
    if(!args[1]) {
    return message.channel.send("Please provide a reason for kick to make it fair!")
  }
    
    let embed = new discord.MessageEmbed()
    .setDescription(`User has been kicked: ${target} (${target.id})`)
    .setColor(embedColor)
    .setThumbnail(target.avatarURL)
    .setFooter(`Kicked by ${message.author.tag}.`);
    
    message.channel.send(embed)
    target.kick()
    
    
  }
} 