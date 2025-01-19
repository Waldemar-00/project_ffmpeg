"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FFmpegBuilder = void 0;
class FFmpegBuilder {
    constructor() {
        this.options = new Map().set('-c:v', 'libx264');
    }
    input(inputPath) {
        this.inputPath = inputPath;
        return this;
    }
    setVideoSize(width, height) {
        this.options.set('-s', `${width}x${height}`);
        return this;
    }
    output(outputPath) {
        if (!this.inputPath)
            throw new Error('No input path specified');
        const args = ['-i', this.inputPath];
        this.options.forEach((value, index) => args.push(index, value));
        args.push(outputPath);
        return args;
    }
}
exports.FFmpegBuilder = FFmpegBuilder;
// new FFmpegBuilder()
//     .input( '' )
//     .setVideoSize( 1920, 1080 )
//     .output('//')
