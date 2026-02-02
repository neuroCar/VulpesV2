const pop = require(`popcat-wrapper`);
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName('joke').setDescription('Sends a joke (duh).'),
    async execute(interaction) {
        let user = interaction.mentions.users.first() || interaction.author;
        const pfp = user.displayAvatarURL();

        const img = fetch(`https://api.popcat.xyz/v2/pet?image=${pfp}`);
        
        const embed = new EmbedBuilder()
            .setImage(img)
            .setFooter({ text: "Joke from https:://popcat.xyz/api", icon: "https://cdn.popcat.xyz/popcat.png" })
        await interaction.reply({ embeds: [embed] });
    },
}