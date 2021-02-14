module.exports = {
    name: '骂',
    description: 'Repeat user input messages on chat with mentions',
    execute(message, args){
        if(!message.mentions.users.size) {
			return message.reply('骂人记得@他');
		}

		if(args.length > message.mentions.users.size) {
			let sentence = '';
			for(let i = 0; i < 5; i++) {
				sentence += `${message.mentions.users.map(user => {return user; })} ${args[args.length - 1]}` + '\n';
			}
			message.channel.send(sentence);
		}
		else {
			let sentence = '';
			for(let i = 0; i < 5; i++) {
				sentence += `${message.mentions.users.map(user => {return user;})} 街溜子` + '\n';
			}
			message.channel.send(sentence);
		}
    }
}