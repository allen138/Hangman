
// global variables that hold data for the game.. 
var game = ["metallica", "zeppelin", "foofighters", "hendrix", "pinkfloyd", "kyuss", "qotsa", "beatles", "hangman", "aerosmith", "zztop", "acdc", "greenday", "godsmack", "failure"];
var answer = "";
var wordLength = [];
var numBlanks = 0;
var correctGuesses = [];
var usedLetter = [];

// game counts : wins, losses, and guesses left.
var wins = 0;
var lose = 0;
var attempsLeft = 10;

// function to begin each game.
function startGame() {
    answer = game[Math.floor(Math.random() * game.length)];
    console.log(answer);
    wordLength = answer.split("");
    console.log(wordLength);
    numBlanks = wordLength.length;
    console.log(numBlanks);

    attempsLeft = 10;
    usedLetter = [];
    correctGuesses = [];

    for (let i = 0; i < numBlanks; i++) {
        correctGuesses.push("_");
    }
    document.getElementById("wordToGuess").innerHTML = correctGuesses.join(" ");
    document.getElementById("guesses-remaining").innerHTML = attempsLeft;
    document.getElementById("wins-text").innerHTML = wins;
    document.getElementById("losses-text").innerHTML = lose;
    console.log(correctGuesses);
    $(".container").on("click", function(){
        $("#textinput").focus();
    })
}
// function to check if letter is used, or in the answer.
function varifyGuess(letter) {
    var isLetterInWord = false;

    for (let i = 0; i < numBlanks; i++) {
        if (answer[i] == letter) {
            isLetterInWord = true;
        }
    }
    if (isLetterInWord) {
        for (let i = 0; i < numBlanks; i++) {
            if (answer[i] == letter) {
                correctGuesses[i] = letter;
            }
        }
    }

    else {
        usedLetter.push(letter);
        attempsLeft--;
    }
    console.log(correctGuesses);
}

// this function will change the image when the string is guessed correctly.
function changingImage() {
    if (answer === game[0] && wordLength.toString() === correctGuesses.toString()) {
        document.getElementById("img").src = "./assets/images/metallica.jpg";
    } if (answer === game[1] && wordLength.toString() === correctGuesses.toString()) {
        document.getElementById("img").src = "./assets/images/ledzeppelin.jpg";
    } if (answer === game[2] && wordLength.toString() === correctGuesses.toString()) {
        document.getElementById("img").src = "./assets/images/foofighters.jpg";
    } if (answer === game[3] && wordLength.toString() === correctGuesses.toString()) {
        document.getElementById("img").src = "./assets/images/jimihendrix.jpg";
    } if (answer === game[4] && wordLength.toString() === correctGuesses.toString()) {
        document.getElementById("img").src = "./assets/images/pinkfloyd.jpg";
    } if (answer === game[5] && wordLength.toString() === correctGuesses.toString()) {
        document.getElementById("img").src = "./assets/images/kyuss.jpg";
    } if (answer === game[6] && wordLength.toString() === correctGuesses.toString()) {
        document.getElementById("img").src = "./assets/images/qotsa.jpg";
    } if (answer === game[7] && wordLength.toString() === correctGuesses.toString()) {
        document.getElementById("img").src = "./assets/images/neatles.jpg";
    } if (answer === game[8] && wordLength.toString() === correctGuesses.toString()) {
        document.getElementById("img").src = "./assets/images/hangman.png";
    } if (answer === game[9] && wordLength.toString() === correctGuesses.toString()) {
        document.getElementById("img").src = "./assets/images/aerosmith.jpg";
    } if (answer === game[10] && wordLength.toString() === correctGuesses.toString()) {
        document.getElementById("img").src = "./assets/images/zztop.jpg";
    } if (answer === game[11] && wordLength.toString() === correctGuesses.toString()) {
        document.getElementById("img").src = "./assets/images/acdc.jpg";
    } if (answer === game[12] && wordLength.toString() === correctGuesses.toString()) {
        document.getElementById("img").src = "./assets/images/greenday.jpg";
    } if (answer === game[13] && wordLength.toString() === correctGuesses.toString()) {
        document.getElementById("img").src = "./assets/images/godsmack.jpg";
    } if (answer === game[14] && wordLength.toString() === correctGuesses.toString()) {
        document.getElementById("img").src = "./assets/images/failure.jpg";
    }
}
//This function will run whenever a key is pressed.
document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess);
    varifyGuess(userGuess);
    document.getElementById("guesses-remaining").innerHTML = attempsLeft;
    document.getElementById("wordToGuess").innerHTML = correctGuesses.join(" ");
    document.getElementById("letters-guessed").innerHTML = usedLetter.join(" ");

    if (wordLength.toString() === correctGuesses.toString()) {
        wins++;
        alert("You Win!");
        document.getElementById("wins-text").innerHTML = wins;
        changingImage();
        startGame();
    }
    else if (attempsLeft === 0) {
        lose++;
        alert("You Lose!");
        document.getElementById("losses-text").innerHTML = lose;
        startGame();
    }


}
changingImage()
startGame();