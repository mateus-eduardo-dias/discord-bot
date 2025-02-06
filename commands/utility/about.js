const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("about")
        .setDescription("Shows the information about the bot"),
    async execute (interaction) {
        await interaction.reply("> Made by Mateus Eduardo\n> [Github](https://github.com/mateus-eduardo-dias)\n> Made with [Discord.js](https://discord.js.org/)")
    }
}