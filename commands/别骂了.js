const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('别骂了')
    .setDescription('删除上一条消息'),
  async execute (message) {
    await message.channel.bulkDelete(2)
  }
}

// module.exports = {
// name: '别骂了',
// description: 'delete 1 message above',
// execute(message, args) {
// message.channel.bulkDelete(2, true);
// },
// };
