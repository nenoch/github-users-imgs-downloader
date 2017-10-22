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

let users = ["nenoch"]

async function getUserPic() {
    let options = {
        headers: headers
    };
    let user = await WebRequest.json<any>(baseUrl + users[0], options);
    let request = WebRequest.stream(user.avatar_url); 
    let writePath = fs.createWriteStream('imgs/nene.jpg');
    request.pipe(writePath); // pipe content directly to a file 
    var response = await request.response; // wait for web-request to complete 
    await new Promise(resolve => writePath.on('finish', () => resolve())); // wait for file-write to complete 
}
