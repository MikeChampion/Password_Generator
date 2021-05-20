// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    /* VARIABLES */
    var upperArr = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    var lowerArr = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specCharArr = ["!", "@", "#", "$", "%"];
    var errorMsg = "Please enter a valid selection. ";
    var password = "";
    var criteria = [];
    var passLength = [];
    var valid = "";
    var passValid = "";

    /* PROMPTS */
    Length();
    UpperCase();
    LowerCase();
    Numbers();
    Special();
    if (criteria.length === 0) {
        var input =
            "You cannot select 0 password criteria, please begin again.";
        var passLen = alert(input);
    }
    console.log(passLength);
    console.log(criteria);

    if (passValid === "") {
        generatePassword(passLength, criteria);
    }

    var passwordText = document.querySelector("#password");
    passwordText.value = password;

    // GENERATOR FUNCTIONS
    function generatePassword(passLength, criteria) {
        var count = 0;
        for (i = count; i < criteria.length; i++) {
            switch (criteria[i]) {
                case "upper":
                    upper(upperArr);
                    break;
                case "lower":
                    lower(lowerArr);
                    break;
                case "number":
                    number(numArr);
                    break;
                case "specChar":
                    specChar(specCharArr);
                    break;
            }
        }
        count = criteria.length;
        for (i = count; i < passLength; i++) {
            arr(criteria);
        }
        console.log(password);
    }

    function arr(criteria) {
        var type = Math.floor(Math.random() * criteria.length);
        switch (criteria[type]) {
            case "upper":
                upper(upperArr);
                break;
            case "lower":
                lower(lowerArr);
                break;
            case "number":
                number(numArr);
                break;
            case "specChar":
                specChar(specCharArr);
                break;
        }
    }

    function upper() {
        var char = Math.floor(Math.random() * upperArr.length);
        password = password.concat(upperArr[char]);
    }

    function lower() {
        var char = Math.floor(Math.random() * lowerArr.length);
        password = password.concat(lowerArr[char]);
    }

    function number(numArr) {
        numArr = numArr;
        var char = Math.floor(Math.random() * numArr.length);
        password = password.concat(numArr[char]);
    }

    function specChar() {
        var char = Math.floor(Math.random() * specCharArr.length);
        password = password.concat(specCharArr[char]);
    }

    // PROMPT FUNCTIONS
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
            passLength.push(passLen);
            // console.log(passLength);
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
            criteria.push("upper");
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
            criteria.push("lower");
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
            criteria.push("number");
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
        if (valid === "yes") {
            criteria.push("specChar");
        }
    }

    // VALIDATION FUNCTIONS
    /* validates the value is "y" or "n", else returns error */
    function validateYN(x) {
        if (x === "y") {
            valid = "yes";
        } else if (x === "n") {
            valid = "no";
        } else {
            valid = "error";
        }
        return valid;
    }

    /* validates the value is a number, else returns error */
    function validateNum(x) {
        var x = parseInt(x);
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
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
