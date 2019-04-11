// define parrots names
var parrots = ["macaw", "cockatoo", "lovebird", "conue", "rosella", "lorikeet", "cockatiel", "budgie", "galah", "ringneck"];

var wins = 0;
var NumberGuessRemaining = 12;
var CurrentWord = [];
var LetterAlreadyGuessed = [];

// Grabing a rondom word
function ChooseRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

var ChosenWord = ChooseRandomWord(parrots);
console.log("random word is " + ChosenWord);


// set up function to check if the letter is inside of the random word or if the letter was typed before.
function checkLetter(letter,word){
    for(i=0;i<word.length;i++){
        if (letter===word[i]){
            return true;
        }
    }
    return false;
}

//set up reset function
function reset(){
        NumberGuessRemaining = 12;
        CurrentWord = [];
        LetterAlreadyGuessed = [];
        ChosenWord = ChooseRandomWord(parrots);
        console.log("Choose a new word " + ChosenWord);
        for (i=0;i<ChosenWord.length;i++){
            CurrentWord.push(" ");
        }
        console.log(CurrentWord);
        
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
    //if the pressed letter is inside of the word then add the letter in new array: currentWord
    if (checkLetter(GuessedLetter,ChosenWord)){
        //check if currentWord has empty space, if all letters in the word have been guessed, all index spaces should be filled
        var checkEmptySpace=true;
        for(i=0;i<ChosenWord.length;i++){
            if (ChosenWord[i]===GuessedLetter){
             CurrentWord[i]=GuessedLetter;
            }
            if (CurrentWord[i]===" "){
                checkEmptySpace=false;
            }
        }
        if (checkEmptySpace===true){
            wins++;
            reset();
        }
        console.log("wins " + wins);
        console.log("current word is "+ CurrentWord);
    }
    //if the pressed letter is not inside of the word then display in letterAlreadyGuess
    else{
        //this step ensures the re-entered letter will not display again 
        if (!checkLetter(GuessedLetter,LetterAlreadyGuessed)){
         LetterAlreadyGuessed.push(GuessedLetter);
         NumberGuessRemaining-=1;
         if (NumberGuessRemaining===0){reset();}

        }
    console.log("letter already guessed " + LetterAlreadyGuessed);
    console.log("Number guess remaining " + NumberGuessRemaining);
    }

  }
























