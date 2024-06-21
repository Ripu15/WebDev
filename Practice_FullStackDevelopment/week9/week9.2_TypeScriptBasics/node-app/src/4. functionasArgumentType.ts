//passing function as an argument to a function
//'delayedCall' the argument is a function that accepts
//no args and return type is void
function delayedCall(fn: () => void) {
    //here fn is being called after 1sec
    setTimeout(fn, 1000);
}
//calling function and with argument as function
delayedCall(function() {
    console.log("hi there");
})