// Assignment Code/ DOM elements
var generateBtn = document.querySelector("#generate");

// Attempting to build a for loop that will generate through the functions
//of the randomFunc object to generate a password
function generatePassword() {
  for (var i = 0; i < randomFunc; i++ ) {
    
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var lengthQ = prompt("Please indicate the length of desired password");

if (lengthQ !== randomFunc) {
  alert("please enter only a numerical value");
} else {
  generatePassword.passwordText.innerHTML();
}


  passwordText.value = password;


  copyBtn.removeAttribute("disabled");
  copyBtn.focus();

}

// Generate random characters
var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
}



function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// BONUS EVENT LISTENER