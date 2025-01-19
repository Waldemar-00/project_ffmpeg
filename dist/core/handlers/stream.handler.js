"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SteramHandler = void 0;
class SteramHandler {
    constructor(logger) {
        this.logger = logger;
    }
    processOutput(stream) {
        stream.stdout.on("data", (data) => this.logger.log(data.toString()));
        stream.stderr.on("data", (data) => this.logger.error(data.toString()));
        stream.on("close", () => this.logger.end());
    }
}
exports.SteramHandler = SteramHandler;
