// Assignment code here
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element
 function wholeRandom(min, max){
  return Math.floor(math.random()*(max - min) + min)
 }

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
    } else{
//assigned variables to windows used to give users options of characters in their passowrd this gives the user a selection of choices 
    var numberChosen = window.confirm('are numbers your choice of characters within your password?')
    var lowercaseChosen = window.confirm('are lowercase your choice of characters within your password?')
    var symbolChosen = window.confirm('are symbols your choice of characters within your password?')
    var uppercaseChosen = window.confirm('are uppercase letters your choice of characters ')
    }
    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var symbols = ["!","@","#","$","%","^","&","*","(",")",":",">","<","?","}","|","*","-","+"]
    var upperCase = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var numbers = ["0","1","2","3","4","5","6","7","8","9"]

    var randomCharacters = []
    for (var i = 0; i < lowerCase.length;i++){
      upperCase[i] = lowerCase[i].toUpperCase()
    }

  if (uppercaseChosen === true){
    randomCharacters.push(upperCase)
  }

  if (numberChosen === true){
  randomCharacters.push(numbers)
  }

  if(symbolChosen === true){
    randomCharacters.push(symbols)
  }

  if(symbolChosen === true){
    randomCharacters.push(lowerCase)
  }
  var finalProduct = ""

  for (var i = 0; i < passwordCompacity;i++){
    var charSelected = randomCharacters[wholeRandom(0, randomCharacters.length - 1)]
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
