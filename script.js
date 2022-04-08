var generateBtn = document.querySelector("#generate");
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z", ];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z", ];
var spChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var choices = [];

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  while (true) {
    var firstPrompt = prompt("Choose between 8 to 128 characters, How long would you like your password to be?");
    if (!firstPrompt) {
      alert("Please choose length of password");
    } else if (firstPrompt < 8 || firstPrompt > 128) {
      prompt("Please pick a password higher than 8 or lower than 128 characters");
    } else {
      break;
    }
  }

  if (confirm("Do you want to add a number?")) {
    choices = choices.concat(number);
  }
  if (confirm("Do you want symbol?")) {
    choices = choices.concat(spChar);
  }
  if (confirm("Do you want an upper case?")) {
    choices = choices.concat(upperCase);
  }
  if (confirm("Do you want a lower case?")) {
    choices = choices.concat(lowerCase);
  }
  if (choices.length == 0) {
    alert("Please choose a criteria");
  }

  var randomPassword = [];
  for (var i = 0; i < firstPrompt; i++) {
    var allChoices = choices[Math.floor(Math.random() * choices.length)];
    randomPassword.push(allChoices);
  }
  return randomPassword.join("");
}

generateBtn.addEventListener("click", writePassword);