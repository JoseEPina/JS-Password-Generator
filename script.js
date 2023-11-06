// Assignment code here
//* Constant needed here to ensure that these are NOT changed
const PWD_MIN_LENGTH = 8;
const PWD_MAX_LENGTH = 128;
var myPassword = ''; // Generated pwd.
var pwdLength = 0; // User selected pwd length

// Array of Objects for each Criteria 
//TODO  Criteria object:
//TODO  name - Criteria Name as prompt string
//TODO  selectedCriteria - was this criteria selected for password (True for yes/False for no) 
//TODO  characterSet - defines set of the different characters to be used
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

//* Prompts user for pwd length and validates it within range PWD_MIN_LENGTH to PWD_MAX_LENGTH
function getPwdLength() {
    pwdLength = 0; // Resets new pwd length.
    while (pwdLength > PWD_MAX_LENGTH || pwdLength < PWD_MIN_LENGTH) {
        pwdLength = prompt('Please enter password length. Length should be between 8 to 128 characters.');
    }
    return pwdLength;
}

//* Prompts for what criteria to use to generate the pwd.
function getCharTypes() {
    var chooseCriteria = false; //? Check at least ONE criteria Flag.
    //* Loops until at least ONE criteria is selected. 
    while (!chooseCriteria) { 
        for (var i = 0; i < pwdData.length; i++) {
            pwdData[i].selectedCriteria = confirm('Do you want to use ' + pwdData[i].name + ' to create a password?');
            if (pwdData[i].selectedCriteria === true) {
                chooseCriteria = true;
            }
        }
        //* Sends error message.
        if (!chooseCriteria) {
            window.alert('You didn\'t select at least ONE criteria. Please select at least ONE criteria.')
        }
    }
}

//* The for loop below is replacing the old code: var criteriaSelection = [false, false, false, false];
// for (var i = 0; i < pwdData.length; i++) {
//     pwdData[i].selectedCriteria = false;
// }
//* Prompts users for desired pwd length & criteria.
function askCriteria() {
    pwdLength = getPwdLength(); // Prompts for pwd length and validates the length criteria
    // console.log('My Value:', pwdLength); 
    getCharTypes(); // Prompts for criteria selection.
    // console.log(pwdData);
}
//? Generates pwd using length and selected criteria 
function generatePassword() {
    myPassword = ''; // Re-initialize pwd string.
    //? Loops for total password length
    for (var i = 0; i < pwdLength; i++) {
        //? calculate charType (lower, upper, special, numeric) index.
        var charTypeBucketIndex = Math.floor(Math.random() * pwdData.length); // Number of criteria = pwdData.length which is 4
        //? Loops until random charTypeBucketIndex is in list of the selected criteria.
        while (pwdData[charTypeBucketIndex].selectedCriteria === false) {
            charTypeBucketIndex = Math.floor(Math.random() * pwdData.length);
            // console.log('Bucket number:', charTypeBucketIndex);
        }
        console.log('**Selected Bucket:**', charTypeBucketIndex);
        //? Randomly selects a character from a randomly selected criteria/character set.
        var selectedBucketCharIndex = Math.floor(Math.random() * (pwdData[charTypeBucketIndex].characterSet.length));
        // console.log('Selected Bucket: ' + charTypeBucketIndex);
        // console.log('Bucket Content: ' + pwdData[charTypeBucketIndex].characterSet);
        // console.log('Bucket Size: ' + pwdData[charTypeBucketIndex].characterSet.length);
        // console.log('Selected Bucket Char Index: ' + selectedBucketCharIndex);
        // console.log('Selected Character ' + pwdData[charTypeBucketIndex].characterSet[selectedBucketCharIndex]);

        //? Randomly selects a character from a randomly selected criteria/character set.
        myPassword += pwdData[charTypeBucketIndex].characterSet[selectedBucketCharIndex];
        // console.log('password: ', password);
    }
    // console.log('password: ', myPassword);
    return myPassword;
}

//! Main Function: Write password to the #password input
function writePassword() {
    askCriteria(); //? Prompts users for desired pwd length & criteria.
    var password = generatePassword(); //? Generates password applying user inputs.
    var passwordText = document.querySelector('#password'); //? Selects element from page with id = #password
    passwordText.value = password; //? Updates page with generated password.
}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

