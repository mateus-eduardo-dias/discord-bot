import { REST, Routes } from "discord.js";
import { config } from "dotenv";
config();

const commands = [
    {
        name: "print",
        description: "prints something"
    }
]

const rest = new REST({version: '10'})