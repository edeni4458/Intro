
// The .getDay is built in JS fuction that will search for the day of the week from Sunday to Saturday: 0 = Sun 6 = Sat

var today = new Date();
    if(today.getDay() == 1){
        console.log("I hate Mondays!");
    }

    if(today.getDay() != 1);{
        console.log("Today is alright!");
    }

// This line of code runs the same condition without rewriting the entire code using the "else"
    var today = new Date();
    if(today.getDay() != 0){
        console.log("I hate Mondays!");
    } else{
        console.log("Today is alright!");
    }

    var today = new Date();
    if(today.getDay() == 1) {
        console.log("I hate Mondays!");
    } else if(today.getDay() == 5) {
        console.log("Friday? More like Fri-yay!");
    } else {
        console.log("Today is alright!");
    }
    


    var temperature = 60; // let's assume this is degrees Fahrenheit
var isRaining = false;
    
if(temperature >= 50) {
    if(!isRaining) {
        console.log("This is a good day to go for a walk!");
    }
}

var is5even = 5 % 2 == 0;
var is500even = 500 % 2 == 0;
    
console.log(is5Even);   // false
console.log(is500Even); // true

var is78DivisibleBy3 = 78 % 3 == 0;
console.log(is78DivisibleBy3); // true







