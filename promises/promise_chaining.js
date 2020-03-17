
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
};
function get_rate(){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            try{
                reject("Error in get rate!");
                resolve(9);
            }
            catch(e){
                reject("No Value of rate");
            }
        }, 2000);
    })
};
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
};
var p1 = get_principle();
p1.then(function(principle){
    return get_rate();
})
.catch(function(error){
    console.log("Error principle = "+error); 
})
var p2 = p1.then(function(principle){
    console.log(principle);
    return get_time();
})
.catch(function(error){
    console.log("Error rate = "+error);
})
var p3 = p2.then(function(rate){
    console.log(rate);
})
.catch(function(error){
    console.log("Error time = "+error);
})