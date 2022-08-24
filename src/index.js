// no import keyword sadge
const { Client, GatewayIntentBits } = require("discord.js");
const config = require("../config.json");
const analyze_video = require("./analyze_video");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once("ready", () => {
    console.log("bot process ready");
});

client.on("messageCreate", message => {
    const attachment = message.attachments.first();

    if (attachment != undefined) {
        if (attachment.url.includes(".mp4")) analyze_video(attachment.url);
    }
});

client.login(config.dtoken);
