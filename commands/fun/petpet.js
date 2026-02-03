const pop = require(`popcat-wrapper`);
const { SlashCommandBuilder, EmbedBuilder, Attachment, AttachmentBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName('petpet').setDescription('Pet.').addUserOption(option => option
        .setName('user').setDescription("The user to pet").setRequired(false)
    ),
    async execute(interaction) {
        let user = interaction.options.getUser('user') || interaction.user;
        const pfp = user.displayAvatarURL({
            extension: `png`,
            size: 512,
            forceStatic: false,
        });

        const img = `https://api.popcat.xyz/v2/pet?image=${encodeURIComponent(pfp)}&type=gif`
        
        const res = await fetch(img);
        const arrayBuffer = await res.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const attachment = new AttachmentBuilder(buffer, { name: `pet.gif` });

        if (user === interaction.user) {
            msg = `${user} pet themself!`
        } else {
            msg = `${interaction.user} pet ${user}!`
        }

        const embed = new EmbedBuilder()
            .addFields(
                { name: `pet-pet`, value: msg },
            )
            .setImage(`attachment://pet.gif`)
            .setFooter({ text: "https://popcat.xyz/api", icon: "https://cdn.popcat.xyz/popcat.png" })
        await interaction.reply({ embeds: [embed], files: [attachment] });
    },
}