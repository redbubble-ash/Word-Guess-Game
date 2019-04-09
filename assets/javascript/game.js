// define parrots names
var parrots = ["macaw", "cockatoo", "lovebird", "conue", "rosella", "lorikeet", "cokatiel", "budgie", "galah", "ringneck"];

var wins = 0;
var NumberGuessRemaining = 12;
var CurrentWord = [];
var LetterAlreadyGuessed = [];

// Grabing a rondom word
function ChooseRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

var ChosenWord = ChooseRandomWord(parrots);
console.log(ChosenWord);


//checking to see if letter selected matches the letter in random word, if letter matches,assign letter to CurrentWord[]. Number guess remianing reduce -1 when guess is wrong
var IfLetterMatch=false;
function CheckLetter(letter){
for (i=0; i<ChosenWord.length;i++){
    if (ChosenWord[i]===letter.toLowerCase()){
        IfLetterMatch=true;
        CurrentWord[i]=letter;
    }
  }
   if (IfLetterMatch==false){
       NumberGuessRemaining-=1;
   }
}

//test
console.log(CheckLetter("c"));
console.log(CurrentWord);
console.log(NumberGuessRemaining);