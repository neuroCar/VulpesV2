const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cry')
        .setDescription(`Cry reaction`),
    
    async execute(interaction) {
        const response = await fetch(`https://api.some-random-api.com/animu/cry`)
        const data = await response.json()
        const embed = new EmbedBuilder()
            .setImage(data.link)
            .setColor(0x89CFF0);

        await interaction.reply({ embeds: [embed] });
    }
}