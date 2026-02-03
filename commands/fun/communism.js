const pop = require(`popcat-wrapper`);
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName('communism').setDescription('This user is a communist!').addUserOption(option => option
        .setName('user').setDescription('The communist').setRequired(false)
    ),
    async execute(interaction) {
        let user = interaction.options.getUser("user") || interaction.user
        const pfp = user.displayAvatarURL({
            extension: `png`,
            size: 512,
            forceStatic: false,
        });
        const communist = await pop.communism(pfp);
        
        const embed = new EmbedBuilder()
            .setImage(communist)
            .setFooter({ text: "https://popcat.xyz/api", icon: "https://cdn.popcat.xyz/popcat.png" });
        await interaction.reply({ embeds: [embed] });
    },
}