var Promise = require("bluebird");

function get_principle(){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            try{
                // hello_world();
                // reject(new Error("Error in get_principle!"));
                resolve(440);
            }
            catch(e){
                reject("No Value of principle");
            }
        }, 2000);
    })
}
function get_rate(){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            try{
                // reject(new Error("Error in get rate!"));
                resolve(9);
            }
            catch(e){
                reject("No Value of rate");
            }
        }, 2000);
    })
}
function get_time(){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            try{
                // reject(new Error("Error in get time!"));
                resolve(1);
            }
            catch(e){
                reject("No Value of time");
            }
        }, 2000);
        
    })
}
get_principle().then(function(principle){
    get_rate().then(function(rate){
        get_time().then(function(time){
            console.log(principle*rate*time/100);
        }).catch(function(error){
            console.log(error);
        })
    }).catch(function(error){
        console.log(error);
    })
}).catch(function(error) {
    console.log(error);
})

