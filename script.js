// Assignment code here
//* Constant needed here to ensure that these are NOT changed
const criteriaNumber = 4;

// Object array assignments needed here to store the each of
// the password criteria needed for each selection.
//! Variable needed here to create an Object Array assignment
//! for the password Criteria
// Criteria object:
// name - Criteria Name
// selected - was this criteria selected for password (yes/no)
// totalChars - random # of total criteria characters TO BE used in password
// assignedChars - current # of criteria characters used in password
// setOfChars - defines set of the different characters to be used FOR THIS criteria

var criteria = [
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
    },{name: 'numeric',
selected: false,
totalChars: 0,
assignedChars: 0, setofChars:[ '0','1','2','3','4', '5','6','7','8','9'],},
];

function generatePassword() {
    var specialPrompt = confirm('Would you like to include special characters in your password?');
    console.log('inside gereratePassword func');
    if (specialPrompt === true) {
        console.log(specialPrompt);
    } else if (specialPrompt === false) {
        console.log(specialPrompt);
    }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
