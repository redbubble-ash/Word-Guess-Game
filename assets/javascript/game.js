// define parrots liabiary
var parrots = [{name:"macaw", image:"assets/images/macaw.jpg"},
               {name:"cockatoo", image:"assets/images/cockatoo.jpg"},
               {name:"lovebird", image:"assets/images/lovebird.jpg"},
               {name:"conure", image:"assets/images/conure.jpg"},
               {name:"rosella", image:"assets/images/rosella.jpg"},
               {name:"lorikeet", image:"assets/images/lorikeet.jpg"},
               {name:"cockatiel", image:"assets/images/cockatiel.jpg"},
               {name:"budgie", image:"assets/images/budgie.jpg"},
               {name:"galah", image:"assets/images/galah.jpg"},
               {name:"ringneck", image:"assets/images/ringneck.jpg"}];

var wins = 0;
var NumberGuessRemaining = 12;
var CurrentWord = [];
var LetterAlreadyGuessed = [];


// Grabing a rondom word
function ChooseRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

var ChosenBird = ChooseRandomWord(parrots);
console.log("random word is " + ChosenBird);

var ChosenWord = ChosenBird.name;


// set up function to check if the letter is inside of the random word or if the letter has been typed already.
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
        ChosenBird = ChooseRandomWord(parrots);
        ChosenWord = ChosenBird.name;
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
    var GuessedLetter= event.key.toLowerCase();
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
            document.getElementById("BirdPhoto").src=ChosenBird.image;
            reset();
        }
        console.log("wins " + wins);
        //HTML
        document.getElementById("WinTimes").textContent = wins;
        console.log("current word is "+ CurrentWord);
        //HTML
        document.getElementById("FillSpace").textContent = CurrentWord;
        console.log("letter already guessed " + LetterAlreadyGuessed);
        //HTML
        document.getElementById("LetterAlreadyGuessed").textContent = LetterAlreadyGuessed;
        console.log("Number guess remaining " + NumberGuessRemaining);
        //HTML
        document.getElementById("NumberGuessesRemain").textContent = NumberGuessRemaining;
        

    }
    //if the pressed letter is not inside of the word then display in letterAlreadyGuess
    else{
        //this step ensures the re-entered letter will not display again 
        if (!checkLetter(GuessedLetter,LetterAlreadyGuessed)){
         LetterAlreadyGuessed.push(GuessedLetter);
         NumberGuessRemaining-=1;
         if (NumberGuessRemaining===0){reset();}

        }
        //HTML
        document.getElementById("WinTimes").textContent = wins;
        console.log("current word is "+ CurrentWord);
        //HTML
        document.getElementById("FillSpace").textContent = CurrentWord;
        console.log("letter already guessed " + LetterAlreadyGuessed);
        //HTML
        document.getElementById("LetterAlreadyGuessed").textContent = LetterAlreadyGuessed;
        console.log("Number guess remaining " + NumberGuessRemaining);
        //HTML
        document.getElementById("NumberGuessesRemain").textContent = NumberGuessRemaining;
    }

  }


  
    
























