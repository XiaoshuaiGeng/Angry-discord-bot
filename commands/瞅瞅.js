const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('瞅瞅')
    .setDescription('show current text channel name'),
  async execute (interaction) {
    await interaction.reply('别瞅了 饭都凉了')
  }
}

// module.exports = {
//   name: '瞅瞅',
//   description: 'show current channel name',

//   /**
//    * Documentation
//    * @param {Discord.Message | Discord.PartialMessage}message some num
//    * @param {*} args some num
//    */
//   execute(message, args) {
//     if (!message.mentions.users.size) {
//       message.reply('别瞅了 饭都凉了');
//     }

//   },
// }
