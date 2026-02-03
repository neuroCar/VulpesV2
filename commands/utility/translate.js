const pop = require(`popcat-wrapper`);
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName('translate').setDescription('Translates the message you add.').addStringOption(option => option
        .setName(`original`).setRequired(true).setDescription(`Message to translate`)
    ).addStringOption(option => option
        .setName(`lang`).setRequired(true).setDescription(`Language to translate to`)
    ),
    async execute(interaction) {
        const originalText = interaction.options.getString(`original`);
        const lang = interaction.options.getString(`lang`)

        const res = await fetch(`https://api.popcat.xyz/v2/translate?to=${encodeURIComponent(lang)}&text=${encodeURIComponent(originalText)}`)
        const { message } = await res.json()

        const embed = new EmbedBuilder()
            .addFields(
                { name: `Original text`, value: originalText },
                { name: `Translated`, value: message.translated }
            )
            .setFooter({ text: "https://popcat.xyz/api", iconURL: "https://cdn.popcat.xyz/popcat.png" });
        await interaction.reply({ embeds: [embed] });
    },
}