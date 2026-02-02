const pop = require(`popcat-wrapper`);
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName('joke').setDescription('Sends a joke (duh).'),
    async execute(interaction) {
        const joke = await pop.joke();
        
        const embed = new EmbedBuilder()
            .setDescription(joke)
            .setFooter({ text: "Joke from https:://popcat.xyz/api", icon: "https://cdn.popcat.xyz/popcat.png" });
            await interaction.reply({ embeds: [embed] });
    },
}