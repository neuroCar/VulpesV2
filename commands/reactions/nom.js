const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nom')
        .setDescription(`Nom reaction`),
    
    async execute(interaction) {
        const response = await fetch(`https://api.some-random-api.com/animu/nom`)
        const data = await response.json()
        const embed = new EmbedBuilder()
            .setImage(data.image)
            .setColor(0x89CFF0);

        await interaction.reply({ embeds: [embed] });
    }
}