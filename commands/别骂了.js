module.exports = {
	name: '别骂了',
	description: 'delete 1 message above',
	execute(message, args) {
		message.channel.bulkDelete(2, true);
	},
};
