const { REST, Routes } = require('discord.js');
// const { clientId, guildId, token } = require('./config.json');

const dotenv = require('dotenv');

dotenv.config();

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.DISCORD_CLIENT_ID;
const guildId = process.env.DISCORD_GUILD_ID;

const rest = new REST({ version: '10' }).setToken(token);

const commandId = '1078243746103164949';

// ...

// for guild-based commands
rest.delete(Routes.applicationGuildCommand(clientId, guildId, commandId))
	.then(() => console.log('Successfully deleted guild command'))
	.catch(console.error);

// for global commands
rest.delete(Routes.applicationCommand(clientId, commandId))
	.then(() => console.log('Successfully deleted application command'))
	.catch(console.error);
