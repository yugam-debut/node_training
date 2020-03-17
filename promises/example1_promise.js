function get_principle(){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            try{
                hello_world();
                // reject(new Error("Error in get_principle!"));
                resolve(440);
            }
            catch(e){
                reject(e);
            }
        }, 1000);
    })
}
function get_rate(){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            try{
                //hello_world();
                // reject(new Error("Error in get rate!"));
                resolve(9);
            }
            catch(e){
                reject("No Value of rate");
            }
        }, 1000);
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
        }, 1000);
    })
}

let principal,rat;
get_principle().then(function(principle){
    principal = principle;
    return get_rate();
}).catch(function(error) {
    console.log(error);
}).then(function(rate){
    rat = rate;
    return get_time();
}).catch(function(err){
    console.log(err);
}).then(function(time){
    console.log("Result : "+principal*rat*time/100);
}).catch(function(erro){
    console.log(erro);
})

