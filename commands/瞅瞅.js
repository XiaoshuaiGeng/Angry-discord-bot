const { DiscordAPIError } = require("discord.js");

module.exports = {
	name: '瞅瞅',
	description:'show current channel name',

	/**
	 * Documentation
	 * @param {Discord.Message | Discord.PartialMessage}message some num
	 * @param {*} args some num
	 */
	execute(message, args) {
		if(!message.mentions.users.size) {
			message.reply('别瞅了 饭都凉了');
		}

	},
};