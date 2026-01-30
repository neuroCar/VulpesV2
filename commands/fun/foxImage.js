const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fox-image')
        .setDescription(`Sends an image of a fox`)
        .setDMPermission(true),
    
    async execute(interaction) {
        const response = await fetch(`https://randomfox.ca/floof/`)
        const data = await response.json()
        const embed = new EmbedBuilder()
            .setImage(data.image)
            .setColor(0x89CFF0);

        await interaction.reply({ embeds: [embed] });
    }
}