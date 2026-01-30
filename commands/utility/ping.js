const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName('ping').setDescription('Pong! Returns the ping of the bot.'),
    async execute(interaction) {
        await interaction.reply('Pinging...');
        const sent = await interaction.fetchReply();
        const latency = sent.createdTimestamp - interaction.createdTimestamp;
        
        const embed = new EmbedBuilder()
            .setTitle('Pong!')
            .addFields(
                { name: `Message Latency`, value: `${latency}ms`, inline: true}
            )
        await interaction.editReply({ content: null, embeds: [embed] })
    },
}