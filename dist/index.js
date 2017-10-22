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
const WebRequest = require("web-request");
const fs = require("fs");
console.log("I'm running");
// let greetings = ["hello", "hi", "hola"];
// recursive(greetings);
const baseUrl = "https://api.github.com/users/";
const headers = {
    'User-Agent': 'anything apparently...'
};
let users = ["nenoch", "josuevivash", "sliute", "shezdev"];
function saveUsersPic(array) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let user of array) {
            let options = {
                headers: headers
            };
            let userInfo = yield WebRequest.json(baseUrl + user, options);
            let request = WebRequest.stream(userInfo.avatar_url);
            let writePath = fs.createWriteStream(`imgs/${user}_${new Date()}.jpg`);
            request.pipe(writePath); // pipe content directly to a file 
            var response = yield request.response; // wait for web-request to complete 
            yield new Promise(resolve => writePath.on('finish', () => resolve())); // wait for file-write to complete 
        }
    });
}
saveUsersPic(users);
