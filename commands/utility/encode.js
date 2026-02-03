const pop = require(`popcat-wrapper`);
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName('encode').setDescription('Encode messages.').addStringOption(option => option
        .setName(`original`).setRequired(true).setDescription(`Message to encode`)
    ),
    async execute(interaction) {
        const ogMsg = interaction.options.getString(`original`);

        const res = await fetch(`https://api.popcat.xyz/v2/encode?text=${encodeURIComponent(ogMsg)}`)
        const { message } = await res.json()

        const embed = new EmbedBuilder()
            .addFields(
                { name: `Original text`, value: ogMsg },
                { name: `Encoded`, value: message.text }
            )
            .setFooter({ text: "https://popcat.xyz/api", iconURL: "https://cdn.popcat.xyz/popcat.png" });
        await interaction.reply({ embeds: [embed] });
    },
}