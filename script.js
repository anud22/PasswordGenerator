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
  pwdLength: 0,
  lowercase: false,
  uppercase: false,
  numeric: false,
  specialCharacters: false,
  password: "",
  setPwdLength: function (pwdLength) {
    this.pwdLength = pwdLength;
  },
  setLowercase: function (lowercase) {
    this.lowercase = lowercase;

  },
  setUppercase: function (uppercase) {
    this.uppercase = uppercase;
  },
  setNumeric: function (numeric) {
    this.numeric = numeric;
  },
  setSpecialCharacters: function (specialCharacters) {
      this.specialCharacters = specialCharacters;
  },
  getPassword: function () {

  }

};


function generatePassword() {
  var length = setPasswordLength(password);
  if (length == null || !setPasswordCharacters(password)) {
      return "";
  }
 
  alert("Lowercase " + password.lowercase);
  alert("uppercase " + password.uppercase);
  alert("special " + password.specialCharacters);
  alert("numeric " + password.numeric);
}

function setPasswordLength(password) {
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
  password.setPwdLength(this.pwdLength);
  return pwdLength;
}

function setPasswordCharacters(password) {
  var lowercaseReqd = false;
  var uppercaseReqd = false;
  var specialCharsReqd = false;
  var numericReqd = false;
  while (!(lowercaseReqd || uppercaseReqd || specialCharsReqd || numericReqd)) {
    input = confirm("Please choose if you want lowercase, uppercase, special characters, numbers in the password. Choose at least one type");
    if(!input){
      return false;
    }
    lowercaseReqd = getLowercaseInput();
    uppercaseReqd = getUppercaseInput();
    numericReqd = getNumericInput();
    specialCharsReqd = getSpecialCharactersInput();
  }
  password.setLowercase(lowercaseReqd);
  password.setUppercase(uppercaseReqd);
  password.setNumeric(numericReqd);
  password.setSpecialCharacters(specialCharsReqd);
  return true;
}

function getLowercaseInput() {
  return (confirm("Please click Ok if you want lowercase in password"));
}

function getUppercaseInput() {
  return (confirm("Please click Ok if you want uppercase in password"));
}
function getSpecialCharactersInput() {
  return (confirm("Please click Ok if you want special characters in password"));
}
function getNumericInput() {
  return (confirm("Please click Ok if you want numbers in password"));
}