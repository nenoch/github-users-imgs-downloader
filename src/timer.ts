export function timer2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
}

export function sayHi(){
    console.log("Hi");
}

export async function recursive(){
    while (true) {
        sayHi();
        await timer2Seconds();
    }
}