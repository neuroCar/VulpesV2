const pop = require(`popcat-wrapper`);
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName('encode').setDescription('Encode messages.').addStringOption(option => option
        .setName(`original`).setRequired(true).setDescription(`Message to encode`)
    ),
    async execute(interaction) {
        const originalText = interaction.options.getString(`original`);

        const encoded = pop.encode(originalText)

        const embed = new EmbedBuilder()
            .addFields(
                { name: `Original text`, value: originalText },
                { name: `Translated`, value: encoded }
            )
            .setFooter({ text: "https://popcat.xyz/api", iconURL: "https://cdn.popcat.xyz/popcat.png" });
        await interaction.reply({ embeds: [embed] });
    },
}