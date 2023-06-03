const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!")
        }, 1500);
    });
    return promise;
}


// Async Code
setTimeout(() => {
    console.log("I am First!")
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    }).then(text2 => {
        console.log(text2);
    })
}, 2000);

// Sync Code
console.log("Hello");
