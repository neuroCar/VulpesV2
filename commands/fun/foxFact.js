const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fox-fact')
        .setDescription(`Sends an fact about foxes`)
        .setDMPermission(true),
    
    async execute(interaction) {
        const response = await fetch(`https://api.some-random-api.com/facts/fox`)
        const data = await response.json()
        const embed = new EmbedBuilder()
            .setDescription(`<:FoxWave:1466598371966976245> ${data.fact}`)
            .setColor(0x89CFF0);

        await interaction.reply({ embeds: [embed] });
    }
}