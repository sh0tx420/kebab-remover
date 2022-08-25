// no import keyword sadge
const { Client, GatewayIntentBits } = require("discord.js");
const config = require("../config.json");
const analyze_video = require("./analyze_video");
const Logger = require("./utils/logger");
const { readdirSync, unlinkSync } = require("node:fs");
const { resolve } = require("node:path");

// wtf why did i write such a bad implementation
const logger = new Logger();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});


client.once("ready", bot => {
    for (const i of ["Bot login successful.", `Username: ${bot.user.tag}`, `User ID: ${bot.user.id}`]) {
        logger.info(i);
    }

    if (config.wipe_ready) {
        const files = readdirSync(config.save_dest);
        for (const file of files) {
            unlinkSync(resolve(config.save_dest, file));
        }
    }
});

/* Detect mp4 files sent from files */
client.on("messageCreate", message => {
    const attachment = message.attachments.first();

    if (attachment != undefined) {
        if (attachment.url.includes(".mp4")) analyze_video(attachment.url);
    }
});

/* Detect videos sent with an URL
*  Using messageUpdate because that gets called when discord shows an embed
*  NOTE: this might not work 100% of the time
*/
client.on("messageUpdate", (_, message) => {
    const regex = /https?.*?\.mp4/;
    if (message.content.match(regex)) {
        analyze_video(message.content);
    }
});

client.login(config.dtoken);
