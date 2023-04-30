// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var password = {
  length: 0,
  lowercase: false,
  uppercase: false,
  numeric: false,
  specialCharacters: false,
  password: "",
  setPasswordLength: function () {

  },
  setLowercase: function () {

  },
  setUppercase: function () {

  },
  setNumeric: function () {

  },
  setSpecialCharacters: function () {

  },
  getPassword: function () {

  }

};


function generatePassword() {
  var length = getPasswordLengthInput();
  if (length == null) {
    alert("Bye");
    return "";
  }

}

function getPasswordLengthInput() {
  var pwdLength;

  while (isNaN(pwdLength) || pwdLength < 8 || pwdLength > 128) {
    pwdLength = prompt("Please choose length of password - at least 8 characters and no more than 128 characters");
    if (pwdLength == null) {
      return null;
    }
    pwdLength = parseInt(pwdLength.trim());
    if (isNaN(pwdLength)) {
      alert("Please choose a number between 8 and 128");
    }
  }
  return pwdLength;
}

function checkLowercase(){

}
