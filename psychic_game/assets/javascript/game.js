var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var words = ['daenerys', 'jon', 'sansa', 'arya', 'tyrion', 'cersei', 'jamie', 'theon', 'khal'];
var pickedWord = "";
var letterWord = [];
var blankNumber = 0;
var wrongRight = [];
var wrongPick = [];
var countWins = 0;
var loseCount = 0;
var guessesLeft = 12;
var rightGuessCounter = 0;
//console.log(words)

function reset() {
	pickedWord = words[Math.floor(Math.random() * words.length)];
	letterWord = pickedWord.split('');
	blankNumber = letterWord.length;
	letterGuessed = 0;
	rightGuessCounter = 0;
	guessesLeft = 12;
	wrongPick = [];
	wrongRight = [];
	letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	test = false;
	startGame();
	//console.log(pickedWord)
}
function startGame() {
	pickedWord = words[Math.floor(Math.random() * words.length)];
	letterWord = pickedWord.split('');
	blankNumber = letterWord.length;
	//	console.log(letterWord);

	rightGuessCounter = 0;
	guessesLeft = 12;
	wrongPick = [];
	wrongRight = [];
	letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	for (var i = 0; i < blankNumber; i++) {
		wrongRight.push('_');
		document.getElementById('wordToGuess').innerHTML = wrongRight;
	}

	document.getElementById('wordToGuess').innerHTML = wrongRight.join(' ');
	document.getElementById('numberOfGuesses').innerHTML = guessesLeft;
	document.getElementById('winCounter').innerHTML = countWins;
	document.getElementById('lossCounter').innerHTML = loseCount;
	document.getElementById('wrongGuesses').innerHTML = wrongPick;
	//console.log(wrongRight);
}

function compareLetters(userKey) {
	if (pickedWord.indexOf(userKey) > -1) {
		for (var i = 0; i < blankNumber; i++) {
			if (letterWord[i] === userKey) {
				rightGuessCounter++;
				wrongRight[i] = userKey;
				document.getElementById('wordToGuess').innerHTML = wrongRight.join(' ');
			}
		}
		//console.log(wrongRight);
	}
	else {
		wrongPick.push(userKey);
		guessesLeft--;
		document.getElementById('numberOfGuesses').innerHTML = guessesLeft;
		document.getElementById('wrongGuesses').innerHTML = wrongPick;
		//console.log('Wrong Pick = ' + wrongPick);
		//console.log('Guesses left are ' + guessesLeft);
	}

}
function winLose() {
	if (rightGuessCounter === blankNumber) {
		countWins++;
		document.getElementById('winCounter').innerHTML = countWins;
		alert('You Win');
		reset();
	}
	else if (guessesLeft === 0) {
		loseCount++;
		document.getElementById('lossCounter').innerHTML = loseCount;
		alert('You Lose');
		reset();
	}
}

startGame();

document.onkeyup = function (event) {
	test = true;
	var letterGuessed = event.key;
	for (var i = 0; i < letters.length; i++) {
		if (letterGuessed === letters[i] && test === true) {
			var spliceDword = letters.splice(i, 1);
			//console.log('Double word is = ' + letters[i])
			//console.log('Spliced Word is = ' + spliceDword);

			compareLetters(letterGuessed);
			winLose();
		}
	}

}