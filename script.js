// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var specChar = "!@#$%";

// Write password to the #password input
function writePassword() {
  var criteria = "";

  /*
  ask how many characters (8-128)

  ask for upper
  var lc = prompt(Would you like to include lowercase letters? y/n);

  add to criteria (true of false)
  if yes add to criteria  

  ask for lower
  add to criteria (true of false)
  ask for num
  add to criteria (true of false)
  ask for spec
  add to criteria (true of false)
  */

  
  var password = generatePassword();


  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword {
  var i = criteria[0];
  /* iterate i times through the following
      random of criteria 1 - length-1
      random character from appropriate string var
      add to password
      return password 
  */
}