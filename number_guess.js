// guess the number git commit 

var guessing_number = function(){
var number = Math.floor(Math.random()*100+1);
var guess = parseInt(prompt("Pick a number between 1 and 100"));

while (guess != number){

if (guess>number){    
guess = parseInt(prompt("Number is too large"));
}

if (guess<number){
  guess = parseInt(prompt("Number is too small."));
}

}

alert("correct Number!");
}

guessing_number()




//working on git commit for macvim
//get random number
//ask for guess
//check if number === guess 'correct' end program
//if number< guess 'guess to high' guess again
//if number > guess 'guess to low' guess again
///
