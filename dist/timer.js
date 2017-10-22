"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function timer2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}
exports.timer2Seconds = timer2Seconds;
function sayHi() {
    console.log("Hi");
}
exports.sayHi = sayHi;
function recursive(array) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let item of array) {
            let flag = true;
            while (flag) {
                console.log(item);
                yield timer2Seconds();
                flag = false;
            }
        }
    });
}
exports.recursive = recursive;
