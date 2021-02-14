const fs = require('fs');
const Discord = require('discord.js');
// const { prefix, token } = require('./config.json');
const prefix = process.env.PREFIX;
const token = process.env.BOT_TOKEN;
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

console.log(client.commands);

client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);

	const command = args.shift().toLowerCase();

	switch(command) {

	case '别骂了':
		client.commands.get('别骂了').execute(message);
		break;

	case '瞅瞅':
		client.commands.get('瞅瞅').execute(message, args);
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
		break;
	case '搁哪呢':
		console.log(client.user);
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