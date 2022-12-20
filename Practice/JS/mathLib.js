// var floor = Math.floor(1.8);
// var ceiling = Math.ceil( Math.PI );
// var random = Math.random();
    
// console.log(floor);
// console.log(ceiling);
// console.log(random);

// var floor2 = Math.floor(25)
// var ceiling2 = Math.ceil(26);
// var random = Math.random()

// console.log(floor2);
// console.log(ceiling2);
// console.log(random)


// function d6() {
//     var roll = Math.random();
//     // your code here

//     return roll;
// }
    
// var playerRoll = d6();
// console.log("The player rolled: " + playerRoll);


function oracalsAnswers() {
    // var floor = Math.floor(array.length[i] * Math.random());
    // var ceil = Math.ceil(array.length[i] * Math.random())
    // var lifesAnswers = Math.random();
    var randomIndex = Math.floor(Math.random()*lifesAnswers.length);

    return lifesAnswers[randomIndex];
}


var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];
console.log("The oracle say" + (oraclesAnswers()));