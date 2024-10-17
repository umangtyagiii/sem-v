const prom = new Promise((resolve, reject) => {
    console.log("Inside The Promise");
    resolve("promise resolved");
    reject("promise rejected");
});

// Solving callback hell
prom
    .then(() => {
        console.log("This is my promise");
    })
    .catch(() => {
        console.log("This is my error page");
    });

    function getroll(num,delay){
        return new Promise(resolve,reject)=>{
            setTimeout(()=>{
                console.log("roll no is:",num);
                resolve("successfully done");
            },delay();
        });
    }
    getroll((1,1000).then