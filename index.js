// const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();


client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);

	const command = args.shift().toLowerCase();

	if(command === '别骂了') {
		message.channel.bulkDelete(10, true);
		// delete last 10 messages

	}

	if(command === '瞅瞅') {
		if(!message.mentions.users.size) {
			return message.reply('你瞅你妈呢？');
		}

		// message.channel.send(``)
	}

	if(command === 'kick') {
		if(!message.mentions.users.size) {
			return message.reply('你踢人咋还不写名啊？');
		}
	}

	if(command === '骂') {
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
				sentence += `${message.mentions.users.map(user => {return user;})} ${args[args.length - 1]}` + '\n';
			}
			message.channel.send(sentence);
		}
	}

	// message.channel.send(args[0]);

	// @test if there is any arguments
	// if(!args.length){
	//     return message.channel.send(`No arguments`);
	// }

});

client.login(token);