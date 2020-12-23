// const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();


client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);

	const command = args.shift().toLowerCase();

	switch(command) {

	case '别骂了':
		message.channel.bulkDelete(10, true);
		break;

	case '瞅瞅':
		if(!message.mentions.users.size) {
			return message.reply('别瞅了 饭都凉了');
		}
		break;

	case 'kick':
		if(!message.mentions.users.size) {
			return message.reply('你踢人咋还不写名啊？');
		}
		break;

	case '骂':
		if(!message.mentions.users.size) {
			return message.reply('骂人记得@他');
		}

		if(args.length > message.mentions.users.size) {
			let sentence = '';
			for(let i = 0; i < 20; i++) {
				sentence += `${message.mentions.users.map(user => {return user; })} ${args[args.length - 1]}` + '\n';
			}
			message.channel.send(sentence);
		}
		else {
			let sentence = '';
			for(let i = 0; i < 20; i++) {
				sentence += `${message.mentions.users.map(user => {return user;})} jie'liuzi` + '\n';
			}
			message.channel.send(sentence);
		}
		break;
	case '搁哪呢':
		message.reply(`我在这个叫"${message.channel.name}"的撤硕蹲着呢`);
		break;
	default:
	}

	// message.channel.send(args[0]);

	// @test if there is any arguments
	// if(!args.length){
	//     return message.channel.send(`No arguments`);
	// }

});

client.login(token);