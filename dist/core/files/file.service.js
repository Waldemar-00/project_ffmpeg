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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
//? __dirname is a global variable, it contains current directory for current executed file
//? dirname is the method wich get a dirrectory without files. It from path module of Node.js
//? join is the method wich join all arguments in one path and fix it. It from path module of Node.js
//? promises is the object in module fs(file system) in Node.js, which let work with promises simply
//? stat is the method from object promises, which gets information about file or directory and returns data or Error
//? unlinck is the method from promises object for async deleting file or symbolic referens
class FileService {
    isExist(path) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield fs_1.promises.stat(path);
                return true;
            }
            catch (error) {
                return false;
            }
        });
    }
    buildFilePath(fileName, fileExtension, pathForSaveFile) {
        if (!(0, path_1.isAbsolute)(pathForSaveFile))
            pathForSaveFile = (0, path_1.join)(__dirname + '/' + pathForSaveFile);
        return (0, path_1.join)((0, path_1.dirname)(pathForSaveFile) + '/' + fileName + '.' + fileExtension);
    }
    deleteFileIfExists(path) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.isExist(path))
                yield fs_1.promises.unlink(path);
        });
    }
}
exports.FileService = FileService;
