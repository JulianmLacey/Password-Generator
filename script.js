// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//get desired length from the user
var getLength = function(){
  var length = Number(prompt("How Many Characters?", "Enter Length"))
  if((length<8)||(length>128)){
    alert("Invalid Length");
    return getLength();
  }
  console.log(typeof length);
  console.log(length);
  return length;

}

var promptReqs = function(){
  var req = "";
  req += prompt("Lowercase Letters", "y/n");
  req += prompt("uppercase Letters", "y/n");
  req += prompt("numeric Letters", "y/n");
  req += prompt("specialChar Letters", "y/n");

  console.log(typeof req);
  console.log(req);
  if(req=="nnnn"){
    alert("Atleast One Character Type Must Be Used");
    return promptRequirements();
  }else{
    return req;
  }

  
}

var buildPassword = function(passLength, reqs){
  var chars = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!@#$%^&*()"];
  var charsValid = " ";
  for(let i = 0; i<4;i++){
    if(reqs[i]=="y"){
      charsValid+=chars[i];
    }
  }
  
  console.log(passLength);
  console.log(reqs);
  var passStr = "";

  for(var j = 0; j<passLength;j++){
    passStr+=charsValid[Math.floor(Math.random() * charsValid.length)];
  }

  console.log(passStr);
  return passStr;
}



function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var len = getLength();
  var reqs = promptReqs();
  passwordText.value = buildPassword(len, reqs);



  return ;
}


generateBtn.addEventListener("click", writePassword);






// Add event listener to generate button


/*
function generatePassword(){
  var length = Number(prompt("How Many Characters?", "Enter Length"))
  if((length<8)||(length>128)){
    alert("Invalid Length");
    return generatePassword();
  }
  console.log(typeof length);
  console.log(length);

  var req = promptRequirements();
  var pass = buildPassword(length, req);
  console.log(pass);
  return pass;
}



function promptRequirements(){
  var req = "";
  req += prompt("Lowercase Letters", "y/n");
  req += prompt("uppercase Letters", "y/n");
  req += prompt("numeric Letters", "y/n");
  req += prompt("specialChar Letters", "y/n");

  console.log(req);
  if(req=="nnnn"){
    alert("Atleast One Character Type Must Be Used");
    return promptRequirements();
  }else{
    return req;
  }
  
}

function buildPassword(len, reqs){
  var chars = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!@#$%^&*()"];
  var charsValid = " ";
  for(let i = 0; i<4;i++){
    if(reqs[i]=="y"){
      charsValid+=chars[i];
    }
  }
  console.log(charsValid);
  var passStr = " ";
  for(let i = 0; i<len;i++){
    passStr += charsValid[Math.random(charsValid.length-1)];
  }
  console.log(passStr);
  return passStr;
}
*/
//8-128 characters
//lowercase, uppercase, numeric, special characters
//must have atlease one
//generate password
