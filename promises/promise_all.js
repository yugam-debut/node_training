var p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        try {
            // reject(new Error("Error!"));
            resolve("Hello world");
        }
        catch (e) {
            reject("No Value");
        }
    }, 1000);
})
var p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        try {
            hello_india();
            // reject(new Error("Error!"));
            resolve("Hello test2");
        }
        catch (e) {
            reject("No Value in test2");
        }
    }, 1000);
}).catch(err => {
    return err;
})
var p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        try {
            hello_world();
            // reject(new Error("Error!"));
            // resolve("Hello test3");
        }
        catch (e) {
            reject("No Value in test3");
        }
    }, 1000);
}).catch(err => {
    console.log(err);
})

Promise.all([p1, p2, p3])
    .then(values => {
        console.log(values);
    })
    .catch(err => {
        console.log(err);
    })