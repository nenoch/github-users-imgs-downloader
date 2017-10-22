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
const request = require("request");
const fs = require("fs");
console.log("I'm running");
// let greetings = ["hello", "hi", "hola"];
// recursive(greetings);
const baseUrl = "https://api.github.com/users/";
const headers = {
    'User-Agent': 'anything apparently...'
};
let users = ["nenoch"];
function getUserPic() {
    return __awaiter(this, void 0, void 0, function* () {
        let options = {
            headers: headers
        };
        let userPic = yield WebRequest.json(baseUrl + users[0], options);
        console.log(userPic.avatar_url);
        request(userPic.avatar_url, { encoding: 'binary' }, (error, response, body) => {
            fs.writeFile("imgs/nenoch.jpg", body, 'binary', (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("The file was saved!");
                }
            });
        });
    });
}
getUserPic();
