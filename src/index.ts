import { recursive } from "./timer";
import * as WebRequest from "web-request";
import * as request from "request";
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
    let userPic = await WebRequest.json<any>(baseUrl + users[0], options);
    console.log(userPic.avatar_url);
    request(userPic.avatar_url, {encoding:'binary'}, (error: any, response: any, body: any) => {
        fs.writeFile("imgs/nenoch.jpg", body, 'binary', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("The file was saved!");
            }
        })
    })
}

getUserPic();

