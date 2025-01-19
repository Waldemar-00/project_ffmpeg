"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FFmpegExecotur_fileService, _FFmpegExecotur_promptService;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FFmpegExecotur = void 0;
const child_process_1 = require("child_process");
const abstract_executor_1 = require("../../core/executor/abstract.executor");
const file_service_1 = require("../../core/files/file.service");
const prompt_service_1 = require("../../core/prompt/prompt.service");
const ffmpeg_builder_1 = require("./ffmpeg.builder");
const stream_handler_1 = require("../../core/handlers/stream.handler");
class FFmpegExecotur extends abstract_executor_1.AbstractExecutor {
    constructor(logger) {
        super(logger);
        _FFmpegExecotur_fileService.set(this, new file_service_1.FileService());
        _FFmpegExecotur_promptService.set(this, new prompt_service_1.PromptService());
    }
    prompt() {
        return __awaiter(this, void 0, void 0, function* () {
            const width = yield __classPrivateFieldGet(this, _FFmpegExecotur_promptService, "f").inquirer("Width", 'number');
            const height = yield __classPrivateFieldGet(this, _FFmpegExecotur_promptService, "f").inquirer("Height", 'number');
            const inputPath = yield __classPrivateFieldGet(this, _FFmpegExecotur_promptService, "f").inquirer("Path", "input");
            const name = yield __classPrivateFieldGet(this, _FFmpegExecotur_promptService, "f").inquirer("Name", "input");
            return { width, height, inputPath, name };
        });
    }
    build({ width, height, inputPath, name }) {
        const outputPath = __classPrivateFieldGet(this, _FFmpegExecotur_fileService, "f").buildFilePath(name, 'mp4', inputPath);
        const args = new ffmpeg_builder_1.FFmpegBuilder()
            .input(inputPath)
            .setVideoSize(width, height)
            .output(outputPath);
        return { command: "ffmpeg", args, outputPath };
    }
    ourSpawn({ command, args, outputPath }) {
        __classPrivateFieldGet(this, _FFmpegExecotur_fileService, "f").deleteFileIfExists(outputPath);
        return (0, child_process_1.spawn)(command, args);
    }
    proccess(stream, logger) {
        new stream_handler_1.SteramHandler(logger).processOutput(stream);
    }
}
exports.FFmpegExecotur = FFmpegExecotur;
_FFmpegExecotur_fileService = new WeakMap(), _FFmpegExecotur_promptService = new WeakMap();
