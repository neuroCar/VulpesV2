const pop = require(`popcat-wrapper`);
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName('decode').setDescription('Decode messages.').addStringOption(option => option
        .setName(`encodemsg`).setRequired(true).setDescription(`Message to decode`)
    ),
    async execute(interaction) {
        const encodedMsg = interaction.options.getString(`encodemsg`);

        const decoded = pop.decode(originalText)

        const embed = new EmbedBuilder()
            .addFields(
                { name: `Original text`, value: encodedMsg },
                { name: `Translated`, value: decoded }
            )
            .setFooter({ text: "https://popcat.xyz/api", iconURL: "https://cdn.popcat.xyz/popcat.png" });
        await interaction.reply({ embeds: [embed] });
    },
}