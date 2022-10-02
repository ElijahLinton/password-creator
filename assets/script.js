
var generateBtn = document.querySelector("#generate");

//function set in place to select random index between list specifically for this case arrays for choice of characters
 function wholeRandom(min, max){
  if (!max) {
    max = min
    min = 0 

  }
  var randomize = Math.random()
  return Math.floor(min*(1 - randomize) + randomize*max)
 }
//wholeRandomSelected function returns list of random array indexs ranging from numbers symbols and letters
 function wholeRandomSelected(list) {
    return list[wholeRandom(list.length)]
 }

//created user input referring to the pefered amount of characters the user wishes to have
function generatePassword(){
// user input give user the opportunity to choose between 8 and 128 characters which number symbol or letters the user wishes
  var userInput = window.prompt('between 8 and 128 characters how long would you want you password?')
// passwordCompacity turns whatever string number into an actual integer  to help interpret the length of password
  var passwordCompacity = parseInt(userInput)
  //these if conditions reminds the user to make sure they arer using the correct characters and choosing the right option to proceed
    if (isNaN(passwordCompacity)){
      window.alert("REMINDER!: make sure you're using numbers only to specify your peferred length and press 'ok' afterwards.")
      return
    }
     //the window alert lets the user know that their password are either too short or too 128
    if (passwordCompacity < 8 || passwordCompacity > 128) {
      window.alert('REMINDER!: make sure your passowrd length is between 8 and 128 characters.')
      return
    } 

    
 // these variables are choices the user has they ccan decide what do they want and what they dont want in their password
    var numberChosen = window.confirm('are numbers your choice of characters within your password?')
    var lowercaseChosen = window.confirm('are lowercase your choice of characters within your password?')
    var symbolChosen = window.confirm('are symbols your choice of characters within your password?')
    var uppercaseChosen = window.confirm('are uppercase letters your choice of characters ')
    //depending on the choices the user chooses they will have choice or multiple choices of characters in their password
    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var symbols = ["!","@","#","$","%","^","&","*","(",")",":",">","<","?","}","|","*","-","+"]
    var upperCase = []
    var numbers = ["0","1","2","3","4","5","6","7","8","9"]
// random characters is a place holder array for characters that the user selected
    var randomCharacters = []
    //an array of uppercase characters definitley makes sense but seemed more simple to create a loop that turns lowercase letters to uppercase upon command
  for (var i = 0; i < lowerCase.length; i++){
    upperCase[i] = lowerCase[i].toUpperCase()
  }
//this is where the randomCharacters empty array is most important
//it is implemented inside the if else conditions to say if a certain character array or multiple is selected it will go inside the empty array
  if (uppercaseChosen === true){
    randomCharacters.push(upperCase)
    
  }

  if (numberChosen === true){
  randomCharacters.push(numbers)
  
  }

  if(symbolChosen === true){
    randomCharacters.push(symbols)
    
  }

  if(lowercaseChosen === true){
    randomCharacters.push(lowerCase)
    
  }
   else if(randomCharacters.length === 0){
    randomCharacters.push(symbols)
  }
  // the final product variable is self explanatory it is the key to the most important par of the webpage
  // the actual password will be string instead of listed indexed characters
  var finalProduct = ""
//the loop collects the amount of characters needed to complete the password compacity then returns the value directly into the text area
  for (var i = 0; i < passwordCompacity; i++) {
    var charSelected = wholeRandomSelected(randomCharacters)
    var randomEl = wholeRandomSelected(charSelected)
    finalProduct += randomEl
    
  } 
  console.log(finalProduct)
  return finalProduct
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
