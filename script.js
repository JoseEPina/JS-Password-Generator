// Assignment code here
//* Constant needed here to ensure that these are NOT changed
const PWD_MIN_LENGTH = 8;
const PWD_MAX_LENGTH = 128;
var password = '';

// Object array assignments needed here to store the each of
// the password criteria needed for each selection.
//! Variable needed here to create an Object Array assignment
//! for the password Criteria
//TODO  Criteria object:
//TODO  name - Criteria Name
//TODO  selected - was this criteria selected for password (yes/no)
//TODO  setOfChars - defines set of the different characters to be used FOR THIS criteria

var pwdData = [
    {
        name: 'lowercase characters',
        selectedCriteria: false,
        characterSet: [
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
        name: 'uppercase characters',
        selectedCriteria: false,
        characterSet: [
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
        name: 'special characters',
        selectedCriteria: false,
        characterSet: [
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
        name: 'numeric characters',
        selectedCriteria: false,
        characterSet: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
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
    for (var i = 0; i < pwdData.length; i++) {
        pwdData[i].selectedCriteria = confirm('Do you want to use ' + pwdData[i].name + ' to create a password?');
    }
}

//* The for loop below is replacing the old code: var criteriaSelection = [false, false, false, false];
for (var i = 0; i < pwdData.length; i++) {
    pwdData[i].selectedCriteria = false;
}
var criteriaType = ['uppercase letters', 'lowercase letters', 'special characters', 'numeric characters'];
var pwdLength = 0;
// function needed to ask user for password criteria
function askCriteria() {
    //TODO Ask for the length
    pwdLength = getLengthCriteria(); // Gets and validates the length criteria
    console.log('My Value:', pwdLength);
    //TODO Ask for the types of characters    
    getCharTypes();
    console.log(pwdData);
}

//TODO Then generate the password
//* Generates password using length and selected criteria 
function generatePassword() {
    // Loops for total password length
    for (var i = 0; i < pwdLength; i++) {
        // calculate charType (lower, upper, special, numeric) index.
        var charTypeBucketIndex = Math.floor(Math.random() * pwdData.length); // Number of criteria = pwdData.length which is 4
        // Loops until random charTypeBucketIndex is in list of the selected criteria.
        while (pwdData[charTypeBucketIndex].selectedCriteria === false) {
            charTypeBucketIndex = Math.floor(Math.random() * pwdData.length);
            console.log('Bucket number:', charTypeBucketIndex);
        }
        console.log('**Selected Bucket:**', charTypeBucketIndex);
        var selectedBucketCharIndex = Math.floor(Math.random() * (pwdData[charTypeBucketIndex].characterSet.length));
        console.log('Selected Bucket: ' + charTypeBucketIndex);
        console.log('Bucket Content: ' + pwdData[charTypeBucketIndex].characterSet);
        console.log('Bucket Size: ' + pwdData[charTypeBucketIndex].characterSet.length);
        console.log('Selected Bucket Char Index: ' + selectedBucketCharIndex);
        console.log('Selected Character ' + pwdData[charTypeBucketIndex].characterSet[selectedBucketCharIndex]);

        password += pwdData[charTypeBucketIndex].characterSet[selectedBucketCharIndex];
        // console.log('password: ', password);
    }
    // console.log('password: ', password);
    return password;
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

