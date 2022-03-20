// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
  var passwordLength = window.prompt('How long do you want your password to be? (Select between 8 - 128 characters)')
  console.log('The password length is ' + passwordLength + '.');
      
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert('The length must be between 8 - 128 characters. Click the button again to start over.');
  }

  else {
    passwordModel.passwordLength = passwordLength;
  
    // ask about lowercase characters and assign to password model
    var lowercaseCharacters = window.confirm('Do you want your password to include lowercase characters?');
    passwordModel.lowercaseCharacters = lowercaseCharacters;
    
    // ask about uppercase characters and assign to password model
    var uppercaseCharacters = window.confirm('Do you want your password to include uppercase characters?');
    passwordModel.uppercaseCharacters = uppercaseCharacters;

    // ask about numeric characters and assign to password model
    var numericCharacters = window.confirm('Do you want your password to include numeric characters?');
    passwordModel.numericCharacters = numericCharacters;

    // ask about special characters and assign to password model
    var specialCharacters = window.confirm('Do you want your password to include special characters?');
    passwordModel.specialCharacters = specialCharacters;

    // check password model to ensure at least one true value for characters
    if (!passwordModel.lowercaseCharacters && !passwordModel.uppercaseCharacters && !passwordModel.numericCharacters && !passwordModel.specialCharacters) {
      window.alert('You need to choose at least one character type to work with! Please click the button to start over.');
    }

    else {
      // create the password from the password model calling createPassword
    }
  }
  console.log(passwordModel);
}

var passwordModel = {
  passwordLength: {},
  lowercaseCharacters: {},
  uppercaseCharacters: {},
  numericCharacters: {},
  specialCharacters: {} 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
