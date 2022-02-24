let wakeupEarly = new Promise(function(resolve,reject){
    let isEarly = false;

    if(isEarly){
        resolve("Nice job!");
    }
    else {
        reject("Better luck next time!");
    }
});

wakeupEarly.then(msg=>console.log(msg)).catch((msg)=>console.log(msg));