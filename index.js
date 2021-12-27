const dotenv = require('dotenv')
const { Client, Intents, Collection } = require('discord.js')
const fs = require('fs')

dotenv.config()

// discord bot now does not need a prefix
// const prefix = process.env.PREFIX
const token = process.env.BOT_TOKEN
const client = new Client(
  {
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES
    ]
  }
)
client.commands = new Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  // Set a new item in the Collection
  // With the key as the command name and the value as the exported module
  client.commands.set(command.data.name, command)
}

client.once('ready', () => {
  console.log('Bot Ready')
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return

  const command = client.commands.get(interaction.commandName)

  if (!command) return

  try {
    await command.execute(interaction)
  } catch (error) {
    console.error(error)
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
  }
})

// client.on('message', message => {
//   if (!message.content.startsWith(prefix) || message.author.bot) return

//   const args = message.content.slice(prefix.length).split(/ +/)

//   const command = args.shift().toLowerCase()

//   switch (command) {
//     case '别骂了':
//       client.commands.get('别骂了').execute(message)
//       break

//     case '瞅瞅':
//       client.commands.get('瞅瞅').execute(message, args)
//       break

//     case 'kick':
//       if (!message.mentions.users.size) {
//         return message.reply('你踢人咋还不写名啊？')
//       }
//       break

//     case '骂':
//       client.commands.get('骂').execute(message, args)
//       break
//     case '搁哪呢':
//       console.log(client.user)
//       message.reply(`我在这个叫"${message.channel.name}"的撤硕蹲着呢`)
//       break
//     default:
//   }

// message.channel.send(args[0]);

// @test if there is any arguments
// if(!args.length){
//     return message.channel.send(`No arguments`);
// }
// })

client.login(token)
