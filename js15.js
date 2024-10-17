console.log('Hello world!');

function rollnumber(num) {
    console.log("roll no. is:", num);
}

console.log(' Namaste');


setTimeout(rollnumber, 12000, 21);


function rollnumber(num, delay, nextroll) {
    setTimeout(() => {
        console.log("roll number is", num);
        if (nextroll) nextroll();
    }, delay); 
}


rollnumber(1231, 1000, () => {
    rollnumber(1232, 2000, () => {
        rollnumber(1233, 3000, () => {
            rollnumber(1234, 4000);
        });
    });
});

const prom = new Promise((resolve, reject) => {
    console.log("Inside The Promise");
    resolve("promise resolved");
    reject("promise rejected");
});

// Solving callback hell
prom.then(() => {
        console.log("This is my promise");
    }).catch(() => {
        console.log("This is my error page");
    });
