"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _ConsoleLogger_logger;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = void 0;
class ConsoleLogger {
    static getConsoleLogger() {
        if (!__classPrivateFieldGet(_a, _a, "f", _ConsoleLogger_logger))
            __classPrivateFieldSet(_a, _a, new _a(), "f", _ConsoleLogger_logger);
        return __classPrivateFieldGet(_a, _a, "f", _ConsoleLogger_logger);
    }
    log(message) {
        console.log(message);
    }
    error(error) {
        if (error instanceof Error)
            console.log(error.message);
    }
    end() { console.log('DONE'); }
}
exports.ConsoleLogger = ConsoleLogger;
_a = ConsoleLogger;
_ConsoleLogger_logger = { value: void 0 };
