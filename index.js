const { Client, Collection, GatewayIntentBits } = require("discord.js");
const fs = require("fs")
const path = require("path")
const dotenv = require("dotenv");

console.log("Starting initialization")
dotenv.config();

console.log("Creating client")
const client = new Client({intents: [GatewayIntentBits.Guilds]})

client.commands = new Collection()

const CommandsFoldersPath = path.join(__dirname, 'commands')
const commandsFolders = fs.readdirSync(CommandsFoldersPath)

for (const folder of commandsFolders) {
    const commandsPath = path.join(CommandsFoldersPath, folder)
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file)
        const command = require(filePath)
        if ('data' in command && 'execute' in command) {
            console.log(`Adding ${command.data.name} command`)
            client.commands.set(command.data.name, command)
        } else {
            console.log(`[WARNING] ${filePath} do not have 'data' or 'execute' property`)
        }
    }
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
    console.log(`Adding ${event.name} event`)
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

console.log("Initializing...")
client.login(process.env.BOT_TOKEN)