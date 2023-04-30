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

//password object to store password properties and methods
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
  setPassword: function(password){
    this.password = password;
  },
  //Create password based on length and type of characters specified by user
  createPassword: function(charUtility) {
    while (this.pwdLength > 0) {

      if (this.lowercase && this.pwdLength > 0) {
        this.password += charUtility.getRandomLowercase();
        --this.pwdLength;
      }
      if (this.uppercase && this.pwdLength > 0) {
        this.password += charUtility.getRandomUppercase();
        --this.pwdLength;
      }
      if (this.specialCharacters && this.pwdLength > 0) {
        this.password += charUtility.getRandomSpecialCharacter();
        --this.pwdLength;
      }
      if (this.numeric && this.pwdLength > 0) {
        this.password += charUtility.getRandomNumericCharacter();
        --this.pwdLength;
      }
    }
    alert(this.password);
    return this.password;
  },
  //initialize this object properties
  initialize: function(){
    this.setPwdLength(0);
    this.setLowercase(false);
    this.setUppercase(false);
    this.setNumeric(false);
    this.setSpecialCharacters(false);
    this.setPassword("");
  }
};

//Utility object to generate a random lowercase ,uppercase, numeric, special character 
var charUtility = {
  getRandomLowercase: function () {
    var lowercaseCharAscii = Math.floor(Math.random() * 26) + 97;
    var lowercaseChar = String.fromCharCode(lowercaseCharAscii);
    console.log("lowercase : " +lowercaseChar);
    return lowercaseChar;
  },
  getRandomUppercase: function () {
    var uppercaseCharAscii = Math.floor(Math.random() * 26) + 65;
    var uppercaseChar = String.fromCharCode(uppercaseCharAscii);
    console.log("uppercase : " +uppercaseChar);
    return uppercaseChar;
  },
  getRandomSpecialCharacter: function () {
    const specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var specialChar = specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    console.log("special char " + specialChar);
    return specialChar;
  },
  getRandomNumericCharacter: function () {
    var number = Math.floor(Math.random() * 10);
    console.log("number : " +number);
    return number;
  }

}

//Generate password based on user input
function generatePassword() {
  password.initialize();
  var length = setPasswordLength(password);
  if (length == null || !setPasswordCharacters(password)) {
    return "";
  }
  return password.createPassword(charUtility);
}

//Set password length based on user input
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
  password.setPwdLength(pwdLength);
  return pwdLength;
}

//Set password characters based on user input
function setPasswordCharacters(password) {
  var lowercaseReqd = false;
  var uppercaseReqd = false;
  var specialCharsReqd = false;
  var numericReqd = false;
  while (!(lowercaseReqd || uppercaseReqd || specialCharsReqd || numericReqd)) {
    input = confirm("Please choose if you want lowercase, uppercase, special characters, numbers in the password. Choose at least one type");
    if (!input) {
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

//Prompt user to check if password should include lowercase characters
function getLowercaseInput() {
  return (confirm("Please click Ok if you want lowercase in password"));
}

//Prompt user to check if password should include uppercase characters
function getUppercaseInput() {
  return (confirm("Please click Ok if you want uppercase in password"));
}

//Prompt user to check if password should include special characters
function getSpecialCharactersInput() {
  return (confirm("Please click Ok if you want special characters in password"));
}

//Prompt user to check if password should include numeric characters
function getNumericInput() {
  return (confirm("Please click Ok if you want numbers in password"));
}
