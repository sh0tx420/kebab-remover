const { DownloaderHelper } = require("node-downloader-helper");
const { save_dest } = require("../config.json");
const { randomBytes } = require("crypto");

function analyze_video(url) {
    const rng_filename = `${randomBytes(8).toString("hex")}.mp4`;
    // find out some way to do this without a random nodejs module
    const dl = new DownloaderHelper(url, save_dest, { fileName: rng_filename });

    // dl.on("end", () => console.log("download complete < debug"));
    dl.start();
}

module.exports = analyze_video;
