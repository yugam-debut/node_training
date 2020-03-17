// Default Parameter Values
function func(x, y = 7, z = 42) {
    console.log("Default parameter \n x+y+z = ", x + y + z,"\n");
}
func(1);

// Rest parameter
function rest_param(x, y, ...a) {
    console.log("Rest Parameter \n (x+y) *a.length = ", (x + y) * a.length,"\n");
}
rest_param(1, 2, "hello", true, 7)

//Spread Operator
var spread_params = ["hello", true, 7]
var other = [1, 2, ...spread_params]

function spread_op(x, y, ...a) {
    console.log("Spread Operator \n (x+y) *a.length = ", (x + y) * a.length,"\n");
}
spread_op(1, 2, ...other)

//String Interpolation
var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
console.log(`String Interpolation \n Hello ${customer.name},want to buy ${card.amount} ${card.product} for a total of ${card.amount * card.unitprice} bucks?`,"\n");

//Array Matching (Example of swapping of 2 values)
console.log("Array Matching (Example of swapping of 2 values)");
var list = [ 1, 2, 3 ]
var [ a, , b ] = list
console.log(" Value of a before Swapping : ",a);
console.log(" Value of b before Swapping : ",b);
[ b, a ] = [ a, b ]
console.log(" Value of a after Swapping : ",a);
console.log(" Value of b after Swapping : ",b);