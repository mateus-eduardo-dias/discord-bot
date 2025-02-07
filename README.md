# Discord bot

![NPM Version](https://img.shields.io/npm/v/discord.js?style=for-the-badge&label=discord.js)

![Website](https://img.shields.io/website?url=https%3A%2F%2Fproposed-aeriel-killedplayer77org-4672ad43.koyeb.app%2F&up_message=on&up_color=green&down_message=off&down_color=red&style=for-the-badge&logo=koyeb)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fproposed-aeriel-killedplayer77org-4672ad43.koyeb.app%2F&query=%24.status&style=for-the-badge&logo=koyeb&label=working%3F)

![GitHub Repo stars](https://img.shields.io/github/stars/mateus-eduardo-dias/discord-bot?style=for-the-badge&logo=github)
![GitHub watchers](https://img.shields.io/github/watchers/mateus-eduardo-dias/discord-bot?style=for-the-badge&logo=github)
![GitHub forks](https://img.shields.io/github/forks/mateus-eduardo-dias/discord-bot?style=for-the-badge&logo=github)
![GitHub License](https://img.shields.io/github/license/mateus-eduardo-dias/discord-bot?style=for-the-badge&logo=github&color=red)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## Index

- [About this project](#about)
- [Installation Guide](#install-guide)
    - [Prerequisites](#preq)
    - [Installation](#installation)
- [Usage](#usage)
    - [Update slash commands](#update-slash)
    - [Running the application](#running)
    - [Endpoints](#endpoints)
        - [GET /](#endpoint-base)
- [Contribute](#contribute)
    - [Creating a command](#creating-command)
- [License](#license)

<h2 id="about">About this project</h2>
This is a Discord bot made with [discord.js](https://discord.js.org/) module for [Node.js](https://nodejs.org)
It's a personal project but you can contribute to this project reporting bugs or making pull requests to this project if you want

<h2 id="install-guide">Installation guide</h2>

<h3 id="preq">Prerequisites</h3>
The DiscordJs module recommends the newest version of NodeJs to keep everything working fine, you can download it at their [official website](https://nodejs.org)

You will also need [Git](https://git-scm.com/downloads) (if you dont have) installed

And last, you will need a Discord Application, which can be made at the [Discord Developer Portal](https://discord.com/developers/applications)

<h3 id="installation">Installation</h3>
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

<h2 id="usage">Usage</h2>

<h3 id="update-slash">Updating slash commands</h3>

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

<h3 id="running">Running the Application</h3>

After installing, you can run `node run start:dev` or `node .` to make the Application work

<h3 id="endpoints">Endpoints</h3>

Since it's a discord bot, endpoints are not the main focus of this project

**Base URL**: <kbd>https://proposed-aeriel-killedplayer77org-4672ad43.koyeb.app/</kbd>

**Note**: That's the URL for my bot, if you are going to make your own bot using this code, you should deploy it later in a service (in this project i used [Koyeb](https://www.koyeb.com/))

|Endpoint|Action|
|--------|------|
|<kbd>GET /</kbd>|Show the status of the bot|

<h4 id="endpoint-base">GET /</h4>

**URL**: <kbd>https://proposed-aeriel-killedplayer77org-4672ad43.koyeb.app/</kbd>

**Note**: That's the URL for my bot, if you are going to make your own bot using this code, you should deploy it later in a service (in this project i used [Koyeb](https://www.koyeb.com/))

**Description**: This endpoint returns the status of the application

**RESPONSE**
```json
{
    "status": true
}
```
If status is false, there's some problem with the bot and you should verify

<h2 id="contribute">Contribute</h2>

<h3 id="creating-command">Creating a command</h3>


<h2 id="license">License</h2>

This project uses [Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0), which can be seen at the [LICENSE file](https://github.com/mateus-eduardo-dias/discord-bot/blob/main/LICENSE)
