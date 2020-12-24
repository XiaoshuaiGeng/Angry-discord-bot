module.exports = {
	name:'kick',
	description: 'kick user out of current channel',
	execute(message, args) {
		if(!message.mentions.users.size) {
			message.reply('你踢人咋还不写名啊？');
		}
		console.log('kick commands is current unavailable');
	},
};