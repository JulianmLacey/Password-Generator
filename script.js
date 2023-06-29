/*
Julian Lacey
6/29/23

Javascript for password generator
*/

//Entry point when generate button selected
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

//get desired password length from the user
var getLength = function () {
  var length = Number(prompt("How Many Characters?", "Enter Length"));

  //check to make sure its a valid length
  if (length < 8 || length > 128) {
    alert("Invalid Length");
    return getLength();
  }

  return length;
};

//get password character requrements from user
var promptReqs = function () {
  //cat each answer into a string for verification and character selection
  var req = "";
  req += prompt("Lowercase Letters", "y/n");
  req += prompt("uppercase Letters", "y/n");
  req += prompt("numeric Letters", "y/n");
  req += prompt("specialChar Letters", "y/n");

  //verify atleast one character type is included
  //if none are included re-prompt the user, otherwise return the string
  if (req[0] != "y" && req[1] != "y" && req[2] != "y" && req[3] != "y") {
    window.alert("Atleast One Character Type Must Be Used");
    return promptRequirements();
  }

  return req;
};

//Create the password
var buildPassword = function (passLength, reqs) {
  var chars = [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    "!@#$%^&*()",
  ];
  var charsValid = "",
    passStr = "";

  //iterate over the string of requirements
  //if user answered y, concatonate the corresponding character types from the chars arrar
  //to the valid character string
  for (let i = 0; i < 4; i++) {
    if (reqs[i] == "y") charsValid += chars[i];
  }

  //concatonate the desired number of characters to the password, randomly choosing a character from the
  //valid characters string
  for (var j = 0; j < passLength; j++) {
    passStr += charsValid[Math.floor(Math.random() * charsValid.length)];
  }

  return passStr;
};

/*--------MAIN Function----------*/
//write the password the the page
function writePassword() {
  //get the password object from the browser
  var passwordText = document.querySelector("#password");

  //get user password requrements
  //Build the password, then set the password value equal to the generated string
  passwordText.value = buildPassword(getLength(), promptReqs());

  return passwordText.value;
}
