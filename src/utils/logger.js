class Logger {

    constructor() {
        this.colors = {
            green: "\x1b[1;32m",
            blue: "\x1b[1;34m",
            yellow: "\x1b[1;33m",
            white: "\x1b[1;37m",
            reset: "\x1b[0m"
        };
    }

    info(content) {
        process.stdout.write(`${this.colors.green}[INFO]${this.colors.white} ${content}\n`);
    }

    warn(content) {
        process.stdout.write(`${this.colors.yellow}[WARN]${this.colors.white} ${content}\n`);
    }
}

module.exports = Logger;
