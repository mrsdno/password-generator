// Assignment code here

var generatePassword = function() {
  var passwordLength = window.prompt('How long do you want your password to be? (Select between 8 - 128 characters)')
  console.log('The password length is ' + passwordLength + '.');
      
  if (passwordLength < 8 || passwordLength > 128) {
    // alert user password is not right length
    window.alert('The length must be between 8 - 128 characters. Click the button again to start over.');
    var password = "We weren't able to make your password. Please try again!";
    return password;
  }

  else { // set the password length, and get more info from user
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
      var password = "We weren't able to make your password. Please try again!";
      return password;
    }

    else { // create password for user
      // create string with lowercase letters if lowercaseCharacters is true, if not string is empty
      if (passwordModel.lowercaseCharacters) {
        var lowercaseOptions = "abcdefghijklmnopqrstuvwxyz";
      }
      else {
        var lowercaseOptions = "";
      }

      // create string with uppercase letters if uppercaseCharacters is true, if not string is empty
      if (passwordModel.uppercaseCharacters) {
        var uppercaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      else {
        var uppercaseOptions = "";
      }

      // create string with numbers if numericCharacters is true, if not string is empty
      if (passwordModel.numericCharacters) {
        var numericOptions = "1234567890";
      }
      else {
        var numericOptions = "";
      }

      // create string with special characters if speicalCharacters is true, if not string is empty
      if (passwordModel.specialCharacters) {
        var specialOptions = "[$&+,:;=?@#|'<>.-^*()%!]"
      }
      else {
        var specialOptions = "";
      }
      
      // create string with all of the options we have to use for the password and set length based off user input
      var passwordList = (lowercaseOptions + uppercaseOptions + numericOptions + specialOptions);
      var password = '';
      password.length = passwordModel.passwordLength;
      
      // use loop to select random character from passwordList
      for(var i=0; i < passwordModel.passwordLength; i++) {
      password +=  passwordList.charAt(Math.floor(Math.random() * passwordList.length));
      }  
      console.log(password);
      return password;
    }
  }
  console.log(passwordModel);
}

// object to hold user inputs
var passwordModel = {
  passwordLength: {},
  lowercaseCharacters: {},
  uppercaseCharacters: {},
  numericCharacters: {},
  specialCharacters: {} 
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
