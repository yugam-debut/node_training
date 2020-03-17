async function Hello(name) {
        try {
            // hello_world();
            return Promise.resolve(`Hello, ${name}`);
        }
        catch (e) {
            Promise.reject(e);
        }
}
async function test() {
    try{
        let a = await Hello('Harrison');
        console.log(a);
    }
    catch(err){
        console.log("Error is ",err);
    }
}
test();