//Variable that creates a random number from 1 to 100
var randomNumber = Math.floor((Math.random() * 100) +1)

//check random number
console.log(randomNumber)

//store user guesses
var guessNumber = 0


function guessGame() {

	//variable that stores user's input 
	var userGuess = document.getElementById('userGuess')

	//variable stores message for a user after guessing a number
	var message = document.getElementById('message')

	if (!userGuess.value || userGuess.value > 100 || userGuess.value < 0){
		message.textContent = 'Try again'
		userGuess.value = ""
		return
	}



	if(userGuess.value == randomNumber) {
		message.textContent = 'Congratulations, You guessed right!'
		return

	} else if(userGuess.value > randomNumber) {

		message.textContent = 'Guess a lower number'
	} else {

		message.textContent = "Guess a higher number"
	}


}


var submitGuess = document.getElementById('subButton')
submitGuess.addEventListener('click', guessGame, false)




















