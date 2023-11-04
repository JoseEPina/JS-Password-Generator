// Assignment code here
//* Constant needed here to ensure that these are NOT changed
const PWD_MIN_LENGTH = 8;
const PWD_MAX_LENGTH = 128;
const NUMBER_OF_CRITERIA = 4;

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '(', ')', '-', '.', '?', '[', ']', '_', '`', '~', ';', ':', '@', '#', '$', '%', '^', '&', '*', '+', '=',];

// Object array assignments needed here to store the each of
// the password criteria needed for each selection.
//! Variable needed here to create an Object Array assignment
//! for the password Criteria
//TODO  Criteria object:
//TODO  name - Criteria Name
//TODO  selected - was this criteria selected for password (yes/no)
//TODO  totalChars - random # of total criteria characters TO BE used in password
//TODO  assignedChars - current # of criteria characters used in password
//TODO  setOfChars - defines set of the different characters to be used FOR THIS criteria

var criteria2 = [
    {
        name: 'lowercase',
        selected: false,
        totalChars: 0,
        assignedChars: 0,
        setOfChars: [
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
            'g',
            'h',
            'i',
            'j',
            'k',
            'l',
            'm',
            'n',
            'o',
            'p',
            'q',
            'r',
            's',
            't',
            'u',
            'v',
            'w',
            'x',
            'y',
            'z',
        ],
    },
    {
        name: 'uppercase',
        selected: false,
        totalChars: 0,
        assignedChars: 0,
        setOfChars: [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
        ],
    },
    {
        name: 'special-characters',
        selected: false,
        totalChars: 0,
        assignedChars: 0,
        setOfChars: [
            '!',
            '(',
            ')',
            '-',
            '.',
            '?',
            '[',
            ']',
            '_',
            '`',
            '~',
            ';',
            ':',
            '@',
            '#',
            '$',
            '%',
            '^',
            '&',
            '*',
            '+',
            '=',
        ],
    }, {
        name: 'numeric',
        selected: false,
        totalChars: 0,
        assignedChars: 0, setOfChars: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
];
//* Prompts user for pwd length and validates it within range
function getLengthCriteria() {
    while (pwdLength > PWD_MAX_LENGTH || pwdLength < PWD_MIN_LENGTH) {
        pwdLength = prompt('Please enter password length. Length should be between 8 to 128 characters.');
    }
    return pwdLength;
}


function getCharTypes() {
    for (var i = 0; i < criteriaSelection.length; i++) {
        criteriaSelection[i] = confirm('Do you want to use ' + criteriaType[i] + ' to create a password?');
    }
}

var criteriaSelection = [false, false, false, false]
var criteriaType = ['uppercase letters', 'lowercase letters', 'special characters', 'numeric characters']
var pwdLength = 0;
// function needed to ask user for password criteria
function askCriteria() {
    //TODO Ask for the length
    pwdLength = getLengthCriteria(); // Gets and validates the length criteria
    console.log('My Value:', pwdLength);
    //TODO Ask for the types of characters
    n
    getCharTypes();
    console.log(criteriaType);
    console.log(criteriaSelection);

    //TODO Then generate the password
    //TODO Then Display the password
    // var specialPrompt = confirm('Would you like to include special characters in your password?');
    // if (specialPrompt === true) {
    //     console.log(specialPrompt);

    // } else if (specialPrompt === false) {
    //     console.log(specialPrompt);
    // }

}


function generatePassword() {
    for (var i = 0; i < pwdLength; i++) {
        // select criteria randomly 
        // if (random criteriaSelection = true){ 
        //

    }
}



//! Main Function: Write password to the #password input
function writePassword() {
    //TODO Ask for criteria
    askCriteria();
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

