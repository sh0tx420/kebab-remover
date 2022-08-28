const { DownloaderHelper } = require("node-downloader-helper");
const { save_dest, size_limit } = require("../config.json");
const { randomBytes } = require("crypto");
const Logger = require("./utils/logger");

const logger = new Logger();

function analyze_video(url) {
    const rng_filename = `${randomBytes(8).toString("hex")}.mp4`;
    // find out some way to do this without a random nodejs module
    const dl = new DownloaderHelper(url, save_dest, { fileName: rng_filename });

    dl.on("download", file => {
        const rounded_size = Math.round(file.totalSize / Math.pow(1024,2)).toFixed(0);
        if (rounded_size >= size_limit) {
            dl.pause();
            // apparently not possible to delete the file??? (with unlink and resolve)
        }
    });
    dl.on("end", () => logger.info(`Download complete -> ${logger.colors.blue}${rng_filename}`));
    dl.start();
}

module.exports = analyze_video;
