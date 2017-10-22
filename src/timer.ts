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

export async function recursive(array: string[]){
    for (let item of array) {
        let flag = true;
        while (flag) {
            console.log(item);
            await timer2Seconds();
            flag = false;
        }
    }
}