// Assignment code here
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element


function generatePassword(){
//created user input
  var userInput = window.prompt('between 8 and 128 characters how long would you want you password?')

  var passwordCompacity = parseInt(userInput)
    if (isNaN(passwordCompacity)){
      window.alert('invalid!: you must use numbers only.')
      return
    } 
    if (passwordCompacity < 8 || passwordCompacity > 128) {
      window.alert('ERROR: passowrd length is not between 8 and 128 characters')
    }

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
