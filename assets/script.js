// Assignment code here
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element


function generatePassword(){
//created user input referring to the pefered amount of characters the user wishes to have
  var userInput = window.prompt('between 8 and 128 characters how long would you want you password?')

  var passwordCompacity = parseInt(userInput)
    if (isNaN(passwordCompacity)){
      window.alert('invalid!: you must use numbers only.')
      return
    } //the window alert lets the user know that their password are either too short or too 128
    if (passwordCompacity < 8 || passwordCompacity > 128) {
      window.alert('ERROR: passowrd length is not between 8 and 128 characters')
    }
//assigned variables to windows used to give users options of characters in their passowrd this gives the user a selection of choices 
    var numberChosen = window.confirm('are numbers your choice of characters within your password?')
    var lowercaseChosen = window.confirm('are lowercase your choice of characters within your password?')
    var symbolChosen = window.confirm('are symbols your choice of characters within your password?')
    var uppercaseChosen = window.confirm('are uppercase letters your choice of characters ')
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
