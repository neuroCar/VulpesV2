const pop = require(`popcat-wrapper`);
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName('decode').setDescription('Decode messages.').addStringOption(option => option
        .setName(`encodemsg`).setRequired(true).setDescription(`Message to decode`)
    ),
    async execute(interaction) {
        const encoded = interaction.options.getString(`original`);

        const res = await fetch(`https://api.popcat.xyz/v2/encode?text=${encodeURIComponent(encoded)}`)
        const { message } = await res.json()

        const embed = new EmbedBuilder()
            .addFields(
                { name: `Encoded Message`, value: encoded },
                { name: `Decoded Message`, value: message.text }
            )
            .setFooter({ text: "https://popcat.xyz/api", iconURL: "https://cdn.popcat.xyz/popcat.png" });
        await interaction.reply({ embeds: [embed] });
    },
}