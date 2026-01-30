const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('facepalm')
        .setDescription(`Facepalm reaction`)
        .setDMPermission(true),
    
    async execute(interaction) {
        const response = await fetch(`https://api.some-random-api.com/animu/face-palm`)
        const data = await response.json()
        const embed = new EmbedBuilder()
            .setImage(data.link)
            .setColor(0x89CFF0);

        await interaction.reply({ embeds: [embed] });
    }
}