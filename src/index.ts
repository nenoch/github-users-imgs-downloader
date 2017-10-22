import { recursive } from "./timer";
import * as WebRequest from "web-request";
import * as fs from "fs";

console.log("I'm running");
// let greetings = ["hello", "hi", "hola"];

// recursive(greetings);

const baseUrl = "https://api.github.com/users/";
const headers = {
    'User-Agent': 'anything apparently...'
};

let users = ["nenoch", "josuevivash", "sliute", "shezdev"];

async function saveUsersPic(array: string[]) {
    for (let user of array) {
        let options = {
            headers: headers
        };
        let userInfo = await WebRequest.json<any>(baseUrl + user, options);
        let request = WebRequest.stream(userInfo.avatar_url); 
        let writePath = fs.createWriteStream(`imgs/${user}_${new Date()}.jpg`);
        request.pipe(writePath); // pipe content directly to a file 
        var response = await request.response; // wait for web-request to complete 
        await new Promise(resolve => writePath.on('finish', () => resolve())); // wait for file-write to complete 
    }
}

saveUsersPic(users);
