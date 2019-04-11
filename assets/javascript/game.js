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
console.log("random word is "+ChosenWord);


// set up function to check if the letter is inside of the random word or if the letter was typed before.
function checkLetter(letter,word){
    for(i=0;i<word.length;i++){
        if (letter===word[i]){
            return true;
        }
    }
    return false;
}

//create empty arrary for chosen word
for (i=0;i<ChosenWord.length;i++){
    CurrentWord.push(" ");
}
console.log(CurrentWord);



//type a letter and check if this letter is inside of the word and add it to the current word
document.onkeyup=function(event){
    var GuessedLetter= event.key;
    console.log(GuessedLetter);
    if (checkLetter(GuessedLetter,ChosenWord)){
        for(i=0;i<ChosenWord.length;i++){
            if (ChosenWord[i]===GuessedLetter){
             CurrentWord[i]=GuessedLetter;
            }
        }
        console.log(CurrentWord);
    }
    else{
        if (!checkLetter(GuessedLetter,LetterAlreadyGuessed)){
         LetterAlreadyGuessed.push(GuessedLetter);
         NumberGuessRemaining-=1;
        }
    console.log(LetterAlreadyGuessed);
    console.log(NumberGuessRemaining);
    }
  }























  //checking to see if letter selected matches the letter in random word, if letter matches,assign letter to CurrentWord[]. Number guess remianing reduce -1 when guess is wrong
var IfLetterMatch=false;
function CheckLetter(letter){
for (i=0; i<ChosenWord.length;i++){
    if (ChosenWord[i]===letter.toLowerCase()){
        IfLetterMatch=true;
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