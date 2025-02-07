# Discord bot

## About this project
This is a Discord bot made with [discord.js](https://discord.js.org/) module for [Node.js](https://nodejs.org)
It's a personal project but you can contribute to this project reporting bugs or making pull requests to this project if you want

## Installation guide

### Prerequisite
The DiscordJs module recommends the newest version of NodeJs to keep everything working fine, you can download it at their [official website](https://nodejs.org)

You will also need [Git](https://git-scm.com/downloads) (if you dont have) installed

And last, you will need a Discord Application, which can be made at the [Discord Developer Portal](https://discord.com/developers/applications)

### Installation
Firstly, you need to clone this project to your projects folder using the following command
```bash
git clone https://github.com/mateus-eduardo-dias/discord-bot
```

Then, you need to install all the dependencies on your project folder
```bash
npm install
```

After that, you should create a [.env file](https://www.dotenv.org/docs/security/env.html) at the root of your project, and add the following values:

```env
BOT_TOKEN="Your token goes here"
CLIENT_ID="Your client id goes here"
```

If you forgot your Token, you can reset at the "Bot" session of your application
You can find the client id at the "General Information" session, called "APPLICATION ID"

### Updating slash commands

After you configure your Application, you can run `node run update` or `node deploy-commands.js` to update all the slash commands in all servers

Note: If you want to make commands only for a certain server, you can change the following lines of the `deploy-commands.js` file:

```js
/* Before */
const data = await rest.put(
    Routes.applicationCommands(process.env.CLIENT_ID),
    { body: commands },
);

/* After */
const data = await rest.put(
    Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
    { body: commands },
);
```

If you make this change, you should add a new line at the `.env` file:

```env
GUILD_ID="Your server id goes here"
```

You can find the server id right clicking at the server logo and then "Copy server ID"

### Running the Application

After installing, you can run `node run start:dev` or `node .` to make the Application work
