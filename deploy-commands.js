const dotenv = require('dotenv')
// const { SlashCommandBuilder } = require('@discordjs/builders')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const fs = require('fs')

dotenv.config()
const commands = []
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  commands.push(command.data.toJSON())
}

// const commands = [
//   new SlashCommandBuilder().setName('server').setDescription('Replies with server info'),
//   new SlashCommandBuilder().setName('developer').setDescription('Replies with developer info')
// ].map(command => command.toJSON())

const rest = new REST({ version: 9 }).setToken(process.env.BOT_TOKEN)

rest.put(Routes.applicationGuildCommands(process.env.clientId, process.env.guildId), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error)
