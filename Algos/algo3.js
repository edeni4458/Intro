var x = 5;
    
function setX(newValue) {
    // THe line below declares x to a new value
    x = newValue; 
}
    // that new declaration is loged here
console.log(x); 
// that new value is given here, which connections to the function
setX(15);
// that new value is now logged here
console.log(x);


// this line stores x to equal 5
var x = 5;
    // this line declares a function to add to x; amount is the parameter
function addToX(amount) {
    // this line begins a return of x plus the amount
    return x + amount;
    // we will log "hello there" to next to the return
    console.log("hello there");
}
    // this line logs in x which is 5
console.log(x);
// this line stores add to x to be -10
var result = addToX(-10);
// this line logs the result of adding 5 to -10 = -5
console.log(result);
// this line logs the value of x, which is 5
console.log(x);



// a function is being declared, the parameter given is an array
function isPal(arr) {
    // here is the beg of a FOR-loop; left is stored to be 0; left is less than the length of the array divided by 2; then we increment it by 1 
    for(var left=0; left<arr.length/2; left++) {
        // right is stored to equal the length of the array minus 1 minus the value of left discovered on the previous line
        var right = arr.length-1-left;
        // 
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);
