// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var specChar = "!@#$%";

// Write password to the #password input
function writePassword() {
    var errorMsg = "Please enter a valid selection. ";
    var criteria = [];
    var valid = "";

    /* TODO */
    // --VALIDATION--
    // DONE

    // --GENERATION--
    // actual password generation needs to be done

    Length();
    UpperCase();
    LowerCase();
    Numbers();
    Special();
    console.log(criteria);

    /* ask how many characters (8-128) */
    function Length() {
        var input =
            "How many characters do you need in your password? (Enter a number from 8 - 128)";
        var passLen = prompt(input);
        validateNum(passLen);
        while (valid === "error") {
            passLen = prompt(errorMsg + input);
            validateNum(passLen);
        }
        if (valid === "yes") {
            passLen = Number(passLen);
            criteria.push(passLen);
        }
    }

    /* ask for uppercase (y/n) */
    function UpperCase() {
        var input = "Do you need uppercase letters in you password? (y/n)";
        var passUC = prompt(input);
        passUC = passUC.toLowerCase();
        validateYN(passUC);
        while (valid === "error") {
            passUC = prompt(errorMsg + input);
            validateYN(passUC);
        }
        if (valid === "yes") {
            addYN(passUC);
        }
    }

    /* ask for lowercase (y/n) */
    function LowerCase() {
        var input = "Do you need lowercase letters in you password? (y/n)";
        var passLC = prompt(input);
        passLC = passLC.toLowerCase();
        validateYN(passLC);
        while (valid === "error") {
            passLC = prompt(errorMsg + input);
            validateYN(passLC);
        }
        if (valid === "yes") {
            addYN(passLC);
        }
    }

    /* ask for num (y/n) */
    function Numbers() {
        var input = "Do you need numbers in you password? (y/n)";
        var passNum = prompt(input);
        passNum = passNum.toLowerCase();
        validateYN(passNum);
        while (valid === "error") {
            passNum = prompt(errorMsg + input);
            validateYN(passNum);
        }
        if (valid === "yes") {
            addYN(passNum);
        }
    }

    /* ask for spec (y/n) */
    function Special() {
        var input = "Do you need special characters in you password? (y/n)";
        var passSpec = prompt(input);
        passSpec = passSpec.toLowerCase();
        validateYN(passSpec);
        while (valid === "error") {
            passSpec = prompt(errorMsg + input);
            validateYN(passSpec);
        }
        if ((valid = "yes")) {
            addYN(passSpec);
        }
    }

    /* validates the value is "y" or "n", else returns error */
    function validateYN(x) {
        if (x === "y" || x === "n") {
            valid = "yes";
        } else {
            valid = "error";
        }
        return valid;
    }

    /* validates the value is a number, else returns error */
    function validateNum(x) {
        var x = Number(x);
        if (isNaN(x)) {
            valid = "error";
        } else if (x % 1 !== 0) {
            valid = "error";
        } else if (x < 8 || x > 128) {
            valid = "error";
        } else {
            valid = "yes";
        }
        return valid;
    }

    /* adds value to 'criteria' array */
    function addYN(x) {
        if (x === "y") {
            x = true;
        } else {
            x = false;
        }
        criteria.push(x);
    }
    /*
    var password = generatePassword(criteria);

    var passwordText = document.querySelector("#password");
    passwordText.value = password;
*/
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var i = criteria[0];
    /* iterate i times through the following
      random of criteria 1 - length-1
      console.log(getRandomInt(3));
      random character from appropriate string var
      add to password
      return password 
  */
}
