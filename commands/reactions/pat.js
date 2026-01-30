const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pat')
        .setDescription(`Pat reaction`),
    
    async execute(interaction) {
        const response = await fetch(`https://api.some-random-api.com/animu/pat`)
        const data = await response.json()
        const embed = new EmbedBuilder()
            .setImage(data.link)
            .setColor(0x89CFF0);

        await interaction.reply({ embeds: [embed] });
    }
}