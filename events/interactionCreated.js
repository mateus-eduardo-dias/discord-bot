const {Events, MessageFlags} = require("discord.js")

module.exports = {
    name:Events.InteractionCreate,
    async execute(interaction) {
        if(!interaction.isChatInputCommand()) return;
        const command = interaction.client.commands.get(interaction.commandName)
        if (!command) {
            console.log("Command not found")
            await interaction.reply({content:"Command do not exist or was not found", flags:MessageFlags.Ephemeral})
            return;
        }
    
        try {
            await command.execute(interaction)
        } catch (err) {
            console.error(err)
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({content:"A error happened", flags:MessageFlags.Ephemeral})
            } else {
                await interaction.reply({content:"A error happened", flags:MessageFlags.Ephemeral})
            }
        }
    }
}