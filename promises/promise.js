var request = require("request");
var userDetails;

function initialize() {
    var options = {
        url: 'https://api.github.com/users/narenaryan',
        headers: {
            'User-Agent': 'request'
        }
    };
    return new Promise(function(resolve, reject) {
        try{
            request.get(options, function(err, resp, body) {
                if (err) {
                    reject(err);
                } else {
                    reject(new Error("Error!"));
                    // resolve(JSON.parse(body));
                }
            })
        }
        catch(e){
            reject(err);
        }
    })

}

function main() {
    var initializePromise = initialize();
    initializePromise.then(function(result) {
        userDetails = result;
        console.log("Initialized user details");
        //console.log(userDetails)
    }).catch(function(err){
        console.log(err);
    })
}
main();
